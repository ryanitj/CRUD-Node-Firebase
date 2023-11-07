import { collectionHelper, docHelper } from "../utils.js";
import { getDocs, updateDoc, deleteDoc, getDoc, addDoc } from 'firebase/firestore';

const colName = "Modelo";

export async function getAllModelo() {
    const ModeloCol = collectionHelper(colName);
    const ModeloSnapshot = await getDocs(ModeloCol);
    const ModeloList = ModeloSnapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
    return ModeloList;
  }
  
export async function getByIdModelo(id) {
  const docRef = docHelper(colName, id);
  const docSnap = await getDoc(docRef);
  const Modelo = {id:docSnap.id , ...docSnap.data()}; 
  return Modelo;
}

export async function createModelo({
  id_marca,
  nome,
}) {
    const ModeloRef = collectionHelper(colName);

    await addDoc(ModeloRef, {
        id_marca: id_marca,
        nome: nome,
    });
}

export async function editModelo(
  {
    id_marca,
    nome,
  },
  id
) {
    const docRef = docHelper(colName, id);

    const dataUpdated = {
      id_marca,
      nome,
    }

    await updateDoc(docRef, dataUpdated);
}

  export async function deleteModelo(id) {
    const ModeloCol = docHelper(colName, id);
    await deleteDoc(ModeloCol);
  }