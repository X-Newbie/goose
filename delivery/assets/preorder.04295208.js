import"./input.f979339b.js";const e=document.querySelector(".select"),t=document.querySelector("#delivery-select"),c=document.querySelectorAll(".delivery-method .option"),l=document.querySelector(".option-container");e.onclick=()=>{l.classList.toggle("active"),t.classList.toggle("border-blue")},c.forEach((e=>{e.addEventListener("click",(()=>{t.value=e.innerText,l.classList.toggle("active"),t.classList.toggle("border-blue"),c.forEach((e=>{e.classList.remove("selected")})),e.classList.add("selected")}))}));