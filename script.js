function openImage(src){
const modal=document.getElementById("imageModal");
const image=document.getElementById("modalImage");
if(!modal||!image)return;
image.src=src;
modal.classList.add("show");
}
function closeImage(){
const modal=document.getElementById("imageModal");
if(modal)modal.classList.remove("show");
}
document.addEventListener("keydown",e=>{
if(e.key==="Escape")closeImage();
});
