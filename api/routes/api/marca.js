import { 
    createMarca, 
    deleteMarca, 
    editMarca, 
    getAllMarcas,
    getByIdMarca,
} from "../../http/controllers/MarcaController.js";
import express from "express";

const router = express.Router()

router.get('/', getAllMarcas)
router.post('/', createMarca)
router.delete('/:idMarca', deleteMarca)
router.put('/:idMarca', editMarca)
router.get('/:idMarca', getByIdMarca)

export default router;