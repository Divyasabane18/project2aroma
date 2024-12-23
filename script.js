window.addEventListener('scroll' , function(){
    var header = document.getElementById('header');
    if(window.scrollY > 50){
        header.style.backgroundColor ="#dedddc";
    }
    else{
        header.style.backgroundColor="white";
    }
} )