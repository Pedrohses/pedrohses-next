import type { Project } from "./types"

export const manualProjects: Project[] = [
  {
    id: "daily-diet-api",
    name: "Daily Diet API",
    description:
      "API para gerenciamento de dietas diarias com autenticacao JWT e logs estruturados.",
    stack: ["Node.js", "Fastify", "SQLite", "Knex"],
    repoUrl: "https://github.com/Pedrohses/Daily-Diet-API",
    source: "manual",
  },
  {
    id: "todo-list-api",
    name: "Todo List API",
    description:
      "API para gerenciamento de tarefas com autenticacao JWT e logs estruturados.",
    stack: ["Node.js", "SQLite", "Knex"],
    repoUrl: "https://github.com/Pedrohses/Todo-List-API",
    source: "manual",
  },
  {
    id: "mudae-remember-bot",
    name: "Bot de Lembretes para Mudae",
    description: "Bot para lembretes de jogar jogo do Mudae.",
    stack: ["JavaScript", "Node.js", "Discord.js"],
    repoUrl: "https://github.com/Pedrohses/BOT-MUDAE-REMINDER",
    source: "manual",
  },
]
