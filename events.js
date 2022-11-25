document.querySelector('.popupsucess').addEventListener('click', () => {
    document.querySelector('.popupsucess').style.display = 'none'
});



function sendData() {
    alert('sending data')
    var data = {
        name: document.querySelector('.name').value,
        surname: document.querySelector('.surname').value,
        booking_date: document.querySelector('.date').value,
        client_name: document.querySelector('.cname').value,
        client_email: document.querySelector('.cemail').value,
        title: document.querySelector('.title').value
    }
    console.log(data);

    axios.post('https://sheetdb.io/api/v1/scd4dbpmg7sze', {
        "data": data
    }).then(response => {
        console.log(response.data.created);
        if (response.data.created === 1) {
            document.querySelector('.popup').style.display = 'none';
            document.querySelector('.popupsucess').style.display = 'flex';

            setTimeout(() => {
                document.querySelector('.popupsucess').style.display = 'none';
                localStorage.removeItem('storageData');
                window.location.reload();
            }, 1000);

        }
    });
}


sheetid = '1bG5dNlz_bqcFzK0Pes1o8HaRvno6b7drZcotuUV0VLE'; //'https://docs.google.com/spreadsheets/d/1bG5dNlz_bqcFzK0Pes1o8HaRvno6b7drZcotuUV0VLE/edit?usp=sharing'






var fromDate = document.querySelector('#from');
var toDate = document.querySelector('#to');