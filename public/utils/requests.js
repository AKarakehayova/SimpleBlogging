let axios = require('axios')
module.exports = {
  addNewPost: addNewPost,
	getPosts: getPosts,
	getPostById: getPostById,
	updatePostById: updatePostById
}

function addNewPost (data) {
  axios.post('http://localhost:9000/api/posts', data)
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
}

function getPosts () {
  return axios.get('http://localhost:9000/api/posts')
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    })
}

function getPostById(id){
	return axios.get(`http://localhost:9000/api/posts/${id}`)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    })
}

function updatePostById(id, data){
	return axios.put(`http://localhost:9000/api/posts/${id}`, data)
	.then(function(response){
		return response
	})
	.catch(function (error) {
		console.log(error)
	})
}
