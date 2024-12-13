import {
  collection,
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
  setDoc,
  addDoc,
  getDocs,
  query,
  where
} from "firebase/firestore";
import { db } from "../../firebase.config";

class UserDAO {
  constructor() {
    this.collectionRef = collection(db, "users");
    this.scoresCollectionRef = collection(db, "scores");
    this.rewardsCollectionRef = collection(db, "rewards");
    this.quizzesCollectionRef = collection(db, "quizzes");
  }

  async getUserById(id) {
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


  async getAllScores() {
    const scores = [];
    try {
      const querySnapshot = await getDocs(this.scoresCollectionRef);
      querySnapshot.forEach((doc) => {
        scores.push(doc.data());
      });
    } catch (error) {
      console.error('Error fetching scores:', error);
    }
    return scores;
  };


  async addScore(score) {
    try {
      // verifico si el usuario ya tiene una puntuación
      const q = query(this.scoresCollectionRef, where("email", "==", score.email));
      const querySnapshot = await getDocs(q);
      // si ya tiene una puntuación, la actualizo
      if (!querySnapshot.empty) {
        const docId = querySnapshot.docs[0].id;
        await setDoc(doc(this.scoresCollectionRef, docId), score);
      } else {
        // si no tiene una puntuación, la agrego
        await addDoc(this.scoresCollectionRef, score);
      }
      return { success: true };
    } catch (error) {
      console.error("Error adding score: ", error);
      return { success: false };
    }
  }

  async getRewardById(id) {
    try {
      const rewardDoc = await getDoc(doc(this.rewardsCollectionRef, id));
      if (rewardDoc.exists()) {
        return { success: true, data: rewardDoc.data() };
      } else {
        return { success: false, data: null };
      }
    } catch (error) {
      console.log("Error al obtener el documento:", error);
      return { success: false, data: null, error };
    }
  }

  async updateReward(id, rewardData) {
    const rewardRef = doc(this.rewardsCollectionRef, id);
    await updateDoc(rewardRef, rewardData)
      .then(console.log("Document successfully updated!"))
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  }



  async saveQuizState(quizState) {
    try {
      // Verifico si el usuario ya tiene un estado de quiz guardado
      const q = query(this.quizzesCollectionRef, where("email", "==", quizState.email));
      const querySnapshot = await getDocs(q);
      // Si ya tiene un estado de quiz, lo actualizo
      if (!querySnapshot.empty) {
        const docId = querySnapshot.docs[0].id;
        await setDoc(doc(this.quizzesCollectionRef, docId), quizState);
      } else {
        // Si no tiene un estado de quiz, lo agrego
        await addDoc(this.quizzesCollectionRef, quizState);
      }
      return { success: true };
    } catch (error) {
      console.error("Error saving quiz state: ", error);
      return { success: false };
    }


  }


  async getQuizStateByEmail(email) {
    try {
      const q = query(this.quizzesCollectionRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        return { success: true, data: querySnapshot.docs[0].data() };
      } else {
        return { success: false, data: null };
      }

    }
    catch (error) {
      console.error("Error getting quiz state: ", error);
      return { success: false, data: null };
    }
  }
}

export default new UserDAO();
