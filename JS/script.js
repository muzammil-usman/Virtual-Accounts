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
console.log(Math.floor(1000 + Math.random() * 9000));
