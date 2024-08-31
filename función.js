module.exports = (req, res, next) => {
    const now = new Date();
    console.log(`Fecha y hora: ${now.toLocaleString()}`);
    console.log('se ingreso a la ruta correctamente');
    next();
};
