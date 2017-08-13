#!/usr/bin/env node

// to test - `node --harmony scripts/new-blog-post`

const argv = require('yargs').argv;
const fs = require('fs');
const moment = require('moment');

// @FIXME - repeated in blog config - need to centralize
// grab user configs for where put markdown files
// const packageFile = require(process.cwd()+'/package.json');
// const reactBlogConfig = packageFile.reactBlog;
const reactBlogConfig = require('./common').getReactBlogConfig();
const markdownFolder = reactBlogConfig.markdownFolder;
console.log('markdownFolder', markdownFolder);

// attempt to name new file
let newFileName = 'newFile'// get from commandline argument and have a default
let newFileNameId = null;
const addMdExt = (filename) => `${+moment()}-${filename}.md`

// check if file name exists
// try {
//   const result = fs.readFileSync(process.cwd()+markdownFolder + '/' + addMdExt(newFileName));
//   const fileExists = !!result === true;
//   console.log('fileExists',fileExists);
//   // if file exists increment file name, so won't create same file or overwrite something
//   if(fileExists) {
//     if(!newFileNameId) {
//       newFileNameId = 1
//     } else {
//       newFileNameId++; // @FIXME -- probably a good time to think about prepending time
//       // would solve the issue altother
//       // and can switch efforts to padding in a title
//       // and using that for the end slug
//       // then putting more in the front matter
//     }
//     newFileName = newFileName + newFileNameId;
//   }
// } catch(e) {
//   // file did not exist - let script proceed
//   // console.warn('exception: ', e);
//   console.log('file DID NOT Exist - let script proceed; acknowledge exception', e);
// }
// 
console.log('argv.ships', argv.ships)

const newMarkdownFileTemplate = `<!--Greymatter
{
  "name": "Add title ...",
  "description": "Add description here..",
  "createDate": "${new Date()}"
}
-->

Write new post here in markdown ...

[maybe add direction about where to look on how to write markdown]
`

// @TODO - if file exist - add _1, _2 ... to the name

fs.writeFile(`${process.cwd()}${markdownFolder}/${addMdExt(newFileName)}`, newMarkdownFileTemplate, function(err) {
    if(err) return console.log(err)

    console.log("New markdown blog post file was created in "+ markdownFolder);
});