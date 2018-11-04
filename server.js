const express = require('express')
const hbs = require('hbs')

const app = express()

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.get('/', (req,resp) => {
	resp.render('home.hbs', {
		pageTitle: 'Home Page',
		welcomeMsg: 'Welcome to the Home Page',
		currentYear: new Date().getFullYear()
	})
})

app.get('/about', (req, resp) => {
	resp.render('about.hbs', {
		pageTitle: 'About Page',
		currentYear: new Date().getFullYear()
	})
})

app.get('/bad', (req, resp) => {
	resp.send({
		errorMessage: 'Bad Request'
	})
})

app.listen(3000, () => {
	console.log('Server running on port 3000')
})