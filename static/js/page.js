function findCorrespondingTocTitle(n){return[...document.querySelectorAll("#toc li a")].find(e=>e.href.substring(e.href.indexOf("#"))==="#"+n.id)}document.addEventListener("DOMContentLoaded",function(){document.getElementById("navbar").clientHeight,document.getElementById("toc");var e=document.querySelectorAll("#toc li a");document.getElementById("page-content");let t=null;const n=new window.IntersectionObserver(e=>{e.some(n=>{if(console.log("before"),console.log("entry",n),console.log("current",t),null===t&&n.isIntersecting){let e=findCorrespondingTocTitle(n.target);return e.parentElement.classList.add("bg-blue-800"),t=n,!0}if(console.log("after"),console.log("entry",n),console.log("current",t),!1===n.isIntersecting){let e=findCorrespondingTocTitle(n.target);e.parentElement.classList.remove("bg-blue-800"),e.parentElement.nextElementSibling.classList.add("bg-blue-800")}})},{root:null,threshold:.1});var o=[];[...e].forEach(e=>{o.push(e.href.substring(e.href.indexOf("#")))});const l=document.querySelectorAll(o.join(","));l.forEach(e=>{n.observe(e)})});