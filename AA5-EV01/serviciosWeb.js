const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Base de datos simulada para el caso de estudio (Servicios Web)
const usuarios = [
  { id: 1, nombre: 'Ricardo Lozano', rol: 'Aprendiz SENA', estado: 'Activo' },
  { id: 2, nombre: 'Instructor SENA', rol: 'Evaluador', estado: 'Activo' }
];

// Endpoint GET: Obtener todos los servicios / usuarios
app.get('/api/servicios/usuarios', (req, res) => {
  res.json({
    mensaje: 'Servicio Web GET: Lista de usuarios recuperada con éxito',
    data: usuarios
  });
});

// Endpoint POST: Crear un nuevo registro vía Servicio Web
app.post('/api/servicios/usuarios', (req, res) => {
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre || 'Nuevo Usuario',
    rol: req.body.rol || 'Cliente',
    estado: 'Activo'
  };
  usuarios.push(nuevoUsuario);
  res.status(201).json({
    mensaje: 'Servicio Web POST: Usuario registrado exitosamente',
    data: nuevoUsuario
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servicio Web corriendo en el puerto ${PORT}`);
});