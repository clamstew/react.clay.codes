
const getReactBlogConfig = () => {
  const packageFile = require(process.cwd()+'/package.json');
  return packageFile.reactBlog;
};


module.exports = {
  getReactBlogConfig: getReactBlogConfig,
  globalMomemntJsFormat: 'dddd, MMMM Do YYYY, h:mm:ss a'
};