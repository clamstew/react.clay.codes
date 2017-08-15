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

// http GET markdown file by slug, looking up real md file in blog-config
export const requestMarkdownService = ({slug=null,config={}}) => {
  const postconfig = _findBlogPostConfigFromSlug({slug, config});
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