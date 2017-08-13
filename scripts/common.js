
const getReactBlogConfig = () => {
  const packageFile = require(process.cwd()+'/package.json');
  return packageFile.reactBlog;
};


module.exports = {
  getReactBlogConfig: getReactBlogConfig
};