function clicked(thi){
    
    localStorage.setItem('img',thi.children[0].children[0].getAttribute('src'));
    localStorage.setItem('Title',thi.children[1].children[0].children[0].innerHTML);
    localStorage.setItem('MRP',thi.children[1].children[0].children[2].innerHTML);
    localStorage.setItem('Description',thi.children[2].innerHTML);
    location.href="Product_detail.html";
}