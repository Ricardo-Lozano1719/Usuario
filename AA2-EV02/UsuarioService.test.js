const UsuarioService = require('./UsuarioService');

test('Validar correo electrónico correcto', () => {
  expect(UsuarioService.validarEmail('correo@dominio.com')).toBe(true);
});

test('Rechazar correo sin arroba', () => {
  expect(UsuarioService.validarEmail('correodominio.com')).toBe(false);
});