import { 
    getAllMarca, 
    getByIdMarca as getByIdMarcaDB, 
    createMarca as createMarcaDB, 
    editMarca as editMarcaDB, 
    deleteMarca as deleteMarcaDB, 
} from "../../../firebase/domain/marca.js"

export const getAllMarcas = (async (req, res) => {
    const Marcas = await getAllMarca();
    
    res.json(Marcas)
})

export const getByIdMarca = (async (req, res) => {


    const Marcas = await getByIdMarcaDB(req.params.idMarca);
    console.log(Marcas)
    
    res.json(Marcas)
})

export async function createMarca(db) {
    const Marca = {
        nome: "Fiat",
    }

    await createMarcaDB(Marca);
}

export async function editMarca(id) {
    const Marca = {
        nome: "Fiat",
    }

    await editMarcaDB(Marca, id)
}

export async function deleteMarca(id) {
    await deleteMarcaDB(id);
}