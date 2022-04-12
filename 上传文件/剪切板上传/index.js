const IMAGE_MIME_REGEX = /^image\/(jpe?g|gif|png)$/i;
const uploadAreaEle = document.querySelector("#uploadArea");

uploadAreaEle.addEventListener("paste", async (e) => {
  console.log('paste')
  e.preventDefault();
  const files = [];
  if (navigator.clipboard) {
    let clipboardItems = await navigator.clipboard.read();
    console.log(clipboardItems,'clipboardItems')
    for (const clipboardItem of clipboardItems) {
      for (const type of clipboardItem.types) {
        if (IMAGE_MIME_REGEX.test(type)) {
            const blob = await clipboardItem.getType(type);
            insertImage(blob, uploadAreaEle);
            files.push(blob);
          }
        }
      }
  } else {
      const items = e.clipboardData.items;
      for (let i = 0; i < items.length; i++) {
        if (IMAGE_MIME_REGEX.test(items[i].type)) {
          let file = items[i].getAsFile();
          insertImage(file, uploadAreaEle);
          files.push(file);
        }
      }
  }
  if (files.length > 0) {
    confirm("剪贴板检测到图片文件，是否执行上传操作？")
      && upload({
            url: "/multiple",
            files,
      });
    }
});