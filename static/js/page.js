function setActiveToc(e){return e.reverse(),[...e].find(e=>e.getBoundingRect().y<0)}function findCorrespondingTocTitle(t){return[...document.querySelectorAll("#toc li a")].find(e=>e.href.substring(e.href.indexOf("#"))==="#"+t.id)}function setActive(e,t){null!==t&&(findCorrespondingTocTitle(t.target),t.parentElement.classList.remove("bg-blue-800"));let n=findCorrespondingTocTitle(e.target);n.parentElement.classList.add("bg-blue-800")}function setNextActive(e){let t=findCorrespondingTocTitle(e.target);console.log(t),t.parentElement.classList.remove("bg-blue-800"),t.parentElement.nextElementSibling.classList.add("bg-blue-800")}function setPreviousActive(e){let t=findCorrespondingTocTitle(e.target);t.parentElement.classList.remove("bg-blue-800"),t.parentElement.previousElementSibling.classList.add("bg-blue-800")}document.addEventListener("DOMContentLoaded",function(){document.getElementById("navbar").clientHeight,document.getElementById("toc");const e=document.querySelectorAll("#toc li a");document.getElementById("page-content");let t=!1,n=[];[...e].forEach(e=>{n.push(e.href.substring(e.href.indexOf("#")))});const o=document.querySelectorAll(n.join(","));console.log(o),window.addEventListener("scroll",()=>{!1===t?(e[0].classList.add("bg-blue-800"),t=e[0]):console.log(setActive(o))})});