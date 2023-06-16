function sayHello(){
    alert("안녕");
}

// sayHello();

// 1.html -> js
// 햄버거메뉴 -> navToggleDiv
// 햄버거메뉴 i -> navToggleI
// .nav-list -> navListUl
// const navToggleDiv = document.getElementById("nav_toggle");
const navToggleI = nav_toggle.getElementByTagName("i")[0];
const navListUl = document.getElementsByClassName("nav-list")[0];

// 2. Event Handling    
// 햄버거메뉴 클릭하면 헴버거메뉴 i "bi bi-list" <-> x "bi bi-x-lg"
// 햄버거메뉴 클릭하면 ,nav-list에 show-menu 보여주기 <-> 안 보여주기
nav_toggle.onclick = () => alert("안녕"); //ok
//nav_toggle.onclick = alert("안녕");       //not ok 시험에 나옴
 
//----------------------------------------------------
//html -> js
//id
// const navToggleDiv = document.getElementById("nav_toggle");
// nav_toggle //js 변수 규칙은 지켜져야 함


//class
//const navToggleDiv = document.getElementsByClassName("nav-toggle")[0];

//tag
//const navToggleDiv = document.getElementsByTagName("div")[0];

//querySelector, querySelectorAll 
// const navToggleDiv = document.querySelector("#nav_toggle");
// const navToggleDiv = document.querySelectorAll(".nav-toggle");
// const navToggleDiv = document.querySelectorAll("div")[0];
