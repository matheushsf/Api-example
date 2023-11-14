# Api-ingacode
Teste ingacode


Utilize o npm ou yarn para instalar as dependencias

npm i ou yarn install

----------------------------------------

Após instalar as dependencias, certifique-se que o Sql server esteja rodando na maquina e as portas disponiveis. ( por padrao a que ele utilizara será a 1433 )

No projeto estou utilizando um orm ( prisma ), para gerar as tabelas com as configuracoes necessárias, basta utilizar o comando abaixo para rodar as migrations ->

"npx prisma migrate dev"

Após isso, só consumir a api, e realizar os testes.

----------------------------------------

Testes

- É necessário criar apenas os colaboradores direto no banco de dados
- As rotas são protegidas com JWT, entao é necessario cadastrar um usuario e realizar login para poder consumir as demais rotas.


