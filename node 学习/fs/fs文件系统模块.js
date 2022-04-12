const fs = require('fs')
fs.readFile('./oldResult', 'utf8', function(err, data) {
  if(err) {
    console.log('读取失败了', err)
    return
  }
  console.log(data,'读取成功数据')
  console.log('------')
  const splitArr = data.split(' ')
  const newData = splitArr.map(item => item.replace('=', ':'))
  const newResult = newData.join('\n')

  fs.writeFile('./newResult', newResult, function(err) {
    // 如果写入成功，err 为 null
    // 如果写入失败，err 为错误对象
    if(err) {
      console.log('写入失败了', err)
      return
    }
    console.log(err, '写入成功了')
  })
})