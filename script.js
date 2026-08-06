// Typing Animation

const words = [
    "AI & ML Student",
    "UI/UX Designer",
    "Web Development beginer",
    "Creative Designer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect(){

    if(!typing) return;

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,charIndex++);
        
        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }else{

        typing.textContent = currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){
                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect,deleting?60:120);

}

typeEffect();


// Scroll Reveal Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},{threshold:.2});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(80px)";

sec.style.transition="1s";

observer.observe(sec);

});


// Active Navbar

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

const top=window.scrollY;

const offset=sec.offsetTop-200;

const height=sec.offsetHeight;

if(top>=offset){

current=sec.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#2563eb";
topBtn.style.color="white";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 10px 20px rgba(0,0,0,.2)";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// Mouse Glow Effect

const glow=document.createElement("div");

document.body.appendChild(glow);

glow.style.position="fixed";
glow.style.width="180px";
glow.style.height="180px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="rgba(37,99,235,.18)";
glow.style.filter="blur(70px)";
glow.style.transform="translate(-50%,-50%)";
glow.style.zIndex="-1";

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

function openCertificate(id){

document.getElementById(id).style.display="block";

document.body.style.overflow="hidden";

}

function closePopup(id){

document.getElementById(id).style.display="none";

document.body.style.overflow="auto";

}

window.onclick=function(e){

document.querySelectorAll(".popup").forEach(function(pop){

if(e.target==pop){

pop.style.display="none";

document.body.style.overflow="auto";

}

});

}

/*=========================
DARK MODE
=========================*/

const themeBtn=document.getElementById("themeToggle");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

themeBtn.innerHTML="☀️";

}else{

themeBtn.innerHTML="🌙";

}

});