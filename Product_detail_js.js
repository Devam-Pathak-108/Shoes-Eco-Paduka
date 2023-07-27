img=localStorage.getItem('img')
Title=localStorage.getItem('Title')
MRP=localStorage.getItem('MRP')
description=localStorage.getItem('Description')
cnt=1

for (i of document.getElementsByClassName('car_img')){
    i.src=img.slice(0,img.length-5)+cnt+'.jpg';
    cnt++
}
document.getElementById('Title_shoe').innerHTML=Title
document.getElementById('price').innerHTML=MRP
document.getElementById('Description').innerHTML=description