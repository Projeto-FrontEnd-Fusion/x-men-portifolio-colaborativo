module.exports = {
  preset: 'ts-jest',  // Configuração do ts-jest
  testEnvironment: 'jsdom',  // Ambiente de teste para aplicações web
  transform: {
    '^.+\\.tsx?$': 'ts-jest',  // Usa ts-jest para transformar arquivos TS/TSX
  },
};
