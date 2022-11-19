import { Router } from "express"; //La funcion Router se tiene que instanciar (siguiente linea)
const router = Router(); //La guardamos en una constante

router.get("./projects"); //Obtener projectos
router.post("./projects"); //Crear un projecto
router.put("./projects/:id"); //Actualizar un solo projecto
router.delete("./projects/:id"); //Eliminar un solo projecto
router.get("./projects/:id"); //Obtener un solo projecto

export default router; //exportamos la funcion
