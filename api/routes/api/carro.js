import { 
    createCarro, 
    deleteCarro, 
    editCarro, 
    getAllCarros,
    getByIdCarro,
} from "../../http/controllers/CarroController.js";
import express from "express";

const router = express.Router()

router.get('/', getAllCarros)
router.post('/', createCarro)
router.delete('/:idCarro', deleteCarro)
router.put('/:idCarro', editCarro)
router.get('/:idCarro', getByIdCarro)

export default router;