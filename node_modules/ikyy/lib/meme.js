const fetch = require('node-fetch')

const fetchJson = (url, options) =>
    new Promise((resolve,reject) => 
        fetch(url, options)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(err => {
                console.log(err)
                reject(err)
            })
    )

module.exports = () => new Promise((resolve, reject) => {
    const subreddits = ['dankmemes', 'wholesomeanimemes','dark', 'wholesomememes', 'AdviceAnimals', 'MemeEconomy', 'memes', 'terriblefacebookmemes', 'teenagers', 'historymemes']
    const randSub = subreddits[Math.random() * subreddits.length | 0]
    console.log('looking for memes on ' + randSub)
    fetchJson('https://meme-api.herokuapp.com/gimme/' + randSub)
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})