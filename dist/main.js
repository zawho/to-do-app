(()=>{"use strict";const e=document.querySelector(".new-to-do-button"),t=document.querySelector(".new-list-button"),l=document.querySelector(".new-to-do-form"),n=document.querySelector(".title-input"),o=document.querySelector(".description-input"),d=document.querySelector(".due-date-input"),i=document.querySelector(".priority-input"),c=document.querySelector(".list-menu"),s=document.querySelector(".add-to-do-button"),u=document.querySelector(".cancel-to-do-button"),r=document.querySelector(".new-list-form"),a=document.querySelector(".list-name-input"),y=document.querySelector(".add-list-button"),p=document.querySelector(".cancel-list-button"),m=document.querySelector(".project-div"),f={default:[],other:[]};let x;e.addEventListener("click",(function(){l.reset(),e.style.display="none",t.style.display="none",l.style.display="flex",l.style.flexDirection="column",l.style.alignItems="flex-start",l.style.gap="10px"})),t.addEventListener("click",(function(){r.reset(),e.style.display="none",t.style.display="none",r.style.display="flex",r.style.display="flex",r.style.flexDirection="column",r.style.alignItems="flex-start",r.style.gap="10px"})),s.addEventListener("click",(function(s){""!==n.value&&(s.preventDefault(),x=function(){const e=Object.keys(f);let t="nope";return e.forEach((e=>{e===c.value&&(t=e)})),t}(),f[x].push({title:n.value,description:o.value,dueDate:d.value,priority:i.checked,list:c.value}),l.style.display="none",e.style.display="flex",t.style.display="flex",function(){const e=document.createElement("div"),t=document.createElement("div"),l=document.createElement("div"),n=document.createElement("div");e.className="to-do-display",e.style.display="flex",e.style.gap="10px";for(let o=0;o<f[x].length;o++)t.innerText=f[x][f[x].length-1].title,""===f[x][f[x].length-1].dueDate?l.innerText="no due date":l.innerText=f[x][f[x].length-1].dueDate,m.appendChild(e),e.appendChild(t),e.appendChild(l),i.checked&&(n.innerText="important",e.appendChild(n))}(),console.log(x),console.log(f))})),y.addEventListener("click",(function(l){l.preventDefault(),f[a.value]=[],r.style.display="none",e.style.display="flex",t.style.display="flex",console.log(f)})),u.addEventListener("click",(function(){e.style.display="flex",t.style.display="flex",l.style.display="none"})),p.addEventListener("click",(function(){e.style.display="flex",t.style.display="flex",r.style.display="none"}))})();