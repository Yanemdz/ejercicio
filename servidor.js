// index.js
const express = require('express');
const app = express();
const route1 = require('./ruta1');
const route2 = require('./ruta2');

app.use('/ruta1', route1);
app.use('/ruta2', route2);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
