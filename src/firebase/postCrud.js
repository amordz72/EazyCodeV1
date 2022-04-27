import app from './index'


import {
    collection,
    getDocs,
    deleteDoc,
    doc,
    updateDoc,
    addDoc,
    getFirestore
} from "firebase/firestore";



const db = getFirestore(app);
const tableName = 'posts';


export async function add(obj) {

    const postRef = await addDoc(collection(db, tableName), {
        ...obj
    });

    if (postRef)
        return true
    else
        return false

}

export async function update(id, obj) {

    const postRef = doc(db, tableName, id);
    await updateDoc(postRef, {
        ...obj
    })



}
export async function del(id) {

    const result = await deleteDoc(doc(db, tableName, id));
    if (result) {
        return result
    } else {
        return false
    }

}

export async function all() {

    const result = []

    const querySnapshot = await getDocs(collection(db, tableName));
    querySnapshot.forEach((doc) => {

        const id = doc.id;

        result.push({
            id,
            ...doc.data()
        });
    });


    if (result) {
        return result
    } else {
        return false
    }

}


export async function get(id) {
    const docRef = doc(db, tableName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {

        return false
    }

}