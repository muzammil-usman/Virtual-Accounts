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

let barBtn = document.getElementById('bar-button');
let navLinks = document.getElementById("nav-link");
let hideAndSeek = () => {
  if (navLinks.style.display = 'none') {
    navLinks.style.display = 'flex';
    return
  }
  navLinks.style.display = 'none';
}
barBtn.addEventListener("click", hideAndSeek);


let loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener('click', () => {
  let log = document.getElementById("log");
  log.style.display = 'flex'
})

let quitBtn = document.getElementById("quit");
quitBtn.addEventListener('click', () => {
  let log = document.getElementById("log");
  log.style.display = 'none'
})
