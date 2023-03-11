import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


import firestore from "@/pages/api/_firestore";

import { collection, query, where, getDocs, addDoc, doc, setDoc } from "firebase/firestore";



import horses from "horses.json";

export default function Testimonials() {

    // Redux Variables
    const dispatch = useDispatch();

    const testimonials = useSelector(store => store.testimonials);

    useEffect( () => {
      dispatch({ type: "FETCH_TESTIMONIALS" });
    }, []);

    async function handleClick() {

      // horses.forEach( async horse => {
      //   await addDoc(collection(firestore, "horses"), horse);
      // });

      // const horse = horses[0];

      // const docDoc = doc



      // const querySnapshot = await getDocs(collection(firestore, "horses"));
      // querySnapshot.forEach(async(doc) => {

      //   // For each horse found
      //   const horse = doc.data();
      //   const horseID = doc.id;

      //   // Find Sire
      //   const q = query(collection(firestore, "horses"), where("id", "==", horse.dam_id));
      //   const querySnapshot = await getDocs(q);
      //   querySnapshot.forEach(async(doc) => {
  
      //     // If sire is found, set sire_id field  to found id
      //     const ref = docDoc(firestore, 'horses', horseID);
      //     setDoc(ref, { dam_id: doc.id }, { merge: true });
  
      //   });

      // });








    }

    return (
      <>
        <button onClick={handleClick}>CLICK ME</button>
      </>
  );
};