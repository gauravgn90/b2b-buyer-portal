import{r as t}from"./reactVendor-BAhb8EbJ.js";import{o as a,j as s}from"./mui-5MYSBV5R.js";import{r as o}from"./react-setup-B89zJiq4.js";function u(){const[r,i]=t.useState({width:window.innerWidth,height:window.innerHeight}),e=t.useCallback(()=>{i({width:window.innerWidth,height:window.innerHeight})},[]);return t.useEffect(()=>(window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)),[e]),r}const v=()=>{const{width:r}=u(),[i,e]=t.useState(!1);return t.useEffect(()=>{+r>=1536?e(!0):e(!1)},[r]),i};function E(){return[t.useRef(null)]}var n={},d=a;Object.defineProperty(n,"__esModule",{value:!0});var f=n.default=void 0,l=d(o()),c=s;f=n.default=(0,l.default)((0,c.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit");export{E as a,f as d,v as u};
