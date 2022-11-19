//Este archivo tendra las configuraciones de la aplicacion sequelize
//para importarlo al index.js
import express from "express";
import projectsRoutes from "./routes/projects.routes.js"; //importamos lo que contiene el archivo 'projects.routes.js'

const app = express();

app.use(projectsRoutes);
export default app;
