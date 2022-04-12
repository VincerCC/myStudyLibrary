const baseUrl = 'http://localhost:4000'
export function request (config:any) {
	console.log(config)
  return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + config.url,
			data: config.data,
			header: config.header,
			method: config.method || 'POST',
			success: (res)=>{
				resolve(res.data)
			},
			fail: (error) => {
				reject(error)
			}
		})
  })

}