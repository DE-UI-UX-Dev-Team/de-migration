# Get Environment Variables 
source ./.bashrc

target_env=$1
target_repo=""
target_site=""

# Verify global variables
if [ "$target_env" == "demo" ];then
    if [ -z ${DEMO_REPOSITORY_SSH} ];then 
        echo "\n>> Undefined variable 'DEMO_REPOSITORY_SSH' in .bashrc file\n>> Ending script."
        kill -INT $$
    fi
    
    target_repo=$DEMO_REPOSITORY_SSH
    target_site=$DEMO_REPOSITORY_SITE

else 
    if [ -z ${DEV_REPOSITORY_SSH} ];then 
        echo "\n>> Undefined variable 'DEV_REPOSITORY_SSH' in .bashrc file\n>> Ending script."
        kill -INT $$
    fi
    
    target_repo=$DEV_REPOSITORY_SSH
    target_site=$DEV_REPOSITORY_SITE
fi

# Get Working Branch Name 
branch_name=$(git rev-parse --abbrev-ref HEAD)
echo ">> Uploading demo for branch $branch_name" 
git push --set-upstream origin $branch_name 

# Detect Demo Repository
echo "\n>> Looking for directory 'deploy/demo-repo/'" 
demo_dir=deploy/demo-repo/ 

if test -d "$demo_dir"; then
    echo "\n>> Directory $demo_dir exists." 
    echo "\n>> Checking that remote repo matches target repo."

    # Check to see if remote repository matches target
    cd $demo_dir 
    current_remote_repo=$(git config --get remote.origin.url) 

    echo "\n>> Current repo: $current_remote_repo"
    if [ "${current_remote_repo}" != "${target_repo}" ];then  
        cd -
        rm -rf $demo_dir
        git clone ${target_repo} $demo_dir
    fi
else
    echo "\n>> Directory $demo_dir does not exist. Downloading Repo."
    git clone ${target_repo} $demo_dir
fi 

# Reset Demo Repository 
cd $demo_dir 
echo "\n>> Reset $demo_dir."
git rm -rf .
git clean -fxd 
cd -

# Run Distribution
npm run dist

# Copy Distribution to Demo
cp -r dist/* $demo_dir 

# Commit changes 
cd $demo_dir 
git add -A
git commit -m "Commit demo for $branch_name"

# Push Demo to the Remote Repository
git push origin 

# Done, Publish Link to Demo Site
echo "\n\n>> Link to Demo: https://$target_site"