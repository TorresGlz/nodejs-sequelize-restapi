import { DataTypes } from 'sequelize';
import { sequelize } from "./../database/database.js"; // Importamos la instancia 'sequelize' de database.js
import {Task} from "./Task.js" //Importamos el archivo de 'Task.js' y instanciamos el modulo de Tarea

export const Project = sequelize.define("projects", { //Exportamos en una variable 'Project' y creamos el esquema de la tabla
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  priority: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING
  },
},{
    timestamps: true //createdat and updateat in columns 
});

//To create a One-To-Many relationship, the hasMany and belongsTo associations are used together;
 
Project.hasMany(Task,{ //Usamos la funcion hasMany porque un 'Project' puede tener muchas 'Tasks'
    foreingKey: 'projectId', //Creamos la relacion desde Project y lo referenciamos a la id de 'Task'
    sourceKey: 'id' //Con que columna lo va a enlazar
});

Task.belongsTo(Project,{ //Se indica con la funcion belongsTo que muchas tareas le pertencen a un Projecto
    foreingKey: 'projectId', //Es la realcion desde Task a Project
    targetId: 'id' //Con que columna lo va enlazar
})