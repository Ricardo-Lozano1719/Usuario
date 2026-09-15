const db = require('./db');

class UsuarioDAO {
  static async obtenerTodos() {
    const resultado = await db.query('SELECT * FROM usuarios');
    return resultado.rows;
  }

  static async crearUsuario(nombre, email) {
    const resultado = await db.query(
      'INSERT INTO usuarios (nombre, email) VALUES ($1, $2) RETURNING *',
      [nombre, email]
    );
    return resultado.rows[0];
  }
}

module.exports = UsuarioDAO;