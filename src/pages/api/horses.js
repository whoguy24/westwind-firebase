import horses from "horses.json";
import firestore from "@/pages/api/_firestore.js";
import { collection, getDocs, addDoc, updateDoc, query, where, Timestamp, deleteField } from "firebase/firestore";

export default async (req, res) => {

    if (req.method === "GET") {

        const querySnapshot = await getDocs(collection(firestore, "horses"));
        const horses = querySnapshot.docs.map(document => document.data());
        res.status(200).json(horses);

        // await populateFirestore();
        // deleteFields();

    };

    async function populateFirestore() {
        await uploadHorses();
        horses.forEach( async horse => { await setParents(horse) });
        horses.forEach( async horse => { await setProgeny(horse) });
    }

    async function uploadHorses() {
        horses.forEach(async horse => {
            const repackagedHorse = {
                id: Number(horse.id) || null,
                sire_id: Number(horse.sire_id) || null,
                dam_id: Number(horse.dam_id) || null,
                profile_id: Number(horse.profile_id) || null,
                name: String(horse.name) || null,
                category: String(horse.category) || null,
                breed: String(horse.breed) || null,
                sex: String(horse.sex) || null,
                birth_date: Timestamp.fromDate(new Date(horse.birth_date)) || null,
                color: String(horse.color) || null,
                type: String(horse.type) || null,
                crioonline_id: String(horse.crioonline_id) || null,
                pedigree_url: String(horse.pedigree_url) || null,
                visible: horse.visible == "TRUE" ? true : false,
                created_date: Timestamp.now(),
                created_by: "wobrien@obriensoftwarestudios.com",
                modified_date: Timestamp.now(),
                modified_by: "wobrien@obriensoftwarestudios.com",
                parents: [],
                progeny: [],
                images: []
            };
            await addDoc(collection(firestore, "horses"), repackagedHorse );
        });
    }

    async function deleteFields() {
        const querySnapshot = await getDocs(collection(firestore, "horses"));
        querySnapshot.forEach(async(document) => {
            await updateDoc(document.ref, {
                id: deleteField(),
                sire_id: deleteField(),
                dam_id: deleteField()
            });
        });
    }

    async function setParents(paramHorse) {
        const parents = await findParents(paramHorse);
        const q = query(collection(firestore, "horses"), where("id", "==", paramHorse.id ));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async(document) => {
            console.log(document.data())
            await updateDoc(document.ref, {
                parents: parents
            });
        });
    };


    async function setProgeny(paramHorse) {
        const progeny = await findProgeny(paramHorse);
        const q = query(collection(firestore, "horses"), where("id", "==", paramHorse.id ));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async(document) => {
            console.log(document.data())
            await updateDoc(document.ref, {
                progeny: progeny
            });
        });
    };

    async function findParents( paramHorse ) {
        const parents = [];
        const sire = horses.find( horse => horse.id === paramHorse.sire_id );
        const dam = horses.find( horse => horse.id === paramHorse.dam_id );
        if (sire) {
            const querySire = query(collection(firestore, "horses"), where("id", "==", sire.id ));
            const querySnapshotSire = await getDocs(querySire);
            querySnapshotSire.forEach((document) => {
                parents.push(document.ref);
            });
        }
        if (dam) {
            const queryDam = query(collection(firestore, "horses"), where("id", "==", dam.id ));
            const querySnapshotDam = await getDocs(queryDam);
            querySnapshotDam.forEach((document) => {
                parents.push(document.ref);
            });
        }
        return parents;
    };

    async function findProgeny( paramHorse ) {
        const progeny = [];
        const querySire = query(collection(firestore, "horses"), where( "sire_id", "==", paramHorse.id ));
        const querySnapshotSire = await getDocs(querySire);
        querySnapshotSire.forEach((document) => {
            progeny.push(document.ref);
        });
        const queryDam = query(collection(firestore, "horses"), where("dam_id", "==", paramHorse.id ));
        const querySnapshotDam = await getDocs(queryDam);
        querySnapshotDam.forEach((document) => {
            parents.push(document.ref);
        });
        return progeny;
    };

}