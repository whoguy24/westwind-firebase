import firestore from "@/pages/api/_firestore.js";
import { collection, getDocs, doc, updateDoc, getDoc } from "firebase/firestore";

export default async (req, res) => {

    if (req.method === "GET") {

        const querySnapshot = await getDocs(collection(firestore, "horses"));
        const horses = querySnapshot.docs.map(document => document.data());


        // querySnapshot.forEach(async snapshot => {

        //     await updateDoc(snapshot, {
        //         visible: Boolean(snapshot.data().visible)
        //     });

        // });




        if (horses) {
            res.status(200).json(horses);
        } else {
            res.status(404);
        }






    };

    // const ref = doc(firestore, "horses", "3NbUgslDIIBORMXvu6RK");
    // const docSnap = await getDoc(ref);

    // console.log(docSnap.id)


    // await updateDoc(ref, {
    //     visible: Boolean(docSnap.data().visible)
    // });

};