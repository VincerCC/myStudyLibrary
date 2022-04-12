const dropAreaEle = document.querySelector("#dropArea");
const imgPreviewEle = document.querySelector("#imagePreview");
const IMAGE_MIME_REGEX = /^image\/(jpe?g|gif|png)$/i;

["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
    dropAreaEle.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}
["dragenter", "dragover"].forEach((eventName) => {
  dropAreaEle.addEventListener(eventName, highlight, false);
});
["dragleave", "drop"].forEach((eventName) => {
  dropAreaEle.addEventListener(eventName, unhighlight, false);
});

// 添加高亮样式
function highlight(e) {
dropAreaEle.classList.add("highlighted");
}

// 移除高亮样式
function unhighlight(e) {
dropAreaEle.classList.remove("highlighted");
}

dropAreaEle.addEventListener("drop", handleDrop, false);

function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = [...dt.files];
  console.log(files,'files')
  files.forEach((file) => {
    previewImage(file, imgPreviewEle);
  });
  // 省略文件上传代码
}

function previewImage(file, container) {
  if (IMAGE_MIME_REGEX.test(file.type)) {
    const reader = new FileReader();
    reader.onload = function (e) {
      let img = document.createElement("img");
      img.src = e.target.result;
      container.append(img);
      console.log(img,'img')
    };
    reader.readAsDataURL(file);
  }
}
function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = [...dt.files];
  // 省略图片预览代码
  files.forEach((file) => {
    upload({
      url: "/single",
      file,
    });
  });
}


function upload({ url, file, fieldName = "file" }) {
  let formData = new FormData();
  formData.set(fieldName, file);
  console.log(fieldName,'fieldName')
  console.log(file,'file')
}