// var hljs = require('highlight.js')
import hljs from 'highlight.js';

import { get } from './util'

export const remarkableOptions = () => ({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
  highlight: (str, lang)=> {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) {}
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (err) {}

    return ''; // use external default escaping
  }
});

export const getBlogConfig = () => {
  return fetch('/blog-config/config.json').then((response) => response.json());
};


const _findBlogPostConfigFromSlug = ({slug, config}) => {
  const posts = get(config, 'posts');
  return posts.find((post) => post.slug === slug);
};

// add react router - to get a slug and map to an object

export const requestMarkdownService = ({slug=null,config={}}) => {

  // const slug; // get react router value for slug
  // ()-> look up blog post file by slug using value in config file json

  // const someMDFile = 'https://gist.githubusercontent.com/clamstew/f462169dbbc140f97839c3ecf54ed05e/raw/3128390e9a75632125b6d33d1122fdb89590ad69/mardn.md';
  const postconfig = _findBlogPostConfigFromSlug({slug, config});
  console.log('postconfig', postconfig.file);
  // const sampleMDLocal = '/blog-markdown/sample.md';

  return fetch(postconfig.file).then((response) => response.text());

};


export const parseGreyMatter = (rawMd) => {
  const match = rawMd.match(/<!--Greymatter(.|\s)*?-->/);
  const rawGreyMatter =  match && match.length ? match[0] : null;

  if(rawGreyMatter) {
    let greyMatterJSON = rawGreyMatter.replace(/<!--Greymatter/, '').replace(/-->/, '');
    return JSON.parse(greyMatterJSON);
  } else {
    return {}
  }
};