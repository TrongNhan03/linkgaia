let btn=document.getElementById('btnMore')
let btnconfirm=document.getElementById('confirm')
let moretab=document.getElementById('more')
let popular=document.getElementById('popular')
let inputpass=document.getElementsByTagName('input')[0]

inputpass.focus()
btnconfirm.onclick=()=>{
    if(inputpass.value == 'kythuat123') {
        document.getElementById('permission').style.display='none'
        btn.style.display='block';
        popular.style.display='flex';
        document.getElementsByTagName('p')[0].style.display='block'
        document.getElementsByTagName('p')[1].style.display='block'
        document.getElementsByTagName('body')[0].addEventListener('keydown',(e)=>{
            if(e.key=='1') {
                document.querySelectorAll('#popular>a')[0].click();
            }
            if(e.key=='2') {
                document.querySelectorAll('#popular>a')[1].click();
            }
        })
    }
    else {
        alert('Sai mật khẩu')
    }
}
inputpass.addEventListener('keydown',(e)=>{
    if(e.key=='Enter') {
        btnconfirm.click();
    }
})

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
