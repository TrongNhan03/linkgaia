let btn=document.getElementsByTagName('button')[0]
let moretab=document.getElementById('more')
btn.innerText='More'
btn.onclick=()=> {
    if(btn.innerText=='More') {
        moretab.style.display='flex';
        btn.innerText='Hide';
    }
    else {
        moretab.style.display='none';
        btn.innerText='More';
    }
}