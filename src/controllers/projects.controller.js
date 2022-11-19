//Las funciones requieren exportarse ('export') en las rutas para poder utilizar

import {Project} from '../models/Project.js' //Importamos el modelo para ejecutar consultas

//Esta funcion recibira un 'request' y una 'response'
export const getProjects = async (req, res) => { //Recordar que es un metodo asincrono por eso el 'async'
  const projects = await Project.findAll() //'findAll()' Recorre todas las filas y genera un arreglo, de igual manera es asincrono (consulta a BD) por ello el 'await'
  console.log(projects)
  res.send('projects')
};

//Funcion que crea un projecto
export const createProject = async(req, res) => {
  const {name, priority, description} = req.body //Extraemos la informacion de la request del body

  const newProject = await Project.create({ //Como es un metodo asincrono (consulta a la base de datos, aqui se guarda uno), para que funcione await al principio de la funcion debe tener un 'async'
    name,
    priority,
    description
  })

  console.log(newProject);
  res.send("creating project");
};
