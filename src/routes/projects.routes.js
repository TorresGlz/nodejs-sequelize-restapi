import { Router } from "express"; //La funcion Router se tiene que instanciar (siguiente linea)
import {
  createProject,
  deleteProject,
  getProject,
  getProjects,
  getProjectTasks,
  updateProject,
} from "../controllers/projects.controller.js"; //Importamos las funciones necesarias para la REST api

const router = Router(); //La guardamos en una constante

router.get("/projects", getProjects); //Obtener projectos, se requiere añadir controladores para poder utilizar estos metodos, lo ligamos a su debido controlador
router.post("/projects", createProject); //Crear un projecto, ligado a su controlador
router.put("/projects/:id", updateProject); //Actualizar un solo projecto
router.delete("/projects/:id", deleteProject); //Eliminar un solo projecto
router.get("/projects/:id", getProject); //Obtener un solo projecto

router.get("/projects/:id/tasks", getProjectTasks); //obtener todos las tareas de un proyecto


export default router; //exportamos la funcion
