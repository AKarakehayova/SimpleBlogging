const fs = require('fs')

module.exports = {
  getPosts: getPosts,
	addPost: addPost,
	getPostByID: getPostByID,
	updatePost: updatePost,
	deletePost: deletePost
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

function getPostByID (id, callback) {
  fs.readFile(filename, (err, data) => {
    if (err) {
      callback(err)
    }
		var posts = JSON.parse(data)
		let post = posts.filter(p => p.id.toString() === id)
		callback(null, post)
  })
}

function updatePost(id, newData, callback){
	fs.readFile(filename, (err, data)=>{
		if(err){
			callback(err)
		}
		var posts = JSON.parse(data)
		let updatedPost
		posts = posts.filter((p) => {
			if (p.id == id) {
				updatedPost = p;
				return false;
			} else {
				return true;
			}
		});
		updatedPost = Object.assign(updatedPost, newData)
		posts.push(updatedPost)

		fs.writeFile(filename, JSON.stringify(posts, null, 4), function (err) {
      if (err) {
        throw err
      }
      callback(null, posts, updatedPost)
    })
	})
}

function deletePost(id, callback){
	fs.readFile(filename, (err, data)=>{
		if(err){
			callback(err)
		}
		var posts = JSON.parse(data)
		posts = posts.filter((p) => {
			if (p.id == id) {
				return false;
			} else {
				return true;
			}
		});

		fs.writeFile(filename, JSON.stringify(posts, null, 4), function (err) {
      if (err) {
        throw err
      }
      callback(null, posts)
    })
	})
}
