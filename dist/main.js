(()=>{"use strict";const e=document.querySelector(".new-to-do-form"),t=document.querySelector(".title-input"),o=document.querySelector(".new-to-do-button"),n=document.querySelector(".new-to-do-form"),u=document.querySelector(".title-input"),c=document.querySelector(".add-to-do-button");o.addEventListener("click",(function(){""!==t.value&&(t.value=""),e.style.display="flex"}));const l=[];c.addEventListener("click",(function(e){""!==u.value&&(e.preventDefault(),l.push({title:u.value,description:"",dueDate:"",priority:""}),n.style.display="none",console.log(l))}))})();