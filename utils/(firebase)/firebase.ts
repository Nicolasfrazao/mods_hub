import { initializeAppCheck, getToken, ReCaptchaV3Provider, CustomProvider } from 'firebase/app-check';
import { initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementID: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Performance Monitoring and get a reference to the service
const perf = getPerformance( app );

const appCheck = initializeAppCheck(
  app,
  { provider:  CustomProvider }
);

const callApiCheck = async () =>
{
  let appCheckTokenResponse;
  try {
    appCheckTokenResponse = await getToken(appCheck, false)
  } catch (error) {
    console.log( error );
    return;
  };
}
