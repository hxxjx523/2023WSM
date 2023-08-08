//URL book에 해당하는 parameter 값 읽어오자(string)
let url = new URL(location.href);
let book = url.searchParams.get("book");
console.log(`book: ${book} type: ${typeof book}`);
//book이 null이면 책장으로 ㄱ
if(book === null){
    location.href('index.html');
}

//book값(string) -> bookId(number) 변환
let bookId = Number(book);
//let bookId = parseInt(book);
// let bookId = book * 1; //절대 쓰지마
console.log(`bookId: ${bookId} type: ${typeof bookId}`);

//books를 돌리면서 bookId(number)와 같은 id 값의 책 가져옴
let bookData;
for(let bookOne of books){
    if(bookId === bookOne.id){
        bookData = bookOne;
        break;
    }
}

//제목
let title = bookData.title;
let author = bookData.author;
let publisher = bookData.publisher;
let bookImage = bookData.img;
console.log(title, author, publisher, bookImage);

//html 요소 -> js 변수
const titleDiv = document.getElementsByClassName("title")[1];
const authorDiv = document.getElementsByClassName("author")[1];
const publisherDiv = document.getElementsByClassName("publisher")[1];
const bookImgDiv = document.getElementsByClassName("book-image")[0];

//js 변수.innerHTML()
titleDiv.innerHTML = title;
authorDiv.innerHTML = author;
publisherDiv.innerHTML = publisher;
bookImgDiv.innerHTML = `<img src="${bookImage}"/>`;

//읽은 날짜 : 임시로 오늘의 날짜 표시
//오늘의 날짜
//사람이 알아보는 형식으로 바꾸기
let date = new Date();
let dateString = moment().format("YYYY년 MM월 DD일");
//HTML -> js
const readDateDiv = document.getElementsByClassName("read-date")[1];
readDateDiv.innerHTML = dateString;