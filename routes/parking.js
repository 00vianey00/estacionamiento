const { Router } = require("express");
const {addChar,getChars, getCharByMatricula, deleteCharByMatricula, updateCharByChar } = require("../controllers/parking");
const router = Router();


//http://localhost:4000/api/v1/parking

/// GET CONSULTAS///
router.get("/getChars", getChars);
router.get("/getChars/Matricula/:Matricula", getCharByMatricula)
/// DELETE ELIMINAR REGISTRO///
router.delete("/deleteChars/Matricula/:Matricula", deleteCharByMatricula)
/// PATCH ACTUALIZAR REGISTRO///
router.put("/updateChars", updateCharByChar)
/// POST CREAR O AÑADIR ///
router.post("/addChar", addChar);
module.exports = router;
