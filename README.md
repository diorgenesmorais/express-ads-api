# express-ads-api

> Tarefa do curso de Node proposta pelo professor Júlio Vieira

### Notas

A proposta inicial era utilizar o Node em sua configuração padrão (CommonJS), decidir a título de pesquisa utilizar a configuração de module, definindo isso no package.json

```json
"type": "module"
```

Pesquisando também descobrir um pacote chamado "esm", se optar utilizar instalando esse pacote (npm i esm), quando for executar o projeto faz-se necessário incrementar o comando:

```bash
node -r esm src
```
(*src* é o diretório onde está o index.js)


Ou use o esm para carregar o módulo ES principal (main.js) e exportá-lo como CommonJS.

```
require = require("esm")(module)
module.exports = require("./main.js")
```

[*esm*](https://www.npmjs.com/package/esm) O carregador de módulo ECMAScript incrivelmente simples, sem babel e sem pacote.



#### Este projeto utiliza alguns middlewares

[*helmet*](https://github.com/helmetjs/helmet/blob/main/README.md#how-it-works) é um middleware no estilo Connect, compatível com frameworks como o Express. A função de capacete de nível superior envolve cerca de 15 middlewares menores, 11 dos quais são habilitados por padrão.

```
// This...
app.use(helmet());

// ...is equivalent to this:
app.use(helmet.contentSecurityPolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
```

[*body-parser*](https://github.com/expressjs/body-parser/blob/master/README.md#bodyparserjsonoptions) (bodyParser.json()) Retorna o middleware que apenas analisa json e apenas olha as solicitações em que o cabeçalho Content-Type corresponde à opção type. Um novo objeto de corpo contendo os dados analisados é preenchido no objeto de solicitação após o middleware (ou seja, req.body).

[*cors*](https://github.com/expressjs/cors/blob/master/README.md#cors) é um pacote node.js para fornecer um middleware Connect / Express que pode ser usado para habilitar CORS com várias opções.

[*morgan*](https://github.com/expressjs/morgan/blob/master/README.md#morgan) Middleware de logger de request de HTTP para node.js


