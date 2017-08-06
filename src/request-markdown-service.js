

// add react router - to get a slug and map to an object

export const requestMarkdownService = () => {

  const someMDFile = 'https://gist.githubusercontent.com/clamstew/f462169dbbc140f97839c3ecf54ed05e/raw/d48b647b149e1e81ac412a551cee02b4516fb4e7/mardn.md';

  return fetch(someMDFile).then((response) => response.text());

};