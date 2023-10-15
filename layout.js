console.log(document.getElementById('left1'))
console.log(document.getElementsByClassName('left1')[0]);
const li_ = document.getElementsByTagName('li');

for(let i=0; i<li_.length; i++);
{
    li_[0].style.backgroundColor="blue";
}
li_[0].setAttribute('id', 'listname');
li_[1].setAttribute('class', 'listname');
const header = document.getElementsByClassName('header')[0];
header.innerHTML="header"
header.style.color="black"
header.style.fontSize="30pt"
header.style.textAlign="center"

const footer = document.querySelector('footer');
console.log(footer);

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function(){
    for(let i=0; i<li_.length; i++)
    {
        li_[i].style.backgroundColor="#BDB76B";
    }
})

li_[0].addEventListener('mouseenter', function(){
    li_[0].innerHTML="Kyungsoo";
    li_[0].style.color="black";
    li_[0].style.backgroundColor="lightblue";
})
li_[0].addEventListener('mouseleave', function(){
    li_[0].innerHTML="Nur";
    li_[0].style.color="black";
    li_[0].style.backgroundColor="lightblue";
})
li_[1].addEventListener('mouseenter', function(){
    li_[1].innerHTML="Baekhyun";
    li_[1].style.color="black";
    li_[1].style.backgroundColor="#DEB887";
})
li_[1].addEventListener('mouseleave', function(){
    li_[1].innerHTML="Keysa";
    li_[1].style.color="black";
    li_[1].style.backgroundColor="#DEB887";
})
li_[2].addEventListener('mouseenter', function(){
    li_[2].innerHTML="Chanyeol";
    li_[2].style.color="black";
    li_[2].style.backgroundColor="#8FBC8F";
})
li_[2].addEventListener('mouseleave', function(){
    li_[2].innerHTML="Diba";
    li_[2].style.color="black";
    li_[2].style.backgroundColor="#8FBC8F";
}) 

header.addEventListener('mouseenter', function(){
    header.innerHTML="Have Fun";
    header.style.color="red";
    header.style.backgroundColor="#DEB887";
})
header.addEventListener("click", function(){
    header.innerHTML="Header";
    header.style.color="black";
    header.style.backgroundColor="#8FBC8F";
})

var zoomableElement = document.querySelector(".left1.zoomable");
document.getElementById("btn1").addEventListener("click", function(){
    zoomableElement.classList.toggle("zoomed");
});

var left2Element = document.querySelector(".left2.zoomable-clickable");
left2Element.addEventListener("click", function(){
    left2Element.classList.toggle("zoomed");
    left2Element.classList.toggle("clicked");

    if(left2Element.style.backgroundColor === "brown"){
        left2Element.style.backgroundColor ="";
    }
    else{
        left2Element.style.backgroundColor="brown";
    }
})

var left3Element = document.querySelector(".left3.zoomable-clickable");
left3Element.addEventListener("click", function(){
    left3Element.classList.toggle("zoomed");
    if(left2Element.style.backgroundColor === "#90EE90"){
        left3Element.style.backgroundColor ="";
    }
    else{
        left3Element.style.backgroundColor="#90EE90";
    }
})

var center1Element = document.querySelector(".center1.clickable");
center1Element.addEventListener("click", function(){
    center1Element.classList.toggle("rotated");
    if(center1Element.style.backgroundColor === "#66CDAA"){
        center1Element.style.backgroundColor = "";
    }
    else{
        center1Element.style.backgroundColor = "#66CDAA";
    }
})

var center2Element = document.querySelector(".center2.clickable");
center2Element.addEventListener("click", function(){
    center2Element.classList.add("rotating");
    center2Element.addEventListener("animationend", function(){
        center2Element.classList.remove("rotating");
        if(center2Element.style.backgroundColor === "#FFA500"){
            center2Element.style.backgroundColor ="";
        }
        else{
            center2Element.style.backgroundColor = "#FFA500";
        }
    })
})

var center3Element = document.querySelector(".center3.clickable");
center3Element.addEventListener("click", function(){
    center3Element.classList.add("rotating");
    if(center3Element.style.backgroundColor === "#9ACD32"){
        center3Element.style.backgroundColor = "";
    }
    else{
        center3Element.style.backgroundColor = "#9ACD32";
    }
    center3Element.addEventListener("animationend", function(){
        center3Element.classList.remove("rotating");
    })
})

var right1Element = document.querySelector(".right1.clickable");
right1Element.addEventListener("click", function(){
    right1Element.style.transition = "transform 1s ease";
    right1Element.style.transform= "translateY(-200px)";
    right1Element.style.opacity = 0;

    setTimeout(function(){
        right1Element.style.transition = "none";
        right1Element.style.transform = "translateY(0)";
        right1Element.style.opacity = "1";
    }, 500);
})

var right2Element = document.getElementById("right2");
right2Element.addEventListener("click", function(){
    right2Element.style.transform = "rotateY(-180deg) scaleX(0)";
    setTimeout(function(){
        right2Element.style.transform = "rotateY(0) scaleX(1)";
    }, 1000);
})

var navElement = document.getElementById("nav");
navElement.addEventListener("click", function(){
    if(navElement.classList.contains("open")){
        navElement.classList.remove("open");
        navElement.classList.add("closed");
    } else{
        navElement.classList.remove("closed");
        navElement.classList.add("open");
    }
})

var footerElement = document.getElementById("footer");
footerElement.addEventListener("click", function(){
    if(footerElement.classList.contains("open")){
        footerElement.classList.remove("open");
        footerElement.classList.add("closed");
    } else{
        footerElement.classList.remove("closed");
        footerElement.classList.add("open");
    }
})