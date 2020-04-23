var bars = document.querySelector('.fas')
var animation = document.querySelector('.menu')
var i = 0+1
    bars.addEventListener('click', function(){
        if(i%2==0){
            animation.classList.remove('menu-on')
            animation.classList.add('menu-off')
            console.log("No")
        }
        else{
            console.log("Sí")
            animation.classList.add('menu-on')
            animation.classList.remove('menu-off')
        }
        i=i+1
    })