const btn = document.querySelectorAll('.card__button');
console.log(btn);

btn.forEach(function(button) {
    button.addEventListener('click', function() {
        this.classList.toggle('active');

        //close other buttons
        if(button.classList.contains('active')) {
            btn.forEach(function(button) {
                button.classList.remove('active');
            }); //else
            button.classList.toggle('active');
        }
    });
});