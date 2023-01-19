document.querySelector('.sub').addEventListener('click', () => {
    var name_and_surname = (document.querySelector('.e_name').value);
    var e_email = document.querySelector('.e_email').value;
    var company = document.querySelector('.e_com').value;
    var fromd = (document.querySelector('.fromd').value);
    var tod = (document.querySelector('.tod').value);
    var booked_date = (fromd + ' = ' + tod);
    console.log(name_and_surname, e_email, booked_date);

    async function sendnewdata() {
        var role = 'Front end Developer';
        var res = await axios.get(`https://calender-api-v2.herokuapp.com/newupdate/Mthobisi/Ngubane/${e_email}/${company}/${name_and_surname}/${role}/${booked_date}`)
        console.log(res, 'done')
    };
    sendnewdata();
    console.log('done');
});
// https: //calender-api-v2.herokuapp.com/