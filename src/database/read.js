import { collection, getDocs } from "firebase/firestore";
import { db } from './firestoreConfig';


/**
 * Loads all the documents from taasks collection
 * @returns 
 * Array with the tasks
 */
export async function loadFromDB() {
    try {
        const querySnapshot = await getDocs(collection(db, 'tasks'));

        const data = [];
        querySnapshot.forEach((doc) => {
            data.push({
                ...doc.data(),
                id: doc.id
            })

        })
        return data;
    }
    catch (error) {
        throw Error('something went wrong: ', error)
    }

}