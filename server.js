const express = require('express')
const app = express()

app.get('/', (req,resp) => {
	// resp.send('<h1>hello express</h1>')
	resp.send({
		name: 'Beef',
		likes: [
			'beef',
			'smelling like beef'
		]
	})
})

app.get('/about', (req, resp) => {
	resp.send('<p>About Beef</p>')
})

app.get('/bad', (req, resp) => {
	resp.send({
		errorMessage: 'Bad Request'
	})
})

app.listen(3000)