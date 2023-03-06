const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require( './deploy/config.json' );
 
const htmlFileRegex = new RegExp(/(src\/demos\/)|(src\\demos\\)/, 'ig');
let directories = config.entryPoints.pages.directory;

let htmlFiles = [];
let entryPoints = {}; 

while (directories.length > 0) {
  let directory = directories.pop();
  let dirContents = fs.readdirSync(directory).map(file => path.join(directory, file));

  htmlFiles.push(...dirContents.filter(file => file.endsWith('.html')));
  directories.push(...dirContents.filter(file => fs.statSync(file).isDirectory()));
}
 
htmlFiles.map(file => {
    let name = file.replace( htmlFileRegex, "" );
    entryPoints[ name ] = path.resolve(
      __dirname, file.replace( ".html", ".js" )
    ); 
  }
); 

module.exports = ( env ) => {

  const environment = env.env;   
  const target = config.targets[ environment ];  
  const outputPath = target.outputPath;
  const publicPath = target.publicPath; 
  const assetModuleFilename = target.assetModuleFilename; 

  const watch = ( environment === 'dev' ) ? true : false;  
  const clean = ( environment === 'dev' ) ? true : false;  

  return {
    stats: {
      loggingDebug: ["sass-loader"],
    },
    entry: entryPoints,
    output: {
      path: path.resolve(__dirname, outputPath),
      filename: '[name]_[contenthash].js',
      clean: clean,
      assetModuleFilename: assetModuleFilename + './[name][ext]',
      publicPath: publicPath + '/'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test:/\.scss$/,
          exclude: /node_modules/,
          type: "asset/resource",
          generator: {
            filename: "styles/[name].css",
          },
          use: [ { 
            loader : "sass-loader", 
            options: { 
              sourceMap: true, 
              sassOptions: {
                outputStyle: ( environment !== 'dev' ) ? "compressed" : undefined,
              }
            } 
          } ],
        }, 
        {
          test: /\.(png|svg|jpg|gif|jpe?g|ico)$/,  
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]'
          }
        }
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    watch: watch, 
    watchOptions: {
      aggregateTimeout: 200,
      poll: 1000,
    },
    plugins: [
      ...htmlFiles.map(htmlFile =>
        new HtmlWebpackPlugin({
          template: htmlFile,
          filename: htmlFile.replace( htmlFileRegex, "" ), 
          chunks: [ htmlFile.replace( htmlFileRegex, "" ) ]
        })
      )
    ]
  }

}
