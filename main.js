(()=>{"use strict";const e=document.querySelector(".new-to-do-button"),t=document.querySelector(".new-list-button"),l=document.querySelector(".new-to-do-form"),n=document.querySelector(".title-input"),o=document.querySelector(".description-input"),i=document.querySelector(".due-date-input"),c=document.querySelector(".priority-input"),d=document.querySelector(".list-menu"),s=document.querySelector(".add-to-do-button"),u=document.querySelector(".cancel-to-do-button"),r=document.querySelector(".new-list-form"),a=document.querySelector(".list-name-input"),y=document.querySelector(".add-list-button"),p=document.querySelector(".cancel-list-button"),m=document.querySelector(".project-div"),f=document.querySelector(".default-list"),v=document.querySelector(".other-list"),x={default:[],other:[]};function q(){m.id=this.className.replace("-list","")}e.addEventListener("click",(function(){l.reset(),e.style.display="none",t.style.display="none",l.style.display="flex",l.style.flexDirection="column",l.style.alignItems="flex-start",l.style.gap="10px"})),t.addEventListener("click",(function(){r.reset(),e.style.display="none",t.style.display="none",r.style.display="flex",r.style.display="flex",r.style.flexDirection="column",r.style.alignItems="flex-start",r.style.gap="10px"})),s.addEventListener("click",(function(s){if(""!==n.value){s.preventDefault();const u=function(){const e=Object.keys(x);let t="";return e.forEach((e=>{e===d.value&&(t=e)})),t}();x[u].push({title:n.value,description:o.value,dueDate:i.value,priority:c.checked,list:d.value}),l.style.display="none",e.style.display="flex",t.style.display="flex",function(e){const t=document.createElement("div"),l=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div");t.className="to-do-display",t.style.display="flex",t.style.gap="10px";for(let i=0;i<x[e].length;i++)l.innerText=x[e][x[e].length-1].title,""===x[e][x[e].length-1].dueDate?n.innerText="no due date":n.innerText=x[e][x[e].length-1].dueDate,m.appendChild(t),t.appendChild(l),t.appendChild(n),c.checked&&(o.innerText="important",t.appendChild(o))}(u),console.log(x)}})),y.addEventListener("click",(function(l){l.preventDefault(),x[a.value]=[];const n=document.createElement("option");n.value=a.value,n.innerText=a.value,d.appendChild(n),r.style.display="none",e.style.display="flex",t.style.display="flex",console.log(x)})),u.addEventListener("click",(function(){e.style.display="flex",t.style.display="flex",l.style.display="none"})),p.addEventListener("click",(function(){e.style.display="flex",t.style.display="flex",r.style.display="none"})),f.addEventListener("click",q),v.addEventListener("click",q)})();