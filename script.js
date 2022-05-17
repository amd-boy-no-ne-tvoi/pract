let header_button = document.querySelector(".mobile_icon");
header_button.addEventListener("click", function() {
    document.querySelector("header").classList.add("open");
});
 function close_poput(){
    document.querySelector("header").classList.remove("open");

 }
document.querySelector("#grid").addEventListener("click", close_poput,false);
    document.querySelector("header .popup").addEventListener("click", close_poput, false);
document.querySelector("#show_add_photo").addEventListener("click",function(){
document.querySelector("#add_new_photo").classList.add("open");
});
document.querySelector("#cancel").addEventListener("click", function(){
    document.querySelector("#add_new_photo").classList.remove("open");
});
document.querySelector("#add_photo").addEventListener("click", function(){
let src = document.querySelector("#add_new_src").value;
let text = document.querySelector("#new_photo_text").value;
if (src){
    let new_photo_div = document.createElement("div");
    new_photo_div.classList.add("photo");
    let new_img = document.createElement("img");
    new_img.src =src;
    new_photo_div.append(new_img);
    let new_p = document.createElement("p");
    new_p.innerText = text? text:"Сnандартный текст";
    new_photo_div.append(new_p);
    document.querySelector("#grid").prepend(new_photo_div);
    document.querySelector("#add_new_photo").classList.remove("open")
    document.querySelector("#add_new_src").value = "";
    document.querySelector("#new_photo_text").value = "";
    new_photo_div.addEventListener("click", open_photo, false);
}
else{
     if(!src){
         document.querySelector("#add_new_src").classList.add("error");
     }
}
});
function open_photo(){
    let src = this.querySelector("img").src,
    popup_photo = document.querySelector("#popup_photo");
    popup_photo.querySelector("img").src = src;
    popup_photo.classList.add("open");
}
let photos = document.querySelectorAll(".photo");
for(let photo of photos){
    photo.addEventListener("click", open_photo, false);
}
document.querySelector("#popup_photo").addEventListener("click", function(){
this.classList.remove("open");
});