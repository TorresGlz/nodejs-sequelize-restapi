//Sera necesario agregar una linea en el package.json, "type" = "module",
//con ello realizaremos las importaciones de los modulos, en las que nosotros realizemos si sera
//necesario añadir la extension del archivo.
import app from "./app.js";
import { sequelize } from "./database/database.js"; //Aqui se importa la instancia no el modulo


async function main() {
    try{
        /*await sequelize.authenticate(); //Intento de conexion y arranque de la bd
        console.log("Connection has been established succesfully.");*/
        await sequelize.sync({force: false})//Hace una sincronizacion con la base de datos, crea, elimina tablas,etc.('force:true'elimina la tabla y la vuelve a crear)
        app.listen(4000);
        console.log("Escuchando en puerto", 4000);
    }catch(error){
        console.error('Unable to connecto to the database:',error);
    }
}
main(); //IMPORTANTE ejecutar la funcion :P

