var myBtn = document.querySelector("#myBtn");

// 當捲軸滑下至20px，出現btn
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
}

// 按下按扭至最上方
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
