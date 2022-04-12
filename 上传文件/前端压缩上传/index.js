const uploadFileEle = document.querySelector("#uploadFile");


function generateZipFile(
  zipName, files,
  options = { type: "blob", compression: "DEFLATE" }
) {
  return new Promise((resolve, reject) => {
    const zip = new JSZip();
    for (let i = 0; i < files.length; i++) {
      zip.file(files[i].webkitRelativePath, files[i]);
    }
    zip.generateAsync(options).then(function (blob) {
      zipName = zipName || Date.now() + ".zip";
      const zipFile = new File([blob], zipName, {
        type: "application/zip",
      });
      resolve(zipFile);
    });
  });
}
async function uploadFile() {
  let fileList = uploadFileEle.files;
  console.log(fileList,'fileList')
  if (!fileList.length) return;
  let webkitRelativePath = fileList[0].webkitRelativePath;
  let zipFileName = webkitRelativePath.split("/")[0] + ".zip";
  let zipFile = await generateZipFile(zipFileName, fileList);
  console.log(zipFile, 'zipFile')
  console.log(zipFileName, 'zipFileName')
}