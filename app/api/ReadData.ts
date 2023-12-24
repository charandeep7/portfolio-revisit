import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase";

export const readData = async () => {
    let data: any = []
    const querySnapshot = await getDocs(collection(db, "project-list"));
    try {
        querySnapshot.forEach((doc) => {
            data.push([doc.id,doc.data()])
        });
    } catch (error) {
        console.error("Error reading data:", error);
    }
    return data
}