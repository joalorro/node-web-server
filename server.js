const express = require('express')
const hbs = require('hbs')
const fs = require('fs')

const port = process.env.PORT || 3000

const app = express()

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

app.use( (req,res,next) => {
	const now = new Date().toString()
	const log = `${now}: ${req.method} ${req.url}`

	console.log(`log`)
	// fs.appendFile('server.log', log + '\n', (err) => {
	// 	if (err) {
	// 		console.log('Unable to append to server.log')
	// 	}
	// })
	next()
})

// app.use((req, res, next) => {
// 	res.render('maintenance.hbs')
// })

app.use(express.static(__dirname + '/public'))

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear()
})

hbs.registerHelper('capitalizeIt', (text) => {
	return text.toUpperCase()
})

app.get('/', (req,resp) => {
	resp.render('home.hbs', {
		pageTitle: 'Home Page',
		welcomeMsg: 'Welcome to the Home Page'
	})
})

app.get('/about', (req, resp) => {
	resp.render('about.hbs', {
		pageTitle: 'About Page',
		text: 'whaddup doe?'
	})
})

app.get('/projects', (req,resp) => {
	resp.render('projects.hbs', {
		pageTitle: 'Projects Page',
		text: 'Projects!'
	})
})

app.get('/bad', (req, resp) => {
	resp.send({
		errorMessage: 'Bad Request'
	})
})



app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})