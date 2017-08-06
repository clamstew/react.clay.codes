

export const getBlogConfig = () => {
  return fetch('/blog-config/config.json').then((response) => response.json());
};

// add react router - to get a slug and map to an object

export const requestMarkdownService = () => {

  const someMDFile = 'https://gist.githubusercontent.com/clamstew/f462169dbbc140f97839c3ecf54ed05e/raw/c9a521c27f55ef3e9fc01b73b165edd934e7e662/mardn.md';

  return fetch(someMDFile).then((response) => response.text());

};