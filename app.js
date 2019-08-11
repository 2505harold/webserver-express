const http = require('http')
//para escuchar peticiones http debemos crear el servidor
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'application/json'});

    let salida = {
        nombre: 'fernando',
        edad: 32,
        url:req.url
    }

    res.write(JSON.stringify(salida));
    res.end();
})
.listen(3000);

console.log('Escuchando el puerto 3000') 