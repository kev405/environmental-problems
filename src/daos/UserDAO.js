import {
  collection,
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
  setDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../../firebase.config";

class UserDAO {
  constructor() {
    this.collectionRef = collection(db, "users");
  }

  async getUserById(id){
    try {
      const userDoc = await getDoc(doc(this.collectionRef, id)); 
      if (userDoc.exists()) {
        return { success: true, data: userDoc.data() };
      } else {
        return { success: false, data: null };
      }
    } catch (error) {
      console.log("Error al obtener el documento:", error);
      return { success: false, data: null, error };
    }
  }

  async createUser(userData, userId) {
    const searchUser = await this.getUserById(userId);
    if (!searchUser.success) {
      await setDoc(doc(this.collectionRef, userId), userData)
      .then(console.log("Document written with ID: ", userId))
      .catch((error) => {
        console.error("Error adding document: ", error);
      }); 
    }
  }

  async updateUser(id, userData) {
    const userRef = doc(this.collectionRef, id);
    await updateDoc(userRef, userData)
      .then(console.log("Document successfully updated!"))
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  }

  async deleteUser(id) {
    await deleteDoc(doc(this.collectionRef, id))
      .then(console.log("Document successfully deleted!"))
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }
}

export default new UserDAO();
