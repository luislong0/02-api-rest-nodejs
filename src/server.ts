import { app } from './app'
import { env } from './env'

// GET, POST, PUT, DELETE
// http://localhost:3333/hello

// Tipos de testes
// Unitários: uma unidade da aplicação
// integração: comunicação entre duas ou mais unidades
// e2e - ponta a ponta: simulam um usuário operando na nossa aplicação

// exemplos de testes e2e
// front-end: abre a página de login, digite o texto exemplo@gmail.com no campo com ID email, clique no botão
// back-end: chamadas HTTP, websockets, testar tudo

/* Pirâmide de testes: 
  E2E (não dependem de nenhuma tecnologia, não dependem de arquitetura) 
  Testes de integração
  Testes unitários 
*/

// Para todas as rotas da aplicação (hook global)
/* 
  app.addHook('preHandler', async (request, reply) => {
    console.log(`[${request.method}] ${request.url}`)
  })
*/

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server running on port 3333')
  })
