const axios = require('axios')
const isUrl = (url) => {
        return url.match(
          new RegExp(
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
            "gi"
          )
        );
      };
const shortlink = async(url, costum) => {
	if(!isUrl(url)) return new Error(`url invalid`)
	return new Promise(async(resolve, reject) => {
		let ni = await axios.get(
          `https://sl.rzkyfdlh.tech/create?url=${url}&costum=${
            costum ? costum : ""
          }`
        );
		resolve(ni.data)
	
	})
}

module.exports = { shortlink }