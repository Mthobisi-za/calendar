document.querySelector('.popup').addEventListener('click', (ele) => {

    if ([...ele.target.classList][0] == 'popup') {
        document.querySelector('.popup').style.display = 'none';
    }
})