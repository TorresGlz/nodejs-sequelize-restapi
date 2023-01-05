//Este archivo tendra las configuraciones de la aplicacion sequelize
//para importarlo al index.js
import express from "express";
import projectsRoutes from "./routes/projects.routes.js"; //importamos lo que contiene el archivo 'projects.routes.js'
import tasksRoutes from "./routes/tasks.routes.js"; //importamos lo que contiene el archivo 'tasks.routes.js'

const app = express();

//Dentro de express para recibir algo primero necesitamos middlewares
app.use(express.json()); //Esto permitira  que cada vez que se envie un dato en formato json el servidor lo interpretara y lo guardara en un req.body
app.use(projectsRoutes);
app.use(tasksRoutes);
export default app;
