# Backend Catccino ☕🐈

Backend de uma cafeteria temática inspirada em gatos.

O projeto surgiu com a ideia de criar um sistema simples, organizado e escalável para uma coffee shop fictícia chamada **Catccino**, unindo um ambiente aconchegante com uma arquitetura moderna baseada em microsserviços.

---

## 🌎 Scripts para execução | Run scripts

Antes de executar os containers, leia atentamente a documentação dos scripts disponíveis.  
Alguns scripts podem remover containers, imagens e volumes Docker existentes.

Before running the containers, carefully read the available scripts documentation.  
Some scripts may remove existing Docker containers, images, and volumes.

📚 Scripts documentation:

[Scripts Documentation](https://github.com/thuhsf/catccino-web-project/tree/main/scripts/docker)

---

### 🚀 Inicialização limpa | Clean startup

Recria os serviços do zero.

Recreates the services from scratch.

```sh
chmod +x ./scripts/docker/start-clean.sh
```

```sh
./scripts/docker/start-clean.sh
```

> ⚠️ Pode remover containers, imagens e volumes antigos.  
> ⚠️ May remove old containers, images, and volumes.

---

### 🐳 Inicialização padrão | Standard startup

Executa o ambiente utilizando apenas Docker Compose.

Runs the environment using plain Docker Compose.

```sh
docker compose up --build -d
```

---

### 🛑 Parar containers | Stop containers

```sh
docker compose down
```

---

### 🧹 Remover containers + volumes | Remove containers + volumes

```sh
docker compose down -v
```

> ⚠️ Remove também os dados persistidos nos volumes Docker.  
> ⚠️ Also removes persisted Docker volume data.

---

## 🌎 Languages

- [Português](#pt-br)
- [English](#en)

---

# <a id="pt-br"></a>🇧🇷 Português

## Sobre o projeto

O **Catccino** é uma cafeteria temática inspirada no universo felino.  
A ideia do sistema é centralizar as operações principais da cafeteria, começando pelo fluxo básico de atendimento:

- visualizar o cardápio;
- criar pedidos;
- enviar pedidos para cozinha;
- processar pagamentos;
- atualizar o status dos pedidos.

O projeto está sendo desenvolvido com foco em aprendizado de arquitetura backend, microsserviços e organização de aplicações escaláveis.

---

## Estrutura inicial

A primeira versão do sistema será dividida em alguns serviços principais:

- Menu Service
- Order Service
- Kitchen Service
- Payment Service
- Notification Service

Com o crescimento do projeto, novos módulos poderão ser adicionados.

---

## Próximas fases

### Fase 1 (MVP)

- [x] Menu Service
- [x] Order Service
- [x] Kitchen Service
- [x] Payment Service
- [x] Notification Service

### Fase 2

- [ ] Inventory Service
- [ ] Customer Service
- [ ] Staff Service

### Fase 3

- [ ] Loyalty Service
- [ ] Promotion Service
- [ ] Reporting Service
- [ ] Delivery Service

### Fase 4

- [ ] Auth Service
- [x] API Gateway
- [ ] Observability
- [ ] Event Bus

---

## Tecnologias utilizadas

### Atualmente

- Node.js
- TypeScript
- PostgreSQL
- Docker
- Docker Compose
- Nginx

### Futuramente

- Redis
- RabbitMQ
- Kafka
- AWS EC2
- Amazon S3

---

## Segurança e observabilidade

Algumas ideias planejadas para o projeto:

- autenticação com JWT;
- validação de dados;
- logs centralizados;
- monitoramento dos serviços;
- rate limiting;
- rastreamento de requisições.

---

## Diagramas

### Arquitetura de serviços

![Services Diagram](./assets/images/services-diagram.png)

### Modelos iniciais

![Initial Models](./assets/images/start-model.png)

### Relação entre modelos

![Models Relations](./assets/images/models-relations.png)

---

## APIs

Exemplo inicial da documentação Swagger:

![Swagger API](./assets/images/swagger-api.png)

---

## Objetivo do projeto

Além da proposta da cafeteria fictícia, o projeto também serve como estudo de:

- arquitetura backend;
- microsserviços;
- mensageria;
- organização de código;
- APIs REST;
- Docker;
- comunicação entre serviços.

---

## Desenvolvido por

Thuanny Helen

---

# <a id="en"></a>🇺🇸 English

## About the project

**Catccino** is a cat-themed coffee shop backend project.

The main idea is to build a simple and scalable system capable of handling the core operations of a coffee shop, including:

- menu visualization;
- order creation;
- kitchen communication;
- payment processing;
- order status updates.

The project is also focused on learning backend architecture, microservices and scalable application design.

---

## Initial structure

The first version of the system will be divided into a few main services:

- Menu Service
- Order Service
- Kitchen Service
- Payment Service
- Notification Service

More modules may be added as the project grows.

---

## Next phases

### Phase 1 (MVP)

- [x] Menu Service
- [x] Order Service
- [x] Kitchen Service
- [x] Payment Service
- [x] Notification Service

### Phase 2

- [ ] Inventory Service
- [ ] Customer Service
- [ ] Staff Service

### Phase 3

- [ ] Loyalty Service
- [ ] Promotion Service
- [ ] Reporting Service
- [ ] Delivery Service

### Phase 4

- [ ] Auth Service
- [ ] API Gateway
- [ ] Observability
- [ ] Event Bus

---

## Technologies

### Current stack

- Node.js
- TypeScript
- PostgreSQL
- Docker
- Docker Compose
- Nginx

### Future plans

- Redis
- RabbitMQ
- Kafka
- AWS EC2
- Amazon S3

---

## Security and observability

Some planned ideas for the project:

- JWT authentication;
- data validation;
- centralized logs;
- service monitoring;
- rate limiting;
- request tracing.

---

## Diagrams

### Services architecture

![Services Diagram](./assets/images/services-diagram.png)

### Initial models

![Initial Models](./assets/images/start-model.png)

### Models relationship

![Models Relations](./assets/images/models-relations.png)

---

## APIs

Initial Swagger documentation example:

![Swagger API](./assets/images/swagger-api.png)

---

## Project goals

Besides the fictional coffee shop proposal, the project is also meant for studying:

- backend architecture;
- microservices;
- messaging systems;
- code organization;
- REST APIs;
- Docker;
- service communication.

---

## Developed by

Thuanny Helen
