var h,mn,s,ms,bs,bt,kj,k
h=0
mn=0
s=0
ms=0
kj=document.getElementsByTagName('span')
bs = document.getElementsByClassName('start')
bt = document.getElementsByClassName('stop')

function update_chrono(){
    ms++
    kj[3].innerHTML= ms + ' mili seconde'
    if(ms==100)
    {
        ms=0
        s++
        kj[2].innerHTML= s + ' seconde'
        if(s==60){
            s=0
            mn++
            kj[1].innerHTML= mn + ' min'
            if(mn==60){
                mn=0
                h++
                kj[0].innerHTML= h + ' h'
            }
        }
    }

}

function start(){
k = setInterval(update_chrono,10)
bs.disabled ='true'
}
function stop(){
    clearInterval(k);
}
function reset(){
    ms=0
    s=0
    min=0
    h=0
    kj[3].innerHTML= ms + ' mili seconde'
    kj[2].innerHTML= ms + ' seconde'
    kj[1].innerHTML= ms + ' min'
    kj[0].innerHTML= ms + ' h'
}