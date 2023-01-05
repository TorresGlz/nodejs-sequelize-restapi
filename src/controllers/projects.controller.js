//Las funciones requieren exportarse ('export') en las rutas para poder utilizar

import { Project } from "../models/Project.js"; //Importamos el modelo para ejecutar consultas
import {Task} from "../models/Task.js"; //Importamos el modelo de tareas para encontrar aquellas que pertenecen a un proyecto

//todas las funciones recibiran un 'request' y una 'response'

//funcion que obtiene todos los projectos
export const getProjects = async (req, res) => {
  try {
    //throw new Error('query failed') <- se lanzo un error para probar
    //Usamos un try-catch como buenas practicas por si sucede un error
    //Recordar que es un metodo asincrono por eso el 'async'
    const projects = await Project.findAll(); //'findAll()' Recorre todas las filas y genera un arreglo, de igual manera es asincrono (consulta a BD) por ello el 'await'
    res.json(projects); //Esto se envia al cliente en formato json
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//funcion que obtiene un projecto
export const getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findOne({
      where: {
        id,
      },
    });
    if (!project)
      return res.status(404).json({ message: "Proyecto no existente" }); //Con una condicion revisamos si el proyecto existe
    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Funcion que crea un projecto
export const createProject = async (req, res) => {
  const { name, priority, description } = req.body; //Extraemos la informacion de la request del body

  try {
    //Usamos un try-catch como buenas practicas por si sucede un error
    const newProject = await Project.create({
      //Como es un metodo asincrono (consulta a la base de datos, aqui se guarda uno), para que funcione await al principio de la funcion debe tener un 'async'
      name,
      priority,
      description,
    });

    res.json(newProject); //Esto se envia al cliente en formato json
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//funcion que actualiza un projecto
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, priority, description } = req.body;

    const project = await Project.findByPk(id); //findByPk obtiene los valores a traves del id, los almacenamos despues.
    project.name = name;
    project.priority = priority;
    project.description = description;
    //Ya obtenidos los datos guardamos en el modelo
    await project.save();

    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//funcion que elimina un projecto
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.destroy({
      //destroy me permite buscar y eliminar el dato
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//funcion para obtener todas las tareas que pertencen a cierto proyecto
export const getProjectTasks = async (req, res) => {
  const { id } = req.params;
  const tasks = await Task.findAll({
    where: { projectId: id },
  });
  res.json(tasks);
};
