<div align="center"><h1>
Automação de testes para o site Adopet 
</div align="center">


 - Os testes validam o fluxo de cadastro, login e navegação, garantindo a exibição de mensagens de
 erro para dados incorretos.<br>
- Comandos Customizados.<br>
- Integração Contínua (CI)<br>
Usando GitHub Actions, o pipeline de CI executa automaticamente os testes em cada push, ajudando a garantir a qualidade contínua do projeto e facilitando a detecção de falhas.<br><br>


<div align="center"><h1>
Cenário de testes🧑🏻‍🔬
</div align="center">

<div align="center"><h2>
1. Cadastro de Usuário com Dados Válidos
</div align="center">
<b>Objetivo:</b> Verificar se o sistema permite o cadastro de um novo usuário com dados válidos.<br>
Pré-condição: O usuário está na página inicial do site Adopet.<br>
Passos:
Clique no botão "Cadastrar".<br>
Preencha os campos obrigatórios com dados válidos: Nome, E-mail, Senha, e Confirmação de Senha.<br>
Clique no botão "Cadastrar".<br>
Resultado Esperado:<br> O usuário é cadastrado com sucesso e redirecionado para a página inicial ou uma mensagem de confirmação é exibida.
<div align="center"><h2>
2. Login com Dados Válidos
</div align="center">
<b>Objetivo:</b> Garantir que o usuário consegue fazer login no sistema usando credenciais válidas.<br>
Pré-condição: O usuário possui uma conta válida e está na página de login.<br>
Passos:
Acesse a página de login.<br>
Insira e-mail e senha válidos.<br>
Clique no botão "Entrar".<br>
Resultado Esperado: O usuário é autenticado com sucesso e redirecionado para a página principal.
<div align="center"><h2>
3. Validação de Campos Obrigatórios no Formulário de Cadastro
</div align="center">
<b>Objetivo:</b> Confirmar que o sistema apresenta mensagens de erro para campos obrigatórios não preenchidos no formulário de cadastro.<br>
Pré-condição: O usuário está na página de cadastro.<br>
Passos:
Clique no botão "Cadastrar" sem preencher nenhum campo.<br>
Resultado Esperado: Mensagens de erro são exibidas para todos os campos obrigatórios, indicando que os campos de Nome, E-mail, Senha e Confirmação de Senha devem ser preenchidos.
<div align="center"><h2>
4. Validação de E-mail em Formato Inválido no Cadastro
</div align="center">
<b>Objetivo:</b> Verificar que o sistema valida o formato do e-mail no formulário de cadastro.<br>
Pré-condição: O usuário está na página de cadastro.<br>
Passos:
Preencha o campo de e-mail com um valor inválido, como "email.gmail.com".<br>
Preencha os outros campos de forma válida.<br>
Clique no botão "Cadastrar".<br>
Resultado Esperado: Uma mensagem de erro é exibida, indicando que o e-mail deve ter um formato válido.
<div align="center"><h2>
5. Visualização dos Pets Disponíveis para Adoção
</div align="center">
<b>Objetivo:</b> Garantir que o usuário pode visualizar a lista de pets disponíveis para adoção.<br>
Pré-condição: O usuário está na página inicial.<br>
Passos:
Clique no botão para visualizar os pets.<br>
Resultado Esperado: A lista de pets disponíveis é exibida corretamente.
<div align="center"><h2>
6. Validação dos Botões de Navegação no Header
</div align="center">
<b>Objetivo:</b> Verificar se os botões no header (Home e Mensagens) funcionam corretamente.<br>
Pré-condição: O usuário está na página inicial.<br>
Passos:
Clique no botão "Home" no header.<br>
Clique no botão "Mensagens" no header.<br>
Resultado Esperado: O sistema redireciona o usuário para as respectivas páginas sem erros.
<div align="center"><h2>
7. Redirecionamento para a Página de Login
</div align="center">
<b>Objetivo:</b> Confirmar que o link "Fazer login" redireciona o usuário para a página de login.<br>
Pré-condição: O usuário está na página inicial do site Adopet.<br>
Passos:
Clique no link "Fazer login".<br>
Resultado Esperado: O usuário é redirecionado para a página de login.
<div align="center"><h2>
8. Redirecionamento para a Página Home
</div align="center">
<b>Objetivo:</b> Confirmar que o usuário pode acessar a página "Home" diretamente.<br>
Pré-condição: O usuário está na página inicial.<br>
Passos:
Visite a URL /home.<br>
Resultado Esperado: O conteúdo da página "Home", incluindo a mensagem "Veja os amigos disponíveis para adoção!", é exibido.
<div align="center"><h2>
9. Interação com o Botão "Falar com o Responsável"
</div align="center">
<b>Objetivo:</b> Verificar se o botão "Falar com o responsável" funciona e leva o usuário para o contato com o responsável pelo pet.<br>
Pré-condição: O usuário está na página de pets disponíveis.<br>
Passos:
Clique no botão para visualizar os pets.<br>
Clique no botão "Falar com o responsável" no terceiro pet da lista.<br>
Resultado Esperado: O sistema exibe informações de contato ou inicia a comunicação com o responsável pelo pet selecionado.