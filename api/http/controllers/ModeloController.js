import { 
    getAllModelo, 
    getByIdModelo as getByIdModeloDB, 
    createModelo as createModeloDB, 
    editModelo as editModeloDB, 
    deleteModelo as deleteModeloDB, 
} from "../../../firebase/domain/modelo.js"

export const getAllModelos = (async (req, res) => {
    const Modelos = await getAllModelo();
    
    res.json(Modelos)
})

export const getByIdModelo = (async (req, res) => {
    const Modelos = await getByIdModeloDB(req.params.idModelo);
    
    res.json(Modelos)
})

export async function createModelo(db) {
    const Modelo = {
        id_marca: "1",
        nome: "Hatch",
    }

    await createModeloDB(Modelo);
}

export async function editModelo(id) {
    const Modelo = {
        id_marca: "1",
        nome: "Sedã",
    }

    await editModeloDB(Modelo, id)
}

export async function deleteModelo(id) {
    await deleteModeloDB(id);
}