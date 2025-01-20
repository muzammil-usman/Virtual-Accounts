import {
  signInWithEmailAndPassword,
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "./firebase.js";

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     console.log("userinhey baba", user);
//     // ...
//   } else {
//     console.log("User is signed out");
//     // User is signed out
//     // ...
//   }
// });

// let firebaseTesting = () => {
//   let email = document.getElementById("username");
//   let password = document.getElementById("password");

//   signInWithEmailAndPassword(auth, email.value, password.value)
//     .then((userCredential) => {
//       // Signed up
//       const user = userCredential.user;
//       console.log("behtareen hogaya ! user found ", user);
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("error agaya jani", errorMessage);
//       // ..
//     });
// };
// let btn = document.getElementById("firebaseChecker");
// btn.addEventListener("click", firebaseTesting);

// All the best
