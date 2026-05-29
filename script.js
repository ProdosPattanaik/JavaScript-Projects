let mainElement=document.querySelector(".main")
mainElement.addEventListener("mouseenter",()=>{
    mainElement.computedStyleMap.background="green";
})
mainElement.addEventListener("mouseleave",()=>{
    mainElement.computedStyleMap.background="red";
})