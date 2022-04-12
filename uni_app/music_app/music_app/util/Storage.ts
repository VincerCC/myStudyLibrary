function setStorage(key: string, value: any):void{
  if(getStorage(key) === value) return
  window.localStorage.setItem(key, value)
}
function storageHasItem(key: string): boolean {
  return getStorage(key) ? true : false
}
function getStorage(key: string): any {
  return window.localStorage.getItem(key)
}
export {
  setStorage,
  storageHasItem,
  getStorage
}