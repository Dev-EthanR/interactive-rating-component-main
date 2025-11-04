const rating = document.querySelectorAll('.review-content .numbers');

let ratingValue = 0;

rating.forEach(element => {
    element.addEventListener('click', (e) => {
       removeSelected()
       ratingValue = element.textContent;
       element.classList.add('selected')
       console.log(element)
    })
});

function removeSelected(){
    rating.forEach(el => {
        el.classList.remove('selected');
    })
}

function submit(){
    document.getElementById('main').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    const resultNumber = document.getElementById('reviewValue');
    resultNumber.textContent = ratingValue.toString();
}