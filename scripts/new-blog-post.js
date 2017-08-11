// to test - `node --harmony scripts/new-blog-post`


var fs = require('fs');


// grab user configs for where put markdown files
const packageFile = require(process.cwd()+'/package.json');
const reactBlogConfig = packageFile.reactBlog;
const markdownFolder = reactBlogConfig.markdownFolder;


const newFileName = 'newFile.md';// get from commandline argument and have a default


const newMarkdownFileTemplate = `<!--Greymatter
{
  "name": "Add title ...",
  "description": "Add description here..",
  "createDate": "${new Date()}"
}
-->

Write new post here in markdown ...

[maybe add direction about where to look on how to write markdown]
`;

// @TODO - if file exist - add _1, _2 ... to the name

fs.writeFile(`${process.cwd()}${markdownFolder}/${newFileName}`, newMarkdownFileTemplate, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("New markdown blog post file was created in "+ markdownFolder);
});