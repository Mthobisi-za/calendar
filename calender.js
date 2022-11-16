function popUp(){
    document.querySelector('.popup').addEventListener('click', (event)=>{
        var classList = [...event.target.classList];
        if(classList.includes('popup')){
            event.target.style.display = 'none';
        }
    })
}


function addEvents(){
    var data = JSON.parse(localStorage.getItem('storageData'));
   
    var name = 'Mthobisi  Ngubane';
    [...data].forEach(ele =>{
        var name_and_surname = ele.name + ' ' + ele.surname;
        var dateMonth = getTheMonth((ele.Booking_date).split('/')[1] - 1);
        var yr = (ele.Booking_date).split('/')[2];
        var day = (ele.Booking_date).split('/')[0];
        var title = ele.title;
        var collection = document.querySelectorAll('.' + dateMonth);
        collection.forEach(ele =>{
            if( Number(ele.textContent)== day && name_and_surname == name) {
                console.log('date booked is : ' + ele.textContent);
                ele.classList.add('booked');
                ele.classList.remove('activedays')
            }
        })
    })
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
            console.log('clicked', endof, arr);
            if(list.includes('activedays')){
                //display popup
                document.querySelector('.dateofbooking').innerHTML = endof;
                document.querySelector('.popup').style.display = 'flex';
                popUp(endof);
            }
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
    var currrentMonth = (new Date()).getMonth();
    var currrentYear = (new Date()).getFullYear();
    while (x != (lastDay + blanks)) {
        if (x >= firstDayPosition) {
            if (y === day && ddMonth == thisMonth && ddYear == thisYear) {
                $(`<div class='one-day'><p class='number today ${getTheMonth(ddMonth) + " " + ddYear} activedays'>` + y + "</p></div>").appendTo(".days");
                y++;
            } else if( (new Date()).getFullYear() === ddYear){
                console.log((new Date()).getFullYear(), ddYear)
               if((new Date()).getMonth() === ddMonth ){
                   if(y < day){
                      $(`<div class='one-day'><p class='number ${getTheMonth(ddMonth) + " " + ddYear} pastday '>` + y + "</p></div>").appendTo(".days");
                    y++; 
                   } else{
                    $(`<div class='one-day'><p class='number ${getTheMonth(ddMonth) + " " + ddYear} activedays'>` + y + "</p></div>").appendTo(".days");
                    y++;
                   }
                    
                }else if(currrentMonth > ddMonth){
                     $(`<div class='one-day'><p class='number ${getTheMonth(ddMonth) + " " + ddYear} pastday '>` + y + "</p></div>").appendTo(".days");
                     y++;
                }else{
                    $(`<div class='one-day'><p class='number ${getTheMonth(ddMonth) + " " + ddYear} activedays'>` + y + "</p></div>").appendTo(".days");
                    y++;
                }
            } else {
                $(`<div class='one-day'><p class='number ${getTheMonth(ddMonth) + " " + ddYear} activedays'>` + y + "</p></div>").appendTo(".days");
                y++;
            }
        } else {
            $("<div class='one-day'></div>").appendTo(".days");
            blanks++;
        }
        x++;
    }
   
    //
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
    addEvents();
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
    addEvents();
});








rel();

var storage = localStorage.getItem('storageData');
if(storage){
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
}else{
    var arg = [];
    //
    fetch('https://sheet2api.com/v1/H3Z4aFzjTNGS/boderless').then(res => res.json()).then(res =>{
        if(res){
            res.forEach(ele =>{
            var obj = {};
            obj['Booking_date'] = ele['Booking date'];
            obj['name'] = ele.name;
            obj['surname'] = ele.surname;
            obj['title'] = ele.title;

            arg.push(obj);
        });
        var parseData = JSON.stringify(arg);
        localStorage.setItem('storageData', parseData);
        }else{
            localStorage.setItem('storageData', parseData);
        }
        
    }).catch(err =>{ console.log(err)});
    addEvents();
};




addEvents();