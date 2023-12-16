
 var imgs=Array.from(document.querySelectorAll(".items img"));
 var layer=document.querySelector(".layer");
 var layerItem=document.querySelector(".layer-item")
 var nextBtn=document.getElementById("nextBtn")
 var prevBtn=document.getElementById("prevBtn")
 var closeBtn=document.getElementById("closeBtn")
 var currentIndex=0;

for(var i=0;i<imgs.length;i++)
{
    imgs[i].addEventListener("click",function(e)
    {
        currentIndex=imgs.indexOf(e.target)
        var currentSrc=e.target.src
        layerItem.style.backgroundImage=`url(${currentSrc})`
        layer.style.display="flex"
    })
}

// close function

closeBtn.addEventListener("click",function()
{
    layer.style.display="none"

})

// next function

nextBtn.addEventListener("click",function()
{
currentIndex++
if(currentIndex>imgs.length-1)
{
    currentIndex=0
}
currentSrc=imgs[currentIndex].src
layerItem.style.backgroundImage=`url(${currentSrc})`
})

// prev function

prevBtn.addEventListener("click",function()
{
currentIndex--
if(currentIndex<0)
{
    currentIndex=imgs.length-1
}
currentSrc=imgs[currentIndex].src
layerItem.style.backgroundImage=`url(${currentSrc})`
})



document.addEventListener('keyup',function(e){

    if(layer.style.display!="") {

if(e.code=='ArrowRight')
{
    currentIndex++
if(currentIndex>imgs.length-1)
{
    currentIndex=0
}
currentSrc=imgs[currentIndex].src
layerItem.style.backgroundImage=`url(${currentSrc})`
}
else if(e.code=='ArrowLeft')
{
    currentIndex--
if(currentIndex<0)
{
    currentIndex=imgs.length-1
}
currentSrc=imgs[currentIndex].src
layerItem.style.backgroundImage=`url(${currentSrc})`
}
else if (e.code=='Escape') {
    layer.style.display="none"
}
    }
})