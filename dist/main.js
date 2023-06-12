(()=>{"use strict";const e=document.querySelector(".new-to-do-button"),t=document.querySelector(".new-list-button"),n=document.querySelector(".new-to-do-form"),l=document.querySelector(".title-input"),i=document.querySelector(".description-input"),d=document.querySelector(".due-date-input"),a=document.querySelector(".priority-input"),c=document.querySelector(".list-menu"),s=document.querySelector(".add-to-do-button"),r=document.querySelector(".cancel-to-do-button"),o=document.querySelector(".new-list-form"),p=document.querySelector(".list-name-input"),u=document.querySelector(".add-list-button"),y=document.querySelector(".cancel-list-button"),m=document.querySelector(".list-button-div"),x=document.getElementById("default-list"),v=document.getElementById("other-list"),f=document.querySelector(".project-div"),h={default:[],other:[]};function E(){f.id=this.className.replaceAll(" ","-");const e=Array.from(f.childNodes);for(let t=0;t<e.length;t++)e[t].className===f.id?e[t].style.display="flex":e[t].style.display="none";!function(){const e=Array.from(m.childNodes);for(let t=0;t<e.length;t++)e[t].className===f.id?e[t].style.border="2px solid red":e[t].style.border="2px solid black"}()}function T(){const e=Object.keys(h);let t="";return e.forEach((e=>{e===c.value&&(t=e)})),t}function g(){this.id.includes("-expanded")||"flex"!==this.style.display||(this.style.display="none",this.nextSibling.style.display="flex"),this.id.includes("-expanded")&&"flex"===this.style.display&&(this.style.display="none",this.previousSibling.style.display="flex")}function N(e){e.stopPropagation()}function b(e,t,n,l,i,d){const c=t,s=n,r=l,o=i,p=d;s.className="title-div",r.className="date-div",o.className="priority-div",p.className="description-div";for(let t=0;t<h[e].length;t++)s.innerText=h[e][h[e].length-1].title,""===h[e][h[e].length-1].dueDate?r.innerText="no due date":r.innerText=h[e][h[e].length-1].dueDate,""===h[e][h[e].length-1].description?p.innerText="no description":p.innerText=h[e][h[e].length-1].description,f.appendChild(c),c.appendChild(s),c.appendChild(p),c.appendChild(r),a.checked?o.innerText="important":o.innerText="",c.appendChild(o),c.addEventListener("click",g)}e.addEventListener("click",(function(){n.reset(),e.style.display="none",t.style.display="none",n.style.display="flex",n.style.flexDirection="column",n.style.alignItems="flex-start",n.style.gap="10px"})),t.addEventListener("click",(function(){o.reset(),e.style.display="none",t.style.display="none",o.style.display="flex",o.style.display="flex",o.style.flexDirection="column",o.style.alignItems="flex-start",o.style.gap="10px"})),s.addEventListener("click",(function(s){if(""!==l.value){s.preventDefault();const r=T();h[r].push({title:l.value,description:i.value.replaceAll("\n"," "),dueDate:d.value,priority:a.checked,list:c.value}),n.style.display="none",e.style.display="flex",t.style.display="flex",function(e){const t=document.createElement("div"),n=document.createElement("div"),l=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div");t.className=`${c.value}`.replaceAll(" ","-"),t.style.display="flex",t.style.justifyContent="space-between",t.style.gap="10px",t.style.padding="5px",l.style.display="none";for(let n=0;n<h[e].length;n++)t.id=`${h[e][h[e].length-1].title}`.replaceAll(" ","-");b(e,t,n,i,d,l),f.id===e?t.style.display="flex":t.style.display="none"}(r),function(e){const t=document.createElement("div"),n=document.createElement("div"),l=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),a=document.createElement("button");t.className=`${c.value}-expanded`.replaceAll(" ","-"),t.style.display="flex",t.style.flexDirection="column",t.style.gap="10px",t.style.padding="5px",a.innerText="edit",a.className="edit-button",a.style.alignSelf="flex-end",t.style.display="none";for(let n=0;n<h[e].length;n++)t.id=`${h[e][h[e].length-1].title}-expanded`.replaceAll(" ","-");b(e,t,n,i,d,l),t.appendChild(a),a.addEventListener("click",(e=>function(e,t){N(e);const n=t,l=document.createElement("div"),i=document.createElement("input"),d=document.createElement("div"),a=document.createElement("textarea"),c=document.createElement("input"),s=document.createElement("input"),r=document.createElement("div"),o=document.createElement("button"),p=document.createElement("button");i.type="text",a.style.resize="none",a.cols="20",a.rows="5",c.type="date",s.type="checkbox",o.className="done-button",o.innerText="done",o.style.alignSelf="flex-end",p.className="cancel-edit-button",p.innerText="cancel",p.style.alignSelf="flex-end",n.appendChild(o),n.appendChild(p);const u=Array.from(n.childNodes);for(let e=0;e<u.length;e++)"edit-button"===u[e].className&&(u[e].style.display="none"),"title-div"===u[e].className&&(i.addEventListener("click",N),i.value=u[e].innerText,i.id=`${u[e].innerText}-edit`.replaceAll(" ","-"),u[e].innerText="",l.id=`${i.id}-label`,l.innerText="title",u[e].appendChild(l),u[e].appendChild(i)),"description-div"===u[e].className&&(a.addEventListener("click",N),"no description"===u[e].innerText?a.innerText="":a.innerText=u[e].innerText.replaceAll("\n"," "),a.id=`${n.id.replace("-expanded","")}-description-edit`.replaceAll(" ","-"),u[e].innerText="",d.id=`${a.id}-label`,d.innerText="description",u[e].appendChild(d),u[e].appendChild(a)),"date-div"===u[e].className&&("no due date"!==u[e].innerText&&(c.value=u[e].innerText),c.addEventListener("click",N),c.id=`${n.id.replace("-expanded","")}-date-edit`.replaceAll(" ","-"),u[e].innerText="",u[e].appendChild(c)),"priority-div"===u[e].className&&("important"===u[e].innerText&&(s.checked=!0),s.addEventListener("click",N),s.id=`${n.id.replace("-expanded","")}-priority-edit`.replaceAll(" ","-"),u[e].style.display="flex",u[e].style.gap="5px",u[e].innerText="",r.id=`${s.id}-label`,r.innerText="important",u[e].appendChild(s),u[e].appendChild(r));o.addEventListener("click",(e=>function(e,t,n,l,i,d,a,c,s){N(e);const r=t,o=n,p=l,u=i,y=d,m=a,x=c,v=s,E=o.id.replace("-edit",""),g=Array.from(f.childNodes),b=Array.from(r.previousSibling.childNodes),k=Array.from(r.childNodes),S=T();for(let e=0;e<g.length;e++)g[e].id===E&&(g[e].id=o.value),g[e].id===`${E}-expanded`&&(g[e].id=`${o.value}-expanded`);for(let e=0;e<b.length;e++)"title-div"===b[e].className&&(b[e].innerText=o.value),"date-div"===b[e].className&&(""===u.value?b[e].innerText="no due date":b[e].innerText=u.value),"priority-div"===b[e].className&&(y.checked?b[e].innerText="important":b[e].innerText="");for(let e=0;e<h[S].length;e++)h[S][e].title===E&&(h[S][e].title=o.value,h[S][e].description=p.value.replaceAll("\n"," "),h[S][e].dueDate=u.value,h[S][e].priority=y.checked);for(let e=0;e<k.length;e++)"done-button"===k[e].className&&k[e].remove(),"edit-button"===k[e].className&&(k[e].style.display="flex"),"title-div"===k[e].className&&(k[e].innerText=o.value,m.remove(),o.remove()),"description-div"===k[e].className&&(""===p.value?k[e].innerText="no description":k[e].innerText=p.value,x.remove(),p.remove()),"date-div"===k[e].className&&(""===u.value?k[e].innerText="no due date":k[e].innerText=u.value,u.remove()),"priority-div"===k[e].className&&(y.checked?k[e].innerText="important":k[e].innerText="",y.remove(),v.remove())}(e,n,i,a,c,s,l,d,r))),p.addEventListener("click",(e=>function(e){N(e)}(e)))}(e,t)))}(r)}})),u.addEventListener("click",(function(n){n.preventDefault(),h[p.value]=[];const l=document.createElement("option");l.value=p.value,l.innerText=p.value,c.appendChild(l);const i=document.createElement("button");i.className=`${p.value}`.replaceAll(" ","-"),i.id=`${p.value}-list`.replaceAll(" ","-"),i.innerText=p.value,m.appendChild(i),i.addEventListener("click",E),o.style.display="none",e.style.display="flex",t.style.display="flex"})),r.addEventListener("click",(function(){e.style.display="flex",t.style.display="flex",n.style.display="none"})),y.addEventListener("click",(function(){e.style.display="flex",t.style.display="flex",o.style.display="none"})),x.addEventListener("click",E),v.addEventListener("click",E)})();