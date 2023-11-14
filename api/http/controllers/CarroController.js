import { 
    getAllCarro, 
    getByIdCarro as getByIdCarroDB, 
    createCarro as createCarroDB, 
    editCarro as editCarroDB, 
    deleteCarro as deleteCarroDB, 
} from "../../../firebase/domain/carro.js"

export const getAllCarros = (async (req, res) => {
    const carros = await getAllCarro();
    
    res.json(carros)
})

export const getByIdCarro = (async (req, res) => {
    const carros = await getByIdCarroDB(req.params.idCarro);
    
    res.json(carros)
})

export async function createCarro(db) {
    const carro = {
        id_modelo: "1",
        nome: "Fiat Uno",
        renavam: "00891353364",
        placa: "ABC1B34",
        valor: 24.900,
        ano: 2012,
    }

    await createCarroDB(carro);
}

export async function editCarro(id) {
    const carro = {
        id_modelo: "1",
        nome: "Uno",
        renavam: "00891353364",
        placa: "ABC1B34",
        valor: 27.900,
        ano: 2012,
    }


    await editCarroDB(carro, id)
}

export async function deleteCarro(id) {
    await deleteCarroDB(id);
}