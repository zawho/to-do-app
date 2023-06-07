(()=>{"use strict";const e=document.querySelector(".new-to-do-button"),t=document.querySelector(".new-list-button"),l=document.querySelector(".new-to-do-form"),n=document.querySelector(".title-input"),i=document.querySelector(".description-input"),d=document.querySelector(".due-date-input"),s=document.querySelector(".priority-input"),a=document.querySelector(".list-menu"),o=document.querySelector(".add-to-do-button"),c=document.querySelector(".cancel-to-do-button"),r=document.querySelector(".new-list-form"),u=document.querySelector(".list-name-input"),y=document.querySelector(".add-list-button"),p=document.querySelector(".cancel-list-button"),m=document.querySelector(".list-button-div"),f=document.getElementById("default-list"),x=document.getElementById("other-list"),v=document.querySelector(".project-div"),h={default:[],other:[]};function g(){v.id=this.className.replaceAll(" ","-");const e=Array.from(v.childNodes);for(let t=0;t<e.length;t++)e[t].className===v.id?e[t].style.display="flex":e[t].style.display="none";!function(){const e=Array.from(m.childNodes);for(let t=0;t<e.length;t++)e[t].className===v.id?e[t].style.border="2px solid red":e[t].style.border="2px solid black"}()}function E(){const e=Object.keys(h);let t="";return e.forEach((e=>{e===a.value&&(t=e)})),t}function b(){this.id.includes("-expanded")||"flex"!==this.style.display||(this.style.display="none",this.nextSibling.style.display="flex"),this.id.includes("-expanded")&&"flex"===this.style.display&&(this.style.display="none",this.previousSibling.style.display="flex")}function N(e){e.stopPropagation()}function S(e,t,l,n,i,d){const a=t,o=l,c=n,r=i,u=d;o.className="title-div",c.className="date-div",r.className="priority-div",u.className="description-div";for(let t=0;t<h[e].length;t++)o.innerText=h[e][h[e].length-1].title,""===h[e][h[e].length-1].dueDate?c.innerText="no due date":c.innerText=h[e][h[e].length-1].dueDate,""===h[e][h[e].length-1].description?u.innerText="no description":u.innerText=h[e][h[e].length-1].description,v.appendChild(a),a.appendChild(o),a.appendChild(u),a.appendChild(c),s.checked&&(r.innerText="important",a.appendChild(r)),a.addEventListener("click",b)}e.addEventListener("click",(function(){l.reset(),e.style.display="none",t.style.display="none",l.style.display="flex",l.style.flexDirection="column",l.style.alignItems="flex-start",l.style.gap="10px"})),t.addEventListener("click",(function(){r.reset(),e.style.display="none",t.style.display="none",r.style.display="flex",r.style.display="flex",r.style.flexDirection="column",r.style.alignItems="flex-start",r.style.gap="10px"})),o.addEventListener("click",(function(o){if(""!==n.value){o.preventDefault();const c=E();h[c].push({title:n.value,description:i.value,dueDate:d.value,priority:s.checked,list:a.value}),l.style.display="none",e.style.display="flex",t.style.display="flex",function(e){const t=document.createElement("div"),l=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div");t.className=`${a.value}`.replaceAll(" ","-"),t.style.display="flex",t.style.justifyContent="space-between",t.style.gap="10px",t.style.padding="5px",n.style.display="none";for(let l=0;l<h[e].length;l++)t.id=`${h[e][h[e].length-1].title}`.replaceAll(" ","-");S(e,t,l,i,d,n),v.id===e?t.style.display="flex":t.style.display="none"}(c),function(e){const t=document.createElement("div"),l=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),s=document.createElement("button");t.className=`${a.value}-expanded`.replaceAll(" ","-"),t.style.display="flex",t.style.flexDirection="column",t.style.gap="10px",t.style.padding="5px",s.innerText="edit",s.className="edit-button",s.style.alignSelf="flex-end",t.style.display="none";for(let l=0;l<h[e].length;l++)t.id=`${h[e][h[e].length-1].title}-expanded`.replaceAll(" ","-");S(e,t,l,i,d,n),t.appendChild(s),s.addEventListener("click",(e=>function(e,t){N(e);const l=t,n=document.createElement("textarea"),i=document.createElement("button");n.style.resize="none",n.cols="20",n.rows="1",i.className="done-button",i.innerText="done",i.style.alignSelf="flex-end",l.appendChild(i);const d=Array.from(l.childNodes);for(let e=0;e<d.length;e++)"edit-button"===d[e].className&&(d[e].style.display="none"),"title-div"===d[e].className&&(n.addEventListener("click",N),n.innerText=d[e].innerText,n.id=d[e].innerText,d[e].innerText="",d[e].appendChild(n));i.addEventListener("click",(e=>function(e,t,l){N(e);const n=t,i=l,d=Array.from(v.childNodes),s=Array.from(n.childNodes),a=E();for(let e=0;e<d.length;e++)d[e].id===i.id&&(d[e].id=i.value),d[e].id===`${i.id}-expanded`&&(d[e].id=`${i.value}-expanded`);for(let e=0;e<h[a].length;e++)h[a][e].title===i.id&&(h[a][e].title=i.value,console.log(h[a][e]));for(let e=0;e<s.length;e++)"done-button"===s[e].className&&(s[e].style.display="none"),"edit-button"===s[e].className&&(s[e].style.display="flex"),"title-div"===s[e].className&&(s[e].innerText=i.value,i.style.display="none")}(e,l,n)))}(e,t)))}(c)}})),y.addEventListener("click",(function(l){l.preventDefault(),h[u.value]=[];const n=document.createElement("option");n.value=u.value,n.innerText=u.value,a.appendChild(n);const i=document.createElement("button");i.className=`${u.value}`.replaceAll(" ","-"),i.id=`${u.value}-list`.replaceAll(" ","-"),i.innerText=u.value,m.appendChild(i),i.addEventListener("click",g),r.style.display="none",e.style.display="flex",t.style.display="flex"})),c.addEventListener("click",(function(){e.style.display="flex",t.style.display="flex",l.style.display="none"})),p.addEventListener("click",(function(){e.style.display="flex",t.style.display="flex",r.style.display="none"})),f.addEventListener("click",g),x.addEventListener("click",g)})();