module.exports = async(url, costum) => {
	if(!url) return new Error(`code html invalid`)
	url = encodeURIComponent(url)
	return new Promise(async(resolve, reject) => {
		let ni = await require('axios').get(
          `https://sl.rzkyfdlh.tech/createpug?code=${url}&name=${
            costum ? costum : ""
          }`
        );
		resolve(ni.data)
	
	})
}