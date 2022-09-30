const express = require("express");
const { Server: HTTPServer } = require("http");
const { Server: IOServer } = require("socket.io");


const app = express();
const httpServer = new HTTPServer(app);
const io = new IOServer(httpServer);

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.send("hello world");
})

// Array para guardar los mensajes.
const arrayMensajes = [{usuario: "pedro", mensaje: "Hola como estas"}];


io.on("connection", (cliente) => {
    console.log("Nuevo cliente conectado.")
    cliente.emit("mensajes", arrayMensajes);

    cliente.on("nuevo-mensaje", (mensaje) => {
        arrayMensajes.push(mensaje);
        
        io.sockets.emit("mensajes", arrayMensajes);
    })
})


// Puerto 
const PORT = 8080;
httpServer.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
