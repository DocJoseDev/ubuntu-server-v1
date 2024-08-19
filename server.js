import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

// Configurar la carpeta de archivos estáticos
app.use(express.static('public'));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile('public');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
