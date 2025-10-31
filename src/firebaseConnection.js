
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYfptM_v_W0y9o948dCMaqzg9x_wNYGus",
  authDomain: "projeto-total-2e683.firebaseapp.com",
  projectId: "projeto-total-2e683",
  storageBucket: "projeto-total-2e683.firebasestorage.app",
  messagingSenderId: "525311548485",
  appId: "1:525311548485:web:f517cd435f7338f319572c"
};

const firebaseApp = initializeApp(firebaseConfig);


const auth = getAuth(firebaseApp)

export {auth}