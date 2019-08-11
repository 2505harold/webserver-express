const express = require('express')
const app = express();
const hbs = require('hbs');


//middleware, instruccion con callback siempre se ejecuta no 
//importa la ruta get o url la persona pida
app.use(express.static(__dirname+'/public'))

//Express HBS Engine
hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine', 'hbs');

//config
const port = process.env.PORT || 3000;

//helpers
hbs.registerHelper('getAnho',()=>{
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar',(text)=>{
    let palabras = text.split(' ')
    palabras.forEach((palabra,idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ')
})

//routes
app.get('/',function(req,res){
     res.render('home',{nombre:'harold'})
})
app.get('/about',function(req,res){
    res.render('about')
})

//active server
app.listen(port,()=>{
    console.log(`escuchando peticiones en el puerto ${port}`)
})