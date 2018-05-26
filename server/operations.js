const fs = require('fs')

module.exports = {
  getPosts: getPosts,
  addPost: addPost
}
let filename = __dirname + '/blog.json'

function getPosts (callback) {
  fs.readFile(filename, function (err, data) {
    if (err) {
      callback(err)
    }		else {
      callback(null, JSON.parse(data))
    }
  })
}

function addPost (newPost, callback) {
  fs.readFile(filename, (err, data) => {
    if (err) {
      callback(err)
    }
    var posts = JSON.parse(data)
    posts.push(newPost)
    fs.writeFile(filename, JSON.stringify(posts, null, 4), function (err) {
      if (err) {
        throw err
      }
      callback(null, posts, newPost)
    })
  })
}
