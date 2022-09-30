const socket = io();

const agregarMensaje = () => {
    const usuario = document.getElementById("usuario").value;
    const mensaje = document.getElementById("mensaje").value;

    socket.emit("nuevo-mensaje", {usuario: usuario, mensaje: mensaje});

    return false;
}


const render = (arrayMensajes) => {
    const html = arrayMensajes.map((mensaje) => {
        return(`
            <div>
                <strong>${mensaje.usuario}</strong>:<em>${mensaje.mensaje}</em> </div>`)}).join(" ");
        
        
        document.getElementById('contenedorMensajes').innerHTML = html;

    
}


socket.on("mensajes", (data) => {
    console.log(data);
    render(data)
})
