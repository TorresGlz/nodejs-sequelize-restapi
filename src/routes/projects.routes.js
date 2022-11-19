import { Router } from "express"; //La funcion Router se tiene que instanciar (siguiente linea)
import {
  createProject,
  getProjects,
} from "../controllers/projects.controller.js"; //Importamos las funciones necesarias para la REST api

const router = Router(); //La guardamos en una constante

router.get("/projects", getProjects); //Obtener projectos, se requiere añadir controladores para poder utilizar estos metodos, lo ligamos a su debido controlador
router.post("/projects", createProject); //Crear un projecto, ligado a su controlador
router.put("/projects/:id"); //Actualizar un solo projecto
router.delete("/projects/:id"); //Eliminar un solo projecto
router.get("/projects/:id"); //Obtener un solo projecto

export default router; //exportamos la funcion
