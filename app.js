const btn =  document.querySelector('.btn');
const ratings = document.querySelectorAll('.circular-rating');
const thanksContainer = document.querySelector('.thanks-container');
const mainContainer = document.querySelector('.container');
const review = document.querySelector('.selected-review');

let selectedRating = null;

ratings.forEach(ratingsClicked => {
    ratingsClicked.addEventListener('click', ()=> {
       const clickedRating = ratingsClicked.value;
        // console.log(`User selected: ${clickedRating}`);
        ratings.forEach(btnHighlight => {
            btnHighlight.classList.remove('circular-rating-clicked')
        });
        ratingsClicked.classList.add('circular-rating-clicked');

        selectedRating = clickedRating
        // console.log(clickedRating)
    });
   
});

btn.addEventListener('click', ()=>{
    if(selectedRating !== null) {
        review.textContent = `You selected ${selectedRating} out of 5`
        setTimeout(()=>{
            mainContainer.classList.add('container-hidden');
            thanksContainer.classList.add('thanks-container-visible');
        }, 250);
       
    }
    
})


