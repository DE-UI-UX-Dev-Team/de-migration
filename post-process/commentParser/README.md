Comment Parser is a new feature that allows us to write comments in our code, then use `npm run parse-css-docs` to retrieve the comments and store them as JSON at this location: `./src/pages/docs/data/design-system-meta-doc.json`

Comment Parser allows developers to define arbitrary tags `@` that it will transform into attributes within your JSON.
For Direct Energy's purposes, the following tags are leveraged but are not mandatory:

-   **filter-selector** - filters CSS styles into your JSON based on a partial or exact match
-   **filter-css-va**r - filters CSS variables into your JSON based on a partial or exact match
-   **filter-scss-var** - filters SCSS variables into your JSON based on a partial or exact match
-   **description** - description of the styles you are documenting
-   **title** - title of the styles you are documenting
-   **characteristics** - a list of characteristics describing the styles are documenting
-   **doc-category** - used in the application to filter where the given documentation will be displayed. Expected value [`css-framework`|`design-tokens`]
-   **doc-type** - category and classification of the documentation
-   **uri-demo-page** - link to original version 1 documentation
-   **uri-related-links** - link to other internal resources, links, and external Figma resources
-   **uri-example-iframe** - reference to iframes stored leveraged in the display of documentation

Sample Input (CSS Comment Block):
`/\*\*

-   Description: Styles for the footer section
-   @title Test
-   @description This is a test
-   @filter-selector .row.even-3--sm
-   @filter-css-var --
-   @filter-scss-var $
-   \*/

:root {
--foo-bar: #fff;
--green-bar: #fff;
}

$deep-sea: #fff;
$makeshit: blue;

.row.even-3--sm > [class*='col'] {
background-color: #555;
color: #fff;
padding: var(--red-shift);
}

.footer > .footer-container {
background-color: #555;
color: #fff;
padding: var(--red-shift);
}

.footer .footer-link {
color: #fff;
text-decoration: none;
}

/_--- end ---_/`

Sample Output (JSON):
`[
  [
    {
      "description": "Description: Styles for the footer section",
      "tags": [
        {
          "tag": "title",
          "value": "Test"
        },
        {
          "tag": "description",
          "value": "This is a test"
        },
        {
          "tag": "filter-selector",
          "value": ".row.even-3--sm"
        },
        {
          "tag": "filter-css-var",
          "value": "--"
        },
        {
          "tag": "filter-scss-var",
          "value": "$"
        }
      ],
      "styles": {
        ".row.even-3--sm > [class*='col']": {
          "background-color": "#555",
          "color": "#fff",
          "padding": "var(--red-shift)"
        }
      },
      "scssVariables": {
        "$deep-sea": "#fff",
        "$makeshit": "blue"
      },
      "cssVariables": {
        "--foo-bar": "#fff",
        "--green-bar": "#fff"
      }
    }
  ]
]`
