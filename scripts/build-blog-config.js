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
// or `yarn blogconfig`

const fs = require('fs');
const dir = require('node-dir');
const reactBlogConfig = require('./common').getReactBlogConfig();


// grab user configs for where put markdown files
const publicFolder = reactBlogConfig.publicFolder; // e.g. '/public'
const blogConfig = reactBlogConfig.blogConfig; // e.g. '/blog-markdown'
const finalBlogConfigFolder = publicFolder + blogConfig; // '/public/blog-markdown'

const markdownFolder = reactBlogConfig.markdownFolderInPublicFolder; // e.g. '/blog-markdown'
const finalMarkdownFolder = publicFolder + markdownFolder; // '/public/blog-markdown'

// file path and file name
const finalFile = `${process.cwd()}${finalBlogConfigFolder}`


const postsMardown = []; // collection of post markdown in order
const postsMardownFiles = []; // collection of post markdown file name in order


// @FIXME - may not use
const getMarkdownFileContents = (fileName) => fs.readFileSync(fileName);

// @TODO - if any dupblicate slugs
// iterate them in the config with '-2', '-3', etc.
// must be unique so router has unique thing to go to

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


const getFinalJsonConfig = () => {
  return JSON.stringify({
    posts: postsMardown,
    pages: []
  });
};


const writeFinalConfigFile = () => {
  fs.writeFile(finalFile, getFinalJsonConfig(), (err) => {
    if(err) return console.log(err)
    console.log("New markdown blog post file was created: "+ finalBlogConfigFolder);
  })
}


const buildBlogConfig = () => {
  dir.readFiles(process.cwd()+finalMarkdownFolder,{
        match: /.md$/,
        exclude: /^\./
      },
      (err, content, next) => {
          if (err) throw err;
          postsMardown.push(parseGreyMatter(content))
          // console.log('content:', content);
          next();
      },
      (err, files) => {
          if (err) throw err;
          console.log('finished reading files:', files.map((f) => f.replace(process.cwd() + markdownFolder, '')));
          console.log('postsMardown:', postsMardown);
          writeFinalConfigFile();
      });

};


buildBlogConfig()

module.exports = buildBlogConfig









