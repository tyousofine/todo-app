import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from './firestoreConfig';

// db function to save new task to db - called in form component
export async function saveNewTasktoDB(data) {
    try {
        const docRef = await addDoc(collection(db, "tasks"), data);
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
        return null;
    }
}

// function to update db based on user prompted changes
export async function update(id, data) {
    try {
        const docRef = doc(db, "tasks", id);

        await updateDoc(docRef, data);
        console.log('data received from status change inside db: ', data)
    }
    catch {
        console.log('db function inside write did not work')
    };
}