function findCorrespondingTocTitle(n){return[...document.querySelectorAll("#toc li a")].find(e=>e.href.substring(e.href.indexOf("#"))==="#"+n.id)}document.addEventListener("DOMContentLoaded",function(){document.getElementById("navbar").clientHeight,document.getElementById("toc");var e=document.querySelectorAll("#toc li a");document.getElementById("page-content");let t=null,o=null;const n=new window.IntersectionObserver(e=>{e.some(n=>{if(console.log("observe"),n.isIntersecting){null!==o&&0<o.target.getBoundingClientRect().y&&console.log("stop"),console.log("processing"),console.log("entry",n),console.log("current",o),null!==o&&console.log("current",o.target.getBoundingClientRect().y);let e=findCorrespondingTocTitle((o=n).target);void 0===e||null!==t&&t===e||(null!==t&&t.parentElement.classList.remove("bg-blue-800"),t=e),e.parentElement.classList.add("bg-blue-800")}})},{root:null,threshold:.1});var l=[];[...e].forEach(e=>{l.push(e.href.substring(e.href.indexOf("#")))});const r=document.querySelectorAll(l.join(","));r.forEach(e=>{n.observe(e)})});