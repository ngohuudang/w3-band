// mobile Menu
let header=document.querySelector('#header');
let mobileMenu=document.getElementById('mobile-menu');
let headerHeight=header.clientHeight;
mobileMenu.onclick=function(){
    let isClosed=header.clientHeight===headerHeight;
    if(isClosed){
        header.style.height='auto';
    }
    else{
        header.style.height=null;
    }
}
//tự động đóng khi click event khác
const menuItems=document.querySelectorAll('#nav li a[href*="#"]');
for(const menuItem of menuItems){
    
// vô hiệu hóa khi liên kết là #
    menuItem.onclick=function(event){
        let isParentMenu= this.nextElementSibling && this.nextElementSibling.classList.contains("subnav");
        if(isParentMenu) event.preventDefault();
        else header.style.height=null;
    }
}

document.addEventListener('click',function(){
    //header.style.height=null;
})
// by ticket
const buyBtns=document.querySelectorAll('.js-buy-ticket');
const modal =document.querySelector('.modal');
const modalClose=document.querySelector('.modal-close');
const modalContainer=document.querySelector('.modal-container');
for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', function(){
        modal.classList.add('open');
    });
};

modalClose.addEventListener('click',function(){
    modal.classList.remove('open');
});

modal.addEventListener('click',function(){
    modal.classList.remove('open');
});
// tránh bubble event
modalContainer.addEventListener('click',function(event){
    event.stopPropagation();
});