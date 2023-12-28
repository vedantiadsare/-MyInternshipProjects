const toggler = document.querySelector(".toggler");
const starterPrice = document.getElementById("starter-price");
const proPrice = document.getElementById("pro-price");

toggler.addEventListener("change", ()=>{
    if(toggler.checked){
        starterPrice.innerHTML = `₹7000 <span> / year </span>`;
        proPrice.innerHTML = `₹5999 <span> / year </span>`;
    }else{
        starterPrice.innerHTML = `₹1500 <span> / month </span>`;
        proPrice.innerHTML = `₹2500 <span> / month </span>`; 
    }
})