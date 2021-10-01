# Teste Automatizado com Cypress 


## Preparando o Ambiente ⚙️

 1. Instalar o [Node.js](https://nodejs.org/en/) 
 2. Instalar o [VS Code](https://code.visualstudio.com/) 
 3. Instalar o [Cypress](https://www.cypress.io/)

## Configurando o Cypress
Na pasta principal do  projeto, abra o terminal e execute os seguintes comandos:
``` bash
npm init -y
npm install cypress --save-dev
``` 
Para executar o Cypress e criar todas as pastas necessárias execute o comando:
```bash 
"./node_modules/.bin/cypress open"
```


## Estrutura do Projeto 🛠️

### Pastas Utilizadas 

1. **Integration:** Nesta pasta ficam localizados os arquivos feitos em Cypress com extensão .js
2. **Support:** Aqui colocaremos os scripts de locators. Que possibilita uma leitura mais amigável do código 


## URL utilizada 💻

Foram utilizados neste projeto as urls do Facebook.
- Cadastro: https://pt-br.facebook.com/r.php?locale=pt_BR
- Login: https://pt-br.facebook.com/login.php

## Teste 

1. Criar um arquivo com extensão .js na pasta Integration 
2. Mapear todos os elementos que precisaremos para nosso texto, como campos de preenchimento, botões, caixas de seleção, etc. 
3. Criar um arquivo com extensão .js na pasta Support com os locators
4. Executar o Cypress 
