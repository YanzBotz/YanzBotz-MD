module.exports = async(code) => {
	if(!code) return new Error(`code javascritp invalid`)
	code = encodeURIComponent(code)
	return new Promise(async(resolve, reject) => {
		let ni = await require('axios').get(
          `https://sl.rzkyfdlh.tech/encjavascript?code=${code}`
        );
		resolve(ni.data)
	
	})
}