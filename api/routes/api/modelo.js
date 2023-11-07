import { 
    createModelo, 
    deleteModelo, 
    editModelo, 
    getAllModelos,
    getByIdModelo,
} from "../../http/controllers/ModeloController.js";
import express from "express";

const router = express.Router()

router.get('/', getAllModelos)
router.post('/', createModelo)
router.delete('/:idModelo', deleteModelo)
router.put('/:idModelo', editModelo)
router.get('/:idModelo', getByIdModelo)

export default router;