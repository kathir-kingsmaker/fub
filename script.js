const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg"
];
let lastHeart = 0;

document.addEventListener("mousemove",(e)=>{

    const now = Date.now();

    if(now-lastHeart<80) return;

    lastHeart=now;

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=e.clientX+"px";
    heart.style.top=e.clientY+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },1500);

});