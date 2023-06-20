//.book-item > img 태그 src 속성 초기화

//html -> js
const bookItems = document.getElementsByClassName("book-item");
let i = 0;
for(let bookItem of bookItems){
    const bookItemImg = bookItem.getElementsByTagName("img")[0]; //.book-item 하나씩 꺼내와서 img 태그 가져옴
    bookItemImg.src = books[i].img;    //data.js에서 img 값 가져와서 img 태그에 적용
    i++;
}