import{r as u,j as t}from"./index-CbeuCj2M.js";function h(e,s){const o=()=>{e.current.parentElement.addEventListener("mousemove",l),e.current.parentElement.addEventListener("mouseup",i),e.current.parentElement.addEventListener("mouseleave",i)},l=n=>{const r=e.current.parentElement.getBoundingClientRect(),a=Math.max(Math.min(n.clientX-r.left,r.width-1),1),c=Math.max(Math.min(n.clientY-r.top,r.height-1),1);s==="horizontal"?(e.current.style.left=`${a}px`,e.current.previousSibling.style.width=`${a}px`,e.current.nextSibling.style.width=`${r.width-a}px`):(e.current.style.top=`${c}px`,e.current.previousSibling.style.height=`${c}px`,e.current.nextSibling.style.height=`${r.height-c}px`)},i=()=>{e.current.parentElement.removeEventListener("mousemove",l),e.current.parentElement.removeEventListener("mouseup",i),e.current.parentElement.removeEventListener("mouseleave",i)};return{Split:o}}function m({children:e,Type:s="horizontal",base:o=50,Tag:l="div"}){const i=u.useRef(null),n=s==="horizontal"||s==="vertical"?s:"horizontal",{Split:r}=h(i,n);return t.jsx(t.Fragment,{children:e&&e.length===2?t.jsxs(l,{className:`split-cont relative ${n}`,children:[t.jsx("section",{className:"split1",style:n==="horizontal"?{width:`${o}%`}:{height:`${o}%`},children:e[0]}),t.jsx("span",{className:`split-btn absolute ${n}`,onMouseDown:r,style:n==="horizontal"?{left:`${o}%`}:{top:`${o}%`},ref:i}),t.jsx("section",{className:"split2",children:e[1]})]}):console.error("Error in Childres")})}function d(){return t.jsx("aside",{children:"Code"})}function x(){return t.jsx(t.Fragment,{children:"Preview"})}function v(){return t.jsx(t.Fragment,{children:t.jsx("main",{className:"app-render fixed h-100 w-100",children:t.jsxs(m,{type:window.innerWidth<840?"vertical":"horizontal",base:window.innerWidth<840?40:48,children:[t.jsx(d,{}),t.jsx(x,{})]})})})}export{v as default};
