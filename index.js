let addbtn=document.querySelector('#addbtn');
let save=document.querySelector('#savebtn');
let todobtn=document.querySelector('#tobtn');
let popup = document.querySelector("#popup");
let cancel= document.querySelector("#cancelbtn");

todobtn.addEventListener("click", () => {
    popup.classList.remove("d-none");
  });
  
save.addEventListener("click", () => {
    popup.classList.add("d-none");
});
cancel.addEventListener("click",()=>{
    popup.classList.add("d-none");
});

