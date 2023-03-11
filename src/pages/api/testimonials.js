import firestore from "@/libraries/firebase";
import { collection, getDocs } from "firebase/firestore";

export default async (req, res) => {

    if (req.method === "GET") {

        const querySnapshot = await getDocs(collection(firestore, "testimonials"));
        const testimonials = querySnapshot.docs.map(document => document.data());

        if (testimonials) {
            res.status(200).json(testimonials);
        } else {
            res.status(404);
        }

    };

};