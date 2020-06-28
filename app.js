const express = require('express')
const dotenv = require('dotenv')
const exphbs = require('express-handlebars')
const Path = require('path')


dotenv.config({ path: './config/config.env' })

const app = express();


app.use(express.static(Path.join(__dirname, 'public')))

app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')


// Routes


app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 3000


app.listen(PORT,
    console.log(`server running on port ${PORT}`))