
# Desafio Prime Control - Testes Automatizados com Cypress

Este projeto foi desenvolvido para cobrir todos os cenários de teste solicitados no desafio, utilizando o Cypress para automação dos testes tanto WEB quanto de API.

---

## Estrutura do Projeto

A estrutura do projeto foi organizada para facilitar a manutenção e a reutilização de código:

cypress/
├── e2e/               # Arquivos de teste
│   ├── web/           # Testes da interface web
│   │   ├── cadastro_cliente.cy.js
│   │   ├── criar_conta.cy.js
│   │   ├── login.cy.js
│   │   ├── logout.cy.js
│   │   ├── pesquisa_cliente.cy.js
│   │   ├── recuperar_senha.cy.js
│   │   ├── validar_informacoes.cy.js
│   ├── api/           # Testes de API
│       ├── addClient.cy.js
│       ├── deleteClient.cy.js
│       ├── listClients.cy.js
│       ├── updateClient.cy.js
├── fixtures/          # Dados reutilizáveis
│   ├── client.json
│   ├── userData.json
│   ├── test_image.jpg
├── page_objects/      # Page Objects para organizar interações
│   ├── CadastroClientePage.js
│   ├── CriarContaPage.js
│   ├── LoginPage.js
│   ├── LogoutPage.js
│   ├── RecuperarSenhaPage.js
│   ├── ValidarInformacoesPage.js
├── support/           # Configurações e comandos adicionais
│   ├── commands.js    # Comandos customizados
│   ├── e2e.js         # Inicialização do Cypress
cypress.config.js       # Configuração do Cypress


---

## Repositório

O código fonte deste projeto está disponível no seguinte repositório no GitHub:
- **[Desafio Prime Control - Repositório](https://github.com/tarik-dimitri/desafio-Prime_Control.git)**

---

## Pré-requisitos

Certifique-se de ter instalado no seu ambiente:

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)
- Cypress (instalado via npm)

---

## Instalação

Siga os passos abaixo para configurar o projeto:

1. Clone este repositório:

   git clone https://github.com/tarik-dimitri/desafio-Prime_Control.git


2. Acesse o diretório do projeto:

   cd desafio-Prime_Control


3. Instale as dependências do projeto:

   npm install


---

## Configuração do Ambiente

1. Verifique as URLs base configuradas no arquivo `cypress.config.js`:
   
   env: {
       baseUrls: {
         web: "https://challenge.primecontrol.com.br",
         api: "https://api-challenge.primecontrol.com.br"
       }
   }
 

2. Certifique-se de que os dados de login estejam corretos no arquivo `fixtures/userData.json`:

   {
     "email": "teste@usuario.com",
     "senha": "senha123"
   }


---

## Executando os Testes

### Interface Gráfica do Cypress

- Para abrir a interface gráfica, execute o seguinte comando:

   npx cypress open

- Na interface, selecione o teste que deseja executar.

### Execução via Terminal

- Para executar todos os testes:

   npx cypress run


- Para executar um teste específico:

   npx cypress run --spec "cypress/e2e/web/login.cy.js"


---

## Cenários de Teste

O projeto cobre os seguintes cenários:

### Testes Web
1. Cadastro de cliente com sucesso
2. Validação de email inválido no cadastro
3. Validação de campos obrigatórios
4. Criar nova conta com sucesso
5. Falhar ao tentar criar conta com e-mail já cadastrado
6. Login com sucesso
7. Validação de erro em login com senha incorreta
8. Logout com sucesso
9. Pesquisa de cliente existente
10. Recuperação de senha
11. Validar informações e enviar
12. Editar dados de cliente já cadastrado (Este teste foi retirado do escopo por uma inconsistencia na aplicação encontrada durante os teste)

### Testes API
Endpoint /listClients
1. Teste de resposta bem-sucedida
2. Teste de validação dos campos
3. Teste de validação de endpoint
Endpoint /addClient
1. Teste de adição bem-sucedida
2. Teste de campos obrigatórios
3. Teste de validação de e-mail e URL do perfil
Endpoint /deleteClient/{id}
1. Teste de exclusão bem-sucedida
2. Teste de cliente não encontrado
3. Teste de exclusão sem ID
Endpoint /updateClient/{id}
1. Teste de atualização bem-sucedida
2. Teste de cliente não encontrado
3. Teste de atualização sem campos


---

## Boas Práticas Adotadas

1. **Page Objects**:
   - As interações com elementos da interface estão centralizadas nos arquivos da pasta `page_objects`.

2. **Comandos Customizados**:
   - Operações comuns, como login, foram encapsuladas em `support/commands.js`.

3. **Dados Reutilizáveis**:
   - Dados de teste estão organizados na pasta `fixtures`.

4. **Estrutura Modular**:
   - Separação clara entre testes de interface web e testes de API.

---

## Contribuições

Contribuições são bem-vindas! Para contribuir:
1. Faça um fork do projeto.
2. Crie uma branch para sua funcionalidade ou correção:

   git checkout -b minha-funcionalidade

3. Envie seu pull request.

---

## Contato

- **Desenvolvedor**: Tarik Dimitri
- **Email**: tarik.feitosa@gmail.com
