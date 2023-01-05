//Archivo de configuracion de Base de datos postgres
import Sequelize from "sequelize";

export const sequelize = new Sequelize("projectsdb", "postgres", "aldair681.", {
    host: "localhost",
    dialect: "postgres",
});
