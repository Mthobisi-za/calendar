function rel() {
    //events
    var items = document.querySelectorAll('.number');

    items.forEach(ele => {
        ele.addEventListener('click', (ele) => {
            var list = [...ele.target.classList];
            var arr = list.filter(item => item !== 'today')
            var endof = ele.target.textContent + ' ' + arr[1] + ' ' + arr[2];

            document.querySelector('.popup').style.display = 'flex';
            console.log('clicked', endof, arr);
        })
    });
};

function getTheMonth(num) {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    return month[num];
}

//Get This Month
function daysInMonth(dimMonth, dimYear) {
    return new Date(dimYear, dimMonth, 0).getDate();
}
var today = new Date();
var dayPosition = today.getDay(); //display the position of day in week mon-sun (0-6)
var day = today.getDate(); // display day
var monthDay = today.getMonth(); //display month in number
var thisMonth = today.getMonth();
var month = getTheMonth(monthDay); //display month in word
var year = today.getFullYear(); //display year
var thisYear = today.getFullYear();
$("#monthYear").html(month + ", " + year);
displayDays(monthDay, year);
//+ 
function displayDays(ddMonth, ddYear) {
    var x = 0;
    var y = 1;
    var blanks = 0;
    var firstDay = new Date(ddYear, ddMonth, 1);
    var firstDayPosition = firstDay.getDay();
    var lastDay = daysInMonth(ddMonth + 1, ddYear); //get last day of month   
    while (x != (lastDay + blanks)) {
        if (x >= firstDayPosition) {
            if (y === day && ddMonth == thisMonth && ddYear == thisYear) {
                $(`<div class='one-day'><p class='number today ${getTheMonth(ddMonth) + " " + ddYear} '>` + y + "</p></div>").appendTo(".days");
                y++;
            } else {
                $(`<div class='one-day'><p class='number ${getTheMonth(ddMonth) + " " + ddYear}'>` + y + "</p></div>").appendTo(".days");
                y++;
            }
        } else {
            $("<div class='one-day'></div>").appendTo(".days");
            blanks++;
        }
        x++;
    }
}

$("#prev").click(function() {
    if (monthDay == 0) {
        monthDay = 11;
        year--;
    } else {
        monthDay = monthDay - 1;
    }
    month = getTheMonth(monthDay, year);
    $("#monthYear").html(month + ", " + year);
    $(".days").empty();
    displayDays(monthDay, year);
    rel();
});
$("#next").click(function() {
    if (monthDay == 11) {
        monthDay = 0;
        year++;
    } else {
        monthDay = monthDay + 1;
    }
    month = getTheMonth(monthDay);
    $("#monthYear").html(month + ", " + year);
    $(".days").empty();
    displayDays(monthDay, year);
    rel();
});








rel();