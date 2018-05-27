const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const rootPath = path.normalize(path.join(__dirname, '..'))
const posts = require('./operations')

app.set('app', path.join(rootPath, 'app'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}))

app.use(cookieParser())
app.use(cors())

app.post('/api/posts', (req, res) => {
  let body = req.body
  posts.addPost(body, (err, posts, newPost) => {
    res.writeHead(201, { 'Content-Type': 'application/json', 'Location': `http://127.0.0.1:9000/posts/${newPost.id}` })
    res.end(JSON.stringify(posts))
  })
})

app.get('/api/posts', (req, res) => {
  posts.getPosts((err, posts) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/html'})
      res.write(`
			<html>
					<body>
							<p>Sorry something went wrong :( </p>
					</body>
			</html>
	`)
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(posts))
    }
  })
})

app.get('/api/posts/:postId', (req, res) => {
	console.log(req.params.postId)
  posts.getPostByID(req.params.postId, (err, post) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/html'})
      res.write(`
			<html>
					<body>
							<p>Sorry something went wrong :( </p>
					</body>
			</html>
	`)
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(post))
    }
  })
})

app.put('/api/posts/:postId', (req, res) => {
  posts.updatePost(req.params.postId, req.body, (err, post) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/html'})
      res.write(`
			<html>
					<body>
							<p>Sorry something went wrong :( </p>
					</body>
			</html>
	`)
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(post))
    }
  })
})

app.delete('/api/posts/:postId', (req, res) => {
  posts.deletePost(req.params.postId, (err, post) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/html'})
      res.write(`
			<html>
					<body>
							<p>Sorry something went wrong :( </p>
					</body>
			</html>
	`)
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(post))
    }
  })
})

  // Start the server
app.listen(9000, (err) => {
  if (err) throw err
  console.log('Example app listening on port 9000!')
})
