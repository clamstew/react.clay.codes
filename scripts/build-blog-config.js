// reads through each markdown file
// in designated markdown folder(s)
//
// parses the grey matter for each
// and builds config object of all posts that can be used anywhere
// on the site for listing blog posts
//
// this will then be run on `yarn build`, extended through package.json
// so that its avaible to the app through process.env or some global
//
// to run `node --harmony scripts/build-blog-config`
//
//

const fs = require('fs');
const dir = require('node-dir');

// grab user configs for where put markdown files
const reactBlogConfig = require('./common').getReactBlogConfig();
const markdownFolder = reactBlogConfig.markdownFolder;

// console.log('packageFile', markdownFolder);

const PATH_OF_MARKDOWN_FROM_DOT_FILE = '/public'; // require('.react-blog'); @TODO - grab .react-blog - contains json - grab 'markdown-folder'


const postsMardown = []; // collection of post markdown in order
const postsMardownFiles = []; // collection of post markdown file name in order


// @fixme may not use
const getMarkdownFileContents = (fileName) => fs.readFileSync(fileName);





const parseGreyMatter = (rawMd) => {
  const match = rawMd.match(/<!--Greymatter(.|\s)*?-->/);
  const rawGreyMatter =  match && match.length ? match[0] : null;

  if(rawGreyMatter) {
    let greyMatterJSON = rawGreyMatter.replace(/<!--Greymatter/, '').replace(/-->/, '');
    return JSON.parse(greyMatterJSON);
  } else {
    return {}
  }
};


const buildBlogConfig = () => {
  console.log('adlfjadslfkj', __dirname);
  dir.readFiles(process.cwd()+markdownFolder,{
        match: /.md$/,
        exclude: /^\./
      },
      function(err, content, next) {
          if (err) throw err;
          console.log('content:', content);
          next();
      },
      function(err, files){
          if (err) throw err;
          console.log('finished reading files:', files.map((f) => f.replace(process.cwd() + markdownFolder, '')));
      });

};


buildBlogConfig();

module.exports = buildBlogConfig;