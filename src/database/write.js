import { collection, addDoc, doc, updateDoc, deleteDoc, getDocs } from "firebase/firestore";
import { db } from './firestoreConfig';

/**
 * saves a new task created by the user to db
 * @param {*} data 
 * data received from task creation in form
 * @returns
 *  Collectionreference object
 */
export async function saveNewTasktoDB(data) {
    try {
        const docRef = await addDoc(collection(db, "tasks"), data);
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
        return null;
    }
}

/**
 * update document in Firesore
 * @param {*} id 
 * id from selected object
 * @param {*} data
 * data from selected object 
 */
export async function update(id, data) {
    try {
        const docRef = doc(db, "tasks", id);
        await updateDoc(docRef, data);
    }
    catch (error) {
        throw Error('db function inside write did not work', error)
    };
}

/**
 * Deletes selected task from db
 * @param {*} id 
 * id from selected object
 */
export async function deleteTaskFromDB(id) {
    try {
        await deleteDoc(doc(db, 'tasks', id))
    }
    catch (error) {
        throw Error('something went wrong', error)
    }
}

/**
 * Deletes all tasks from tasks collection and move 
 * them to clearedTasks colelction
 * @returns 
 * empty collection 
 * CollectionReference Object for clearedTask collection
 */
export async function clearTasksFromTasksCollection() {
    try {
        const querySnapshot = await getDocs(collection(db, 'tasks'));

        querySnapshot.forEach(async (doc) => {
            await addDoc(collection(db, "clearedTasks"), doc.data(), doc.id);
            // why can't I use the same id?
        })
        querySnapshot.forEach(async (item) => {
            await deleteDoc(doc(db, 'tasks', item.id))
        })
    }
    catch (e) {
        console.error("Error in moving docment document: ", e);
        return null;
    }
}
