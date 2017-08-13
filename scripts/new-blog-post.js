#!/usr/bin/env node

// to test - `node --harmony scripts/new-blog-post`
// `yarn newpost -- --title='Awesome Idea' --description='details of awesome idea'`
// `yarn newpost -- --title='React Redux Sagas with Web Animations' --description='Triggering complex animations through redux sagas, using native web animation api'`

const argv = require('yargs').argv;
const fs = require('fs');
const moment = require('moment');
const reactBlogConfig = require('./common').getReactBlogConfig();

// grab user configs for where put markdown files
const publicFolder = reactBlogConfig.publicFolder; // e.g. '/public'
const markdownFolder = reactBlogConfig.markdownFolderInPublicFolder; // e.g. '/blog-markdown'
const filnalMarkdownFolder = publicFolder + markdownFolder; // '/public/blog-markdown'

const NOW_UNIX = +moment()

// attempt to name new file
let newFileName = 'New Post'// get from commandline argument and have a default
let newFileNameId = null;
const titleToKebapCase = (filename) => filename.toLowerCase().replace(/ /g, '-')
const addMdExt = (filename) => `${NOW_UNIX}-${titleToKebapCase(filename)}.md`

// use title passed in from CLI
if(argv.title) newFileName = argv.title

// file path and file name
const folderFile = `${filnalMarkdownFolder}/${addMdExt(newFileName)}`
const finalFile = `${process.cwd()}${folderFile}`


// template for contents of new markdown post
// note grey matter in json format inserted at the top of the md file
const newMarkdownFileTemplate = `<!--Greymatter
{
  "name": "${argv.title || 'Add title here ...'}",
  "description": "${argv.description || 'Add description here ...'}",
  "createDate": "${new Date()}",
  "updateDate": "${new Date()}",
  "slug": "${titleToKebapCase(newFileName)}",
  "file": "${markdownFolder}/${addMdExt(newFileName)}"
}
-->

Write new post here in markdown ...

[maybe add direction about where to look on how to write markdown]
`

// add file to file system
fs.writeFile(finalFile, newMarkdownFileTemplate, function(err) {
    if(err) return console.log(err)
    console.log("New markdown blog post file was created: "+ folderFile);
});