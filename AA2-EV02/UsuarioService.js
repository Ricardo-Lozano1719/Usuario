class UsuarioService {
  static validarEmail(email) {
    if (!email || !email.includes('@')) {
      return false;
    }
    return true;
  }
}

module.exports = UsuarioService;