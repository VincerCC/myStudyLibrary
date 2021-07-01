var _tools = (function () {
  function templateReplace(template, replaceObj) {
    return template.replace(/\{\{(.*?)\}\}/g, (node, key) => {
      return replaceObj[key.trim()];
    });
  }
  return {
    templateReplace: templateReplace,
  };
})();
