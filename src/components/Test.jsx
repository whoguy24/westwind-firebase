import db from "../libraries/firebase"

import { collection, getDocs } from "firebase/firestore";

export default function Test() {

    async function test() {
        const querySnapshot = await getDocs(collection(db, "users"))
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
        });
    }

    return (
      <>
        <button onClick={test}>CLICK ME</button>
      </>
    )

  }