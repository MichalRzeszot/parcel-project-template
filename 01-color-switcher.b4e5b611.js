document.addEventListener("DOMContentLoaded",function(){let e;let t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");t.addEventListener("click",function(){t.disabled=!0,d.disabled=!1,e=setInterval(()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`},1e3)}),d.addEventListener("click",function(){t.disabled=!1,d.disabled=!0,clearInterval(e)})});
//# sourceMappingURL=01-color-switcher.b4e5b611.js.map