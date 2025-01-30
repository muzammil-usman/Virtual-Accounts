import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "./firebase.js";
let isFirestoreCompleted = true;

let localData = [];
let isLogin = JSON.parse(localStorage.getItem("login"));

let signUpBtn = document.getElementById("SignUpBtn");
let signInBtn = document.getElementById("SignInBtn");

let checkUserAuth = async () => {
  if (isLogin) {
    let log = document.getElementById("log");
    log.style.display = "none";
    let loginBtn = document.getElementById("loginBtn");
    let logoutBtn = document.getElementById("logoutBtn");
    loginBtn.style.display = "none";
    logoutBtn.style.display = "block";
    return;
  }
  else {
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          if (isFirestoreCompleted) {
            let log = document.getElementById("log");
            log.style.display = "none";
            let loginBtn = document.getElementById("loginBtn");
            let logoutBtn = document.getElementById("logoutBtn");
            loginBtn.style.display = "none";
            logoutBtn.style.display = "block";
          }

          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          // ...
        } else {
          let loginBtn = document.getElementById("loginBtn");
          let logoutBtn = document.getElementById("logoutBtn");
          loginBtn.style.display = "block";
          logoutBtn.style.display = "none";
          // User is signed out
          // ...
        }
      });
  }
};
checkUserAuth();

let userSignUp = async () => {
  let userName = document.getElementById("user-name");
  let userEmail = document.getElementById("user-email-2");
  let userPw = document.getElementById("user-pw-2");
  await createUserWithEmailAndPassword(auth, userEmail.value, userPw.value)
    .then((userCredential) => {
      const user = userCredential.user;
      localData.push({
        username: userName.value,
        useremail: user.email,
        userID: user.uid,
      });
      localStorage.setItem("login", JSON.stringify(localData));
      location.reload();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};
signUpBtn.addEventListener("click", userSignUp);

let userSignIn = async () => {
  let userEmail = document.getElementById("user-email");
  let userPw = document.getElementById("user-pw");
  await signInWithEmailAndPassword(auth, userEmail.value, userPw.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      localData.push({
        userEmail: user.email,
        userID: user.uid,
      });
      localStorage.setItem("login", JSON.stringify(localData));
      location.reload();
      location.reload();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
signInBtn.addEventListener("click", userSignIn);

let logoutBtn = document.getElementById("logoutBtn");
let userSignOut = async () => {
  await signOut(auth)
    .then(() => {
      checkUserAuth();
      localStorage.removeItem("login");
      location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};
logoutBtn.addEventListener("click", userSignOut);
