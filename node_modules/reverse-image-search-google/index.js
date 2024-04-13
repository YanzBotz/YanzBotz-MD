const axios = require('axios')

const reverseImageSearch = (imageUrl, callBack) => {
  axios.get('https://node-reverse-image-search.herokuapp.com/?imageUrl=' + encodeURIComponent(imageUrl))
  .then(response => {
    callBack(response.data)
  })
}

module.exports = reverseImageSearch
