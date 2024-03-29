function popUp(str) {
    var num = str.split(' ')[0];
    var monthNum = getTheMonth('', str.split(' ')[1]).monthNum + 1;
    var yy = str.split(' ')[2];
    document.querySelector('.date').value = `${num}/${monthNum}/${yy}`;
    document.querySelector('.name').value = 'Mthobisi';
    document.querySelector('.surname').value = 'Ngubane';
    document.querySelector('.title').value = 'Front end developer';
    document.querySelector('.popup').addEventListener('click', (event) => {
        var classList = [...event.target.classList];
        if (classList.includes('popup')) {
            event.target.style.display = 'none';
        }
    })
}


function addEvents() {
    var monthY = (document.getElementById('monthYear').textContent.split(',')[1]).trim();
    var monthM = (document.getElementById('monthYear').textContent.split(',')[0]).trim();

    var data = JSON.parse(localStorage.getItem('data'));
    var bombName = document.querySelector('.name').textContent;
    var bombSurname = document.querySelector('.surname').textContent;
  try {
        [...data].forEach(ele => {
            var name_and_surname = ele.FirstName + ' ' + ele.LastName;
            if (ele.FirstName === bombName && ele.LastName === bombSurname) {
                ele.date_booked.forEach(dt => {

                    var yr = (dt).split('-')[0];
                    var day = Number((dt).split('-')[2]);
                    var title = ele.title;
                    var dateMonthFrom = getTheMonth(Number((dt).split('-')[1] - 1)).month;
                    var collection = document.querySelectorAll('.' + dateMonthFrom);
                    //console.log(getTheMonth(Number((dt).split('-')[1])).month, monthM)
                    console.log(dateMonthFrom)
                    collection.forEach(ele => {
                        if (true) {
                            if (Number(ele.textContent) === day) {
                                console.log('date booked is : ' + ele.textContent);
                                ele.classList.add('booked');
                                ele.classList.remove('activedays')
                            } else {
                                console.log('failed')
                            }
                        }

                    })

                })
            }


        })
    } catch (error) {

    }
}


function rel() {
    //events
    var items = document.querySelectorAll('.number');

    items.forEach(ele => {
        ele.addEventListener('click', (ele) => {
            var list = [...ele.target.classList];
            console.log(list.includes('activedays'))
            var arr = list.filter(item => item !== 'today')
            var endof = ele.target.textContent + ' ' + arr[1] + ' ' + arr[2];

            document.querySelector('.popup').style.display = 'flex';
            console.log('clicked', endof, arr);
            if (list.includes('activedays')) {
                //display popup
                document.querySelector('.dateofbooking').innerHTML = endof;
                document.querySelector('.popup').style.display = 'flex';
                popUp(endof);
            }
        })
    });
};

function getTheMonth(num, str) {
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

    return {
        month: month[num],
        monthNum: month.indexOf(str)
    }
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
var month = getTheMonth(monthDay).month; //display month in word
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
    var currrentMonth = (new Date()).getMonth();
    var currrentYear = (new Date()).getFullYear();
    while (x != (lastDay + blanks)) {
        if (x >= firstDayPosition) {
            if (y === day && ddMonth == thisMonth && ddYear == thisYear) {
                $(`<div class='one-day'><p class='number today ${getTheMonth(ddMonth).month + " " + ddYear} activedays'>` + y + "</p></div>").appendTo(".days");
                y++;
            } else if ((new Date()).getFullYear() === ddYear) {
                console.log((new Date()).getFullYear(), ddYear)
                if ((new Date()).getMonth() === ddMonth) {
                    if (y < day) {
                        $(`<div class='one-day'><p class='number ${getTheMonth(ddMonth).month + " " + ddYear} pastday '>` + y + "</p></div>").appendTo(".days");
                        y++;
                    } else {
                        $(`<div class='one-day'><p class='number ${getTheMonth(ddMonth).month + " " + ddYear} activedays'>` + y + "</p></div>").appendTo(".days");
                        y++;
                    }

                } else if (currrentMonth > ddMonth) {
                    $(`<div class='one-day'><p class='number ${getTheMonth(ddMonth).month + " " + ddYear} pastday '>` + y + "</p></div>").appendTo(".days");
                    y++;
                } else {
                    $(`<div class='one-day'><p class='number ${getTheMonth(ddMonth).month + " " + ddYear} activedays'>` + y + "</p></div>").appendTo(".days");
                    y++;
                }
            } else {
                $(`<div class='one-day'><p class='number ${getTheMonth(ddMonth).month + " " + ddYear} activedays'>` + y + "</p></div>").appendTo(".days");
                y++;
            }
        } else {
            $("<div class='one-day'></div>").appendTo(".days");
            blanks++;
        }
        x++;
    }

    //
    addEvents();
}

$("#prev").click(function() {
    console.log('clicked')
    if (monthDay == 0) {
        monthDay = 11;
        year--;
    } else {
        monthDay = monthDay - 1;
    }
    month = getTheMonth(monthDay, year).month;
    $("#monthYear").html(month + ", " + year);
    $(".days").empty();
    displayDays(monthDay, year);
    rel();
    addEvents();
});
$("#next").click(function() {
    if (monthDay == 11) {
        monthDay = 0;
        year++;
    } else {
        monthDay = monthDay + 1;
    }
    month = getTheMonth(monthDay).month;
    $("#monthYear").html(month + ", " + year);
    $(".days").empty();
    displayDays(monthDay, year);
    rel();
    addEvents();
});

// document.getElementById('prev').addEventListener('click', () => {
//     console.log('clicked')
//     if (monthDay == 0) {
//         monthDay = 11;
//         year--;
//     } else {
//         monthDay = monthDay - 1;
//     }
//     month = getTheMonth(monthDay, year).month;
//     $("#monthYear").html(month + ", " + year);
//     $(".days").empty();
//     displayDays(monthDay, year);
//     rel();
//     addEvents();
// })








rel();

var storage = localStorage.getItem('data');
if (storage) {
    var data = JSON.parse(storage);
    addEvents();
    /*data.forEach(ele =>{
        console.log(ele)
        var obj = {};
        obj['Booking_date'] = ele['Booking date'];
        obj['name'] = ele.name;
        obj['surname'] = ele.surname;
        obj['title'] = ele.title;
       console.log(obj) 
    })*/
} else {
    var arg = [];
    //
    fetch('https://sheet2api.com/v1/H3Z4aFzjTNGS/boderless').then(res => res.json()).then(res => {
        if (res) {
            res.forEach(ele => {
                var obj = {};
                obj['booking_date'] = ele['booking_date'];
                obj['name'] = ele.name;
                obj['surname'] = ele.surname;
                obj['title'] = ele.title;

                arg.push(obj);
            });
            var parseData = JSON.stringify(arg);
            localStorage.setItem('storageData', parseData);
        } else {
            localStorage.setItem('storageData', parseData);
        }

    }).catch(err => { console.log(err) });
    addEvents();
};




addEvents();
let makechange = setInterval(() => {
    if (JSON.parse(localStorage.getItem('data')).length === 0 || JSON.parse(localStorage.getItem('data')).length === null) {
        addEvents();
    }
}, 5000);
