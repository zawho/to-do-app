(()=>{"use strict";const t=()=>({title:"",description:"",dueDate:"",priority:""}),e=document.querySelector(".main-content"),n=document.createElement("button");n.className="to-do-button",n.innerText="new",e.appendChild(n);const o=[];n.addEventListener("click",(function(){o.push(t),console.log(o)}))})();