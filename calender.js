
function createDayHtml(day){
    var li = document.createElement('li');
    var actualDay = day.getDate();
    console.log(actualDay);
    var date = new Date();
    if(date.getDate() == actualDay){
        console.log('true');
        li.classList.add('active');
    }
    
    li.textContent = actualDay;
    document.querySelector('.days').appendChild(li)
}

function getAllDaysInMonth(year, month) {
    const date = new Date(year, month, 1);
  
    const dates = [];
  
    while (date.getMonth() === month) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
  
    return dates;
  }

const date = new Date();

var days = getAllDaysInMonth(date.getFullYear(), date.getMonth());

days.forEach(ele =>{
    createDayHtml(ele);
});

