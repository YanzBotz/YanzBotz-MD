module.exports = async(url, costum) => {
	if(!url) return new Error(`code html invalid`)
	if (!url.includes('html')) return SyntaxError(`Code HTML Invalid, Enter the code correctly!`)
	url = encodeURIComponent(url)
	return new Promise(async(resolve, reject) => {
		let ni = await require('axios').get(
          `https://sl.rzkyfdlh.tech/createhtml?code=${url}&name=${
            costum ? costum : ""
          }`
        );
		resolve(ni.data)
	
	})
}