#!/usr/bin/env node
// still creates a new markdown file but puts it in the pages folder
// then this can be used to show in a different layout
// or use a different template style
//
// will have greymatter meta-data that can include:
// - showInMainNav: true/false


// to test - `node --harmony scripts/new-blog-post`
// `yarn newpage -- --title='Awesome Idea' --description='details of awesome idea'`
// `yarn newpage -- --title='React Redux Sagas with Web Animations' --description='Triggering complex animations through redux sagas, using native web animation api'`

const argv = require('yargs').argv;
const fs = require('fs');
const moment = require('moment');
const reactBlogConfig = require('./common').getReactBlogConfig();

// grab user configs for where put markdown files
const publicFolder = reactBlogConfig.publicFolder; // e.g. '/public'
const pageMarkdownFolder = reactBlogConfig.postFolder; // e.g. '/blog-markdown'
const finalPageMarkdownFolder = publicFolder + pageMarkdownFolder; // '/public/blog-markdown'

const NOW_UNIX = +moment()

// attempt to name new file
let newFileName = 'New Page'// get from commandline argument and have a default
// let newFileNameId = null;
const titleToKebapCase = (filename) => filename.toLowerCase().replace(/ /g, '-')
const addMdExt = (filename) => `${NOW_UNIX}-${titleToKebapCase(filename)}.md`

// use title passed in from CLI
if(argv.title) newFileName = argv.title

// file path and file name
const folderFile = `${finalPageMarkdownFolder}/${addMdExt(newFileName)}`
const finalFile = `${process.cwd()}${folderFile}`


// template for contents of new markdown post
// note grey matter in json format inserted at the top of the md file
const newMarkdownFileTemplate = `<!--Greymatter
{
  "name": "${argv.title || 'Add page title here ...'}",
  "description": "${argv.description || 'Add page description here ...'}",
  "createDate": "${new Date()}",
  "updateDate": "${new Date()}",
  "slug": "${titleToKebapCase(newFileName)}",
  "file": "${pageMarkdownFolder}/${addMdExt(newFileName)}"
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