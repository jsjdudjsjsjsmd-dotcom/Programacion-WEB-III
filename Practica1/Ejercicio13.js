function realizarPedido(producto) {
  autenticarUsuario()
    .then((usuario) => {
      return verificarStock(producto);
    })
    .then((enStock) => {
      return procesarPago();
    })
    .then((confirmacion) => {
      console.log("Pedido completado:", confirmacion);
    })
    .catch((error) => {
      console.error("Error en el pedido:", error);
    });
}