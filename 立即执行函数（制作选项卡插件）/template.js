var _tabTemplate = (function () {
  function create(type) {
    switch (type) {
      case "tab":
        return `
        <div class="tab-item {{active}}">{{tab}}</div>`;
      case "page":
        return `
        <div class="page-item {{active}}">{{page}}</div>`;
      default:
        break;
    }
  }
  return {
    create,
  };
})();
