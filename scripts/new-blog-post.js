#!/usr/bin/env node

// to test - `node --harmony scripts/new-blog-post`
// `yarn newpost -- --title='Awesome Idea' --description='details of awesome idea'`
// `yarn newpost -- --title='React Redux Sagas with Web Animations' --description='Triggering complex animations through redux sagas, using native web animation api'`

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

const NOW_UNIX = +moment()

// attempt to name new file
let newFileName = 'New Post'// get from commandline argument and have a default
let newFileNameId = null;
const titleToKebapCase = (filename) => filename.toLowerCase().replace(/ /g, '-')
const addMdExt = (filename) => `${NOW_UNIX}-${titleToKebapCase(filename)}.md`

// use title passed in from CLI
if(argv.title) newFileName = argv.title

// file path and file name
const folderFile = `${markdownFolder}/${addMdExt(newFileName)}`
const finalFile = `${process.cwd()}${folderFile}`

console.log('argv.title', argv.title)
console.log('argv.description', argv.description)

const newMarkdownFileTemplate = `<!--Greymatter
{
  "name": "${argv.title || 'Add title here ...'}",
  "description": "${argv.description || 'Add description here ...'}",
  "createDate": "${new Date()}",
  "updateDate": "${new Date()}",
  "slug": "${titleToKebapCase(newFileName)}",
  "file": "${folderFile}"
}
-->

Write new post here in markdown ...

[maybe add direction about where to look on how to write markdown]
`

// add file to file system
fs.writeFile(finalFile, newMarkdownFileTemplate, function(err) {
    if(err) return console.log(err)

    console.log("New markdown blog post file was created in "+ markdownFolder);
});