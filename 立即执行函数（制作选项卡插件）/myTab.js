(function (tabTemplate, tools) {
  // console.log(tabTemplate);
  function MyTab(id) {
    // console.log(this); //MyTab
    this.el = document.querySelector(id);
    this.data = JSON.parse(this.el.getAttribute("data"));
    this.index = 0;
    // console.log(this.data);
    // console.log(this.el);
  }
  MyTab.prototype.init = function () {
    // 渲染组件
    this.render();
    // 绑定事件
    this.bindEvent();
  };
  MyTab.prototype.render = function () {
    var tabWrapper = document.createElement("div"),
      pageWrapper = document.createElement("div"),
      oFrag = document.createDocumentFragment(); //文档碎片
    tabWrapper.className = "tab-wrapper";
    pageWrapper.className = "page-wrapper";

    this.data.forEach((item, index) => {
      tabWrapper.innerHTML += tools.templateReplace(
        _tabTemplate.create("tab"),
        {
          tab: item.tab,
          active: !index ? "active" : "",
        }
      );
      pageWrapper.innerHTML += tools.templateReplace(
        _tabTemplate.create("page"),
        {
          page: item.page,
          active: !index ? "active" : "",
        }
      );
    });
    oFrag.appendChild(tabWrapper);
    oFrag.appendChild(pageWrapper);
    this.el.appendChild(oFrag);
  };
  MyTab.prototype.bindEvent = function () {
    var doms = {
      tabItems: document.querySelectorAll(".tab-item"),
      pageItems: document.querySelectorAll(".page-item"),
    };
    this.el.addEventListener(
      "click",
      this.handleTabClick.bind(this, doms),
      false
    );
  };
  MyTab.prototype.handleTabClick = function () {
    // console.log(arguments); //第0个是传递的doms，第1个是事件源对象
    var _doms = arguments[0],
      target = arguments[1].target,
      className = target.className.trim();

    console.log(_doms, target);
    if (className === "tab-item") {
      // 还原样式
      _doms.tabItems[this.index].className = "tab-item";
      _doms.pageItems[this.index].className = "page-item";

      // console.log(_doms.tabItems[0], target);
      // 拿到当前点击tab的下标
      // _doms.tabItems是类数组，没有indexOf方法，使用call改变[]的this指向来使用方法
      this.index = [].indexOf.call(_doms.tabItems, target);

      // 修改当前点击的tab样式
      _doms.tabItems[this.index].className = "tab-item active";
      _doms.pageItems[this.index].className = "page-item active";
    }
  };
  window.MyTab = MyTab;
})(_tabTemplate, _tools);
