let divAcc = document.querySelectorAll(".acc");
for (let i = 0; i < 10; i++) {
  divAcc[0].innerHTML += `
    <div class="item">
    <img src="./Assets/steam/image.png" id="image" width="370px" alt="image">
    <div class='item-box'>
    <span><strong>Account NAME :</strong>Dummy Account</span>
  <span><strong>Account PRICE :</strong>$${Math.floor(
    10 + Math.random() * 90
  )}</span>
  <button class='btn'>Buy Now</button>
  <button class='btn'>More Details</button>
</div>`;
  divAcc[1].innerHTML += `
    <div class="item">
  <img src="./Assets/epic/image.png" id="image" width="370px" alt="image">
    <div class='item-box'>
    <span><strong>Account NAME :</strong>Dummy Account</span>
  <span><strong>Account PRICE :</strong>$${Math.floor(
    10 + Math.random() * 90
  )}</span>
  <button class='btn'>Buy Now</button>
  <button class='btn'>More Details</button>
    </div>
</div>`;
  divAcc[2].innerHTML += `
    <div class="item">
  <img src="./Assets/riot/image.png" id="image" width="370px" alt="image">
    <div class='item-box'>
    <span><strong>Account NAME :</strong>Dummy Account</span>
  <span><strong>Account PRICE :</strong>$${Math.floor(
    10 + Math.random() * 90
  )}</span>
  <button class='btn'>Buy Now</button>
  <button class='btn'>More Details</button>
    </div>
</div>`;
}

let barBtn = document.getElementById("bar-button");
let navLinks = document.getElementById("nav-link");
let hideAndSeek = () => {
  if ((navLinks.style.display = "none")) {
    navLinks.style.display = "flex";
    return;
  }
  navLinks.style.display = "none";
};
barBtn.addEventListener("click", hideAndSeek);

let loginBtn = document.getElementById("loginBtn");
let openLoginPopUp = () => {
  let log = document.getElementById("log");
  log.style.display = "flex";
};
loginBtn.addEventListener("click", openLoginPopUp);
let quitBtn = document.getElementById("cross-1");
let quitTopUp = () => {
  let log = document.getElementById("log");
  log.style.display = "none";
};
quitBtn.addEventListener("click", quitTopUp);
let quitBtn2 = document.getElementById("cross-2");
quitBtn2.addEventListener("click", quitTopUp);

let signUpPage = () => {
  let signInPage = document.getElementById("signIN");
  let signUpPage = document.getElementById("signUP");
  let error1 = document.getElementById("signin-error");
  let error2 = document.getElementById("signin-error-2");
  error1.style.display = "none";
  error2.style.display = "none";
  signUpPage.style.display = "flex";
  signInPage.style.display = "none";
};
let signUpBtn = document.getElementById("su");
signUpBtn.addEventListener("click", signUpPage);

let signInPage = () => {
  let signInPage = document.getElementById("signIN");
  let signUpPage = document.getElementById("signUP");
  signUpPage.style.display = "none";
  signInPage.style.display = "flex";
};
let signInBtn = document.getElementById("si");
signInBtn.addEventListener("click", signInPage);

// Validations

let emailValid = (mail) => {
  let error = document.getElementById("signup-error");
  if (mail.target.value.length === 0) {
    error.style.display = "none";
    return;
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.target.value)) {
    error.style.display = "none";
    return;
  }
  error.style.display = "block";
  error.style.color = "red";
  error.innerText = "Invalid Email Address";
};
let userValidEmail = document.getElementById("user-email-2");
userValidEmail.addEventListener("input", emailValid);

let passValid = (pass) => {
  let error = document.getElementById("signup-error-2");
  if (pass.target.value.length === 0) {
    error.style.display = "none";
    return;
  }
  if (pass.target.value.length < 8) {
    error.style.display = "block";
    error.style.color = "red";
    error.innerText = "Atleast 8 character and 1 Uppercase Required";
    return;
  }
  error.style.display = "none";
};
let userValidPw = document.getElementById("user-pw-2");
userValidPw.addEventListener("input", passValid);
