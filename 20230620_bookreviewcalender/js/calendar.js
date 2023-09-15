
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;

const datesContainerDiv = document.getElementsByClassName("dates container")[0];

// <: 이전달
// month -= 1;
// >: 이후달
// month += 1;

const setCalendar = (year, month) => {
    //현재 월 제목에 표시
    //html -> js
    var titleMonthDiv = document.getElementsByClassName("month")[0];
    // = `${month}월`;
    titleMonthDiv.innerHTML = `${month}월`;

    // 1~해당 월의 마지막 날짜까지 날짜 div 만들자
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



    // 해당 월의 시작 요일
    var thisMonthFirstDay = new Date(year, month - 1, 1).getDay(); //0: sun ... 5: fri 6: sat
    
    console.log(thisMonthLastDate, thisMonthFirstDay);
}

setCalendar(year, month);
    