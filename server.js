import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT;

// Configurar la carpeta de archivos estáticos
app.use(express.static('public'));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile('public');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://${process.env.HOST}:${PORT}`);
});
