(()=>{"use strict";const e=document.querySelector(".new-to-do-button"),t=document.querySelector(".new-list-button"),l=document.querySelector(".new-to-do-form"),n=document.querySelector(".title-input"),o=document.querySelector(".description-input"),d=document.querySelector(".due-date-input"),i=document.querySelector(".priority-input"),c=document.querySelector(".list-menu"),s=document.querySelector(".add-to-do-button"),u=document.querySelector(".cancel-to-do-button"),a=document.querySelector(".new-list-form"),r=document.querySelector(".list-name-input"),y=document.querySelector(".add-list-button"),p=document.querySelector(".cancel-list-button"),m=document.querySelector(".project-div"),f=document.querySelector(".default-list"),v=document.querySelector(".other-list"),x={default:[],other:[]};function q(){m.id=this.className.replace("-list","")}e.addEventListener("click",(function(){l.reset(),e.style.display="none",t.style.display="none",l.style.display="flex",l.style.flexDirection="column",l.style.alignItems="flex-start",l.style.gap="10px"})),t.addEventListener("click",(function(){a.reset(),e.style.display="none",t.style.display="none",a.style.display="flex",a.style.display="flex",a.style.flexDirection="column",a.style.alignItems="flex-start",a.style.gap="10px"})),s.addEventListener("click",(function(s){let u;const a=document.createElement("div"),r=document.createElement("div"),y=document.createElement("div"),p=document.createElement("div");var f,v;a.className="to-do-display",a.style.display="flex",a.style.gap="10px",""!==n.value&&(s.preventDefault(),u=function(){const e=Object.keys(x);let t="";return e.forEach((e=>{e===c.value&&(t=e)})),t}(),x[u].push({title:n.value,description:o.value,dueDate:d.value,priority:i.checked,list:c.value}),l.style.display="none",e.style.display="flex",t.style.display="flex",console.log(x));for(let e=0;e<x[u].length;e++)r.innerText=x[u][x[u].length-1].title,""===x[u][x[u].length-1].dueDate?y.innerText="no due date":y.innerText=x[u][x[u].length-1].dueDate,m.appendChild(a),a.appendChild(r),a.appendChild(y),i.checked&&(p.innerText="important",a.appendChild(p));f=u,v=a,m.id===f?v.style.display="flex":v.style.display="none"})),y.addEventListener("click",(function(l){l.preventDefault(),x[r.value]=[];const n=document.createElement("option");n.value=r.value,n.innerText=r.value,c.appendChild(n),a.style.display="none",e.style.display="flex",t.style.display="flex",console.log(x)})),u.addEventListener("click",(function(){e.style.display="flex",t.style.display="flex",l.style.display="none"})),p.addEventListener("click",(function(){e.style.display="flex",t.style.display="flex",a.style.display="none"})),f.addEventListener("click",q),v.addEventListener("click",q)})();