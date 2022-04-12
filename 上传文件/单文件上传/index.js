const uploadFileEle = document.querySelector("#uploadFile");



async function uploadFile() {
  if (!uploadFileEle.files.length) return;
  console.log(uploadFileEle.files,'uploadFileEle.files')
  const file = uploadFileEle.files[0]; // 获取单个文件
  console.log(file)
  let formData = new FormData();
  formData.set('fieldName', file);
  console.log(formData.get('fieldName'),'formData.fileName')
}
