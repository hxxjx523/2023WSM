
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;

const datesContainerDiv = document.getElementsByClassName("dates container")[0];

const setCalendar = (year, month) => {
    //현재 월 제목에 표시
    //html -> js
    var titleMonthDiv = document.getElementsByClassName("month")[0];
    // = `${month}월`;
    titleMonthDiv.innerHTML = `${month}월`;

    // 1~해당 월의 마지막 날짜까지 날짜 div 만들자
    //1. //datesContainerDiv의 자식들(dataItemDiv) clear
    while (datesContainerDiv.firstChild) {
        datesContainerDiv.removeChild(datesContainerDiv.firstChild);
    }

    //2. //datesContainerDiv.innerHTML = "";
      
    //3. //datesContainerDiv.replaceChild();

    // 해당 월의 마지막 날짜
    var thisMonthLastDate = new Date(year, month + 1 - 1, 0).getDate();
    for(let date = 1; date <= thisMonthLastDate; date++){
        let dateItemDiv = document.createElement("div"); //<div></div>
        dateItemDiv.classList.add("date");
        dateItemDiv.classList.add("item");     //<div class="date item"></div>
        dateItemDiv.innerHTML = date;          //<div class="date item">date</div>
        //.dates.container에게 자식으로 붙이자
        datesContainerDiv.appendChild(dateItemDiv)

    }

    // 1일을 해당 요일로 이동
    let firstDateDiv = datesContainerDiv.querySelector(".date.item:nth-child(1)");
    //css: .date.item:nth-child(1) {grid-column-start: 6}
    //1일에 요일 구하자
    var firstDateDay = new Date(year, month - 1, 1).getDay();
    firstDateDiv.style.gridColumnStart = firstDateDay + 1;

    //토요일 파란색 글자
    let saturdayFirstDate = 7 - firstDateDay;
    let saturdayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${saturdayFirstDate})`);
    for (let saturdayDiv of saturdayDivs){
        //.date.item:nth-child(7n+2) {color:blue;}
        saturdayDiv.style.color = "blue";
    }
    
    //일요일 빨간색 글자
    let sundayFirstDate = (8 - firstDateDay) % 7;
    let sundayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${sundayFirstDate})`);
    for(let sundayDiv of sundayDivs){
        sundayDiv.style.color = "red";
    }
}

setCalendar(year, month);

// <: 이전달
const leftDiv = document.getElementsByClassName("left")[0];
leftDiv.onclick = () => { //onclick 함수x 시험에 나옴!
    month--;
    let prevMonth = new Date(year, month - 1);
    year = prevMonth.getFullYear();
    month = prevMonth.getMonth() + 1;
    setCalendar(year, month);
 } 
// leftDiv.addEventListener("click", () => console.log("이전달"));

// >: 이후달
let rightDiv = document.getElementsByClassName("right")[0];
rightDiv.onclick = () => {
    month++;
    if(month === 13){
        year++;
        month = 1;
    }
    setCalendar(year, month);
};

// month += 1;


    