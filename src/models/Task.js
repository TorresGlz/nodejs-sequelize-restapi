import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const Task = sequelize.define('task',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING
    },
    done:{
        type:DataTypes.BOOLEAN,
        defaultValue:false //Le añadimos un valor por defecto 'false' para que no sea nulo
    }
},{
    timestamps:true
});