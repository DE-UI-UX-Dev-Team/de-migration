# 2023 Direct Energy Migration

## Getting Started 

1. Installation
   ```
    $ npm install
   ``` 
2. Copy example-config.json 
   ```
   $ cd deploy && mv example-config.json config.json 
   ```
3. Start development & watch features  
   ```
    $ npm run build
   ```
4. Production build 
   ```
    $ npm run dist
   ``` 

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
3. Open the corresponding **‘__abstracts.scss', ‘__base.scss’,** and **'__components.scss’** and add a **“@forward“** statement to make your new styles available in the index.html
4. Add elements in the **pages/index.html** to target with your CSS
5. Running the **public/index.html** file in your browser and refreshing after saves will allow you to review your changes

---
## Production Code
 
To optimize CSS and JS files for distribution in a third party solution: 

1. Run 'npm run dist' in the command line 
2. In Finder or File Explorer, navigate to the **'dist/'** directory and open the index.html in the browser to verify your styles 
3. **dist/main.css** and **dist/main.js** are compressed and ready for use in other projects