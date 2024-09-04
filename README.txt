Este projeto foi desenvolvido utilizando as seguintes tecnologias:
•	Node.js
•	Express
•	TypeScript
•	Next.js
•	ORM Prisma

Para que funcione a aplicação é necessário:
1.	Instalar as dependências nas pastas ‘backend’ e ‘frontend’: 'npm install'
2.	Instalar o banco de dados Mysql;
3.	Criar o banco de dados 'projeto';
4.	No arquivo '.env', deve mudar a variável de ambiente responsável pelo login no banco de dados: DATABASE_URL
5.	Criar as tabelas através das migrations presentes no backend, com o comando;
		> npx prisma migrate dev --name init
		> Mais informações dobre migrates prisma na documentação: https://www.prisma.io/docs/orm/prisma-migrate/getting-started


As duas aplicações ‘backend’ e ‘frontend’ devem estar rodando simultaneamente através do comando:
•	npm run dev
