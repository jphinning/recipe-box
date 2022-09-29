# Recipe-box

A recipe sharing app made with React, Relay, Koa and Graphql-Helix

### Requirements

Before starting, make sure you have at least those components on your workstation:

- An up-to-date release of NodeJS
- Docker-compose or a MongoDB database installed locally.

### Install instructions

Clone the project and install its dependencies:

```bash
> git clone https://github.com/jphinning/recipe-box.git
> cd recipe-box
> yarn
```

### Env configuration

Create a .env file for the server based on the example provided in the repository.

```bash
> cp .env.example .env
> nano .env
```

### Launch

You are now ready to launch the application using the instructions below.

```bash
> docker-compose up -d
> yarn dev:all
```

### Want to contribute?

This project is open to contributions, if you want to help with the development, please open an issue or pull request.
