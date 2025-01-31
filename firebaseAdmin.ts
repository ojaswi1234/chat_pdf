import { getApps, initializeApp , App, getApp, cert } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const serviceAccount = require('@/service_key.json');

let app: App;

if(getApps().length === 0){
    app = initializeApp({
        credential: cert(serviceAccount),
    });
} else{
    app = getApp();
}
const adminDb = getFirestore(app);
export { app as adminApp, adminDb}