# 2023 Direct Energy Migration

## Getting Started

1. Load private environment variables by copying the bash runtime configuration file and adding the FONTAWESOME_NPM_AUTH_TOKEN token that you received from your administrator into this file

    ```
    $ cp .bashrc.example .bashrc && . .bashrc
    ```

2. Installation
    ```
     $ npm install
    ```
3. Copy example-config.json
    ```
    $ cd deploy && cp example-config.json config.json
    ```
4. Start development & watch features
    ```
     $ npm start
    ```
5. Run Jest test in **test** directory
    ```
     $ npm test
    ```
6. Production build
    ```
     $ npm run dist
    ```
7. Develop Storybook Components
    ```
     $ npm run storybook
    ```

Note: This project requires an implementtaion of (sh) and does not support command.exe at this time

---

## Basic Usage

### Modify/Add Styles to Existing Files

1. Run 'npm run build' in the command line
2. Then in either the **‘abstracts/', ‘base/',** or **'components/’** directories, open any of the existing .scss files and begin modifying the styles then save your changes
3. Add elements in the **pages/index.html** to target with your CSS
4. Running the **public/index.html** file in your browser and refreshing after saves will allow you to review your changes

### Add New SASS Files

1. Run 'npm run build' in the command line
2. Then in either the **‘abstracts/', ‘base/',** or **'components/’** directories, add a new .scss file
3. Open the corresponding **‘**abstracts.scss', ‘**base.scss’,** and **'\_\_components.scss’** and add a **“@forward“** statement to make your new styles available in the index.html
4. Add elements in the **pages/index.html** to target with your CSS
5. Running the **public/index.html** file in your browser and refreshing after saves will allow you to review your changes

---

## Publish Demo with PR

To publish a demo for in-browser internal review:

1. Establish a GitHub Page using the instructions in this link https://pages.github.com/ or plan to leverage an existing account.
2. Once the repo for your GitHub Page exists, retrieve the URL for cloning your repo via SSH. Example git@github.com:username/my-demo-site.github.io.git
3. In the .bashrc file at the root of the project, set the value of DEMO_REPOSITORY_SSH variable to the SSH Clone URL:

```
export DEMO_REPOSITORY_SSH=<ssh-clone-url-here>
```

4. Also in the .bashrc file at the root of the project, set the value of DEMO_REPOSITORY_SITE to the name of the GitHub Page repository:

```
export DEMO_REPOSITORY_SITE=my-demo-site.github.io.git
```

5. To publish your demo and push a copy of your code to the DE-UI-UX-Dev-Team/de-migration repository, run:

```
npm run deploy
```

6. Once the command completes the URL for the GitHub Page will print. Be sure to include a link to your Demo in your Pull Request and add it to your Jira Task when it's ready for review.

---

## Production Code

To optimize CSS and JS files for distribution in a third party solution:

1. Run 'npm run dist' in the command line
2. In Finder or File Explorer, navigate to the **'dist/'** directory and open the index.html in the browser to verify your styles
3. **dist/main.css** and **dist/main.js** are compressed and ready for use in other projects
