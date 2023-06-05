(()=>{"use strict";const e=document.querySelector(".new-to-do-button"),t=document.querySelector(".new-list-button"),l=document.querySelector(".new-to-do-form"),n=document.querySelector(".title-input"),i=document.querySelector(".description-input"),d=document.querySelector(".due-date-input"),s=document.querySelector(".priority-input"),c=document.querySelector(".list-menu"),o=document.querySelector(".add-to-do-button"),a=document.querySelector(".cancel-to-do-button"),r=document.querySelector(".new-list-form"),u=document.querySelector(".list-name-input"),y=document.querySelector(".add-list-button"),p=document.querySelector(".cancel-list-button"),m=document.querySelector(".list-button-div"),f=document.getElementById("default-list"),x=document.getElementById("other-list"),v=document.querySelector(".project-div"),h={default:[],other:[]};function E(){v.id=this.className.replaceAll(" ","-");const e=Array.from(v.childNodes);for(let t=0;t<e.length;t++)e[t].className===v.id?e[t].style.display="flex":e[t].style.display="none";!function(){const e=Array.from(m.childNodes);for(let t=0;t<e.length;t++)e[t].className===v.id?e[t].style.border="2px solid red":e[t].style.border="2px solid black"}()}function g(){this.id.includes("-expanded")||"flex"!==this.style.display||(this.style.display="none",this.nextSibling.style.display="flex"),this.id.includes("-expanded")&&"flex"===this.style.display&&(this.style.display="none",this.previousSibling.style.display="flex")}function S(e,t,l,n,i,d){const c=t,o=l,a=n,r=i,u=d,y=document.createElement("button");y.innerText="edit",y.className="edit-button",y.style.alignSelf="flex-end";for(let t=0;t<h[e].length;t++)o.innerText=h[e][h[e].length-1].title,""===h[e][h[e].length-1].dueDate?a.innerText="no due date":a.innerText=h[e][h[e].length-1].dueDate,""===h[e][h[e].length-1].description?u.innerText="no description":u.innerText=h[e][h[e].length-1].description,v.appendChild(c),c.appendChild(o),c.appendChild(u),c.appendChild(a),s.checked&&(r.innerText="important",c.appendChild(r)),c.appendChild(y),c.addEventListener("click",g)}e.addEventListener("click",(function(){l.reset(),e.style.display="none",t.style.display="none",l.style.display="flex",l.style.flexDirection="column",l.style.alignItems="flex-start",l.style.gap="10px"})),t.addEventListener("click",(function(){r.reset(),e.style.display="none",t.style.display="none",r.style.display="flex",r.style.display="flex",r.style.flexDirection="column",r.style.alignItems="flex-start",r.style.gap="10px"})),o.addEventListener("click",(function(o){if(""!==n.value){o.preventDefault();const a=function(){const e=Object.keys(h);let t="";return e.forEach((e=>{e===c.value&&(t=e)})),t}();h[a].push({title:n.value,description:i.value,dueDate:d.value,priority:s.checked,list:c.value}),l.style.display="none",e.style.display="flex",t.style.display="flex",function(e){const t=document.createElement("div"),l=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div");t.className=`${c.value}`.replaceAll(" ","-"),t.style.display="flex",t.style.justifyContent="space-between",t.style.gap="10px",t.style.padding="5px",n.style.display="none";for(let l=0;l<h[e].length;l++)t.id=`${h[e][h[e].length-1].title}`.replaceAll(" ","-");S(e,t,l,i,d,n),v.id===e?t.style.display="flex":t.style.display="none"}(a),function(e){const t=document.createElement("div"),l=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div");t.className=`${c.value}-expanded`.replaceAll(" ","-"),t.style.display="flex",t.style.flexDirection="column",t.style.gap="10px",t.style.padding="5px",t.style.display="none";for(let l=0;l<h[e].length;l++)t.id=`${h[e][h[e].length-1].title}-expanded`.replaceAll(" ","-");S(e,t,l,i,d,n)}(a)}})),y.addEventListener("click",(function(l){l.preventDefault(),h[u.value]=[];const n=document.createElement("option");n.value=u.value,n.innerText=u.value,c.appendChild(n);const i=document.createElement("button");i.className=`${u.value}`.replaceAll(" ","-"),i.id=`${u.value}-list`.replaceAll(" ","-"),i.innerText=u.value,m.appendChild(i),i.addEventListener("click",E),r.style.display="none",e.style.display="flex",t.style.display="flex"})),a.addEventListener("click",(function(){e.style.display="flex",t.style.display="flex",l.style.display="none"})),p.addEventListener("click",(function(){e.style.display="flex",t.style.display="flex",r.style.display="none"})),f.addEventListener("click",E),x.addEventListener("click",E)})();