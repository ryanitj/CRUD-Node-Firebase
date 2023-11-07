import { collectionHelper, docHelper } from "../utils.js";
import { getDocs, updateDoc, deleteDoc, getDoc, addDoc } from 'firebase/firestore';

const colName = "Marca";

export async function getAllMarca() {
    const MarcaCol = collectionHelper(colName);
    const MarcaSnapshot = await getDocs(MarcaCol);
    const MarcaList = MarcaSnapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
    return MarcaList;
  }
  
export async function getByIdMarca(id) {
  const docRef = docHelper(colName, id);
  const docSnap = await getDoc(docRef);
  const Marca = {id:docSnap.id , ...docSnap.data()}; 
  return Marca;
}

export async function createMarca({
  nome,
}) {
    const MarcaRef = collectionHelper(colName);

    await addDoc(MarcaRef, {
        nome: nome,
    });
}

export async function editMarca(
  {
    nome,
  },
  id
) {
    const docRef = docHelper(colName, id);

    const dataUpdated = {
      nome,
    }

    await updateDoc(docRef, dataUpdated);
}

  export async function deleteMarca(id) {
    const MarcaCol = docHelper(colName, id);
    await deleteDoc(MarcaCol);
  }