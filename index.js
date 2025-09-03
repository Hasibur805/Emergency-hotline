let count = 0;

const hardIcons = document.getElementsByClassName("hard-icon")
for(let hardIcon of hardIcons){
    hardIcon.addEventListener("click",function(){
        count++;
        document.getElementById("count").textContent = count
    });
}

// call function 
let coins = 100;

const coinsEl = document.getElementById("coins");
const callHistory = document.getElementById("call-history");


const buttons =document.querySelectorAll(".call-btn")
for(const button of buttons){
  button.addEventListener("click",function(e){
    const card = e.target.closest(".card");
    const name = card.querySelector(".service-name").innerText;
    const number = card.querySelector(".service-number").innerText;

    if(coins < 20) {
      alert("Not enough coins!");
      return;
    }

    alert(`Calling ${name} at ${number}...`);
    coins = coins - 20;
    coinsEl.innerText = coins;

    // Add to history
    const time = new Date().toLocaleTimeString();
    const li = document.createElement("li");
    li.textContent = `${name} - ${number} at ${time}`;
    callHistory.appendChild(li);
  });
}


// copy count 

let copyCount = 0;
const copyElement = document.getElementById("copy-count");

const copyBtns = document.querySelectorAll(".copy-btn")
for(let copyBtn of copyBtns){
  copyBtn.addEventListener("click",function(e){
    const card = e.target.closest(".card");
    const number = card.querySelector(".service-number").innerText;

    navigator.clipboard.writeText(number).then(() => {
      copyCount++;
      copyElement.innerText = copyCount;
      alert(`Copied ${number} to clipboard!`);
    });
  });
};


document.getElementById("clear-btn").addEventListener("click",function(){
  callHistory.innerHTML = "";
});