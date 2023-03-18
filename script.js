//Configurações
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');


//chamando o express
const app = express();
const port = 8000;

// importação rotas
const notesRoutes = require('./routes/notes');

//Vinculando a nossa rota route
app.use('/notes', notesRoutes);

//Template Engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'))


//rotas
app.get('/', function(req, res) {
	res.render('home')
})

//mandando sinal de liste na porta do servidor;
app.listen(port, () => {
	console.log(`app is running in localhost: ${port}`)
})

