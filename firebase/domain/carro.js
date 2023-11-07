import { collectionHelper, docHelper } from "../utils.js";
import { getDocs, updateDoc, deleteDoc, getDoc, addDoc } from 'firebase/firestore';

const colName = "Carro";

export async function getAllCarro() {
    const CarroCol = collectionHelper(colName);
    const carroSnapshot = await getDocs(CarroCol);
    const carroList = carroSnapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
    return carroList;
  }
  
export async function getByIdCarro(id) {
  const docRef = docHelper(colName, id);
  const docSnap = await getDoc(docRef);
  const carro = {id:docSnap.id , ...docSnap.data()}; 
  return carro;
}

export async function createCarro({
  id_modelo,
  nome,
  renavam,
  placa,
  valor,
  ano,
}) {
    const carroRef = collectionHelper(colName);

    await addDoc(carroRef, {
        id_modelo: id_modelo,
        nome: nome,
        renavam: renavam,
        placa: placa,
        valor: valor,
        ano: ano,
    });
}

export async function editCarro(
  {
    id_modelo,
    nome,
    renavam,
    placa,
    valor,
    ano,
  },
  id
) {
    const docRef = docHelper(colName, id);

    const dataUpdated = {
      id_modelo,
      nome,
      renavam,
      placa,
      valor,
      ano,
    }

    await updateDoc(docRef, dataUpdated);
}

  export async function deleteCarro(id) {
    const CarroCol = docHelper(colName, id);
    await deleteDoc(CarroCol);
  }