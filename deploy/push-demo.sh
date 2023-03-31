source .bashrc

branchName=$(git rev-parse --abbrev-ref HEAD)
echo ">> this branch $branchName" 
# echo "\n"
# git push --set-upstream origin $branchName 

# Verify global variables
if [ "${DEMO_REPOSITORY_SSH}" == "" ];then 
    echo "\n>> Undefined variable 'DEMO_REPOSITORY_HTTP' in .bashrc file\n>> Ending script."
    kill -INT $$
fi

# Detect Demo Repository
echo "\n>> Looking for directory 'deploy/demo-repo/'" 
DEMO_DIR=deploy/demo-repo/
if test -d "$DEMO_DIR"; then
    echo "\n>> Directory $DEMO_DIR exists."
else
    echo "\n>> Direcory $DEMO_DIR does not exist. Downloading Repo."
    git clone ${DEMO_REPOSITORY_SSH} deploy/demo-repo
fi 
 
# Reset Demo Repository 
cd $DEMO_DIR 
echo "\n>> Reset $DEMO_DIR."
git rm -rf .
git clean -fxd 
cd -

# Run Distribution
npm run dist

# Copy Distribution to Demo
cp -r dist/ $DEMO_DIR 

# Commit changes 
cd $DEMO_DIR 
git add -A
git commit -m "Commit demo for $branchName"

# Push demo to the remote repository
git push origin 

# Done, Publish Link to Demo Site
echo "\n\n>> Link to Demo: https://$DEMO_REPOSITORY_SITE"