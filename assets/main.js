

var dropdown = document.querySelector('.desktop-header');

var pushhead = document.querySelector('.mobile-header-1');

var pushbody = document.querySelector('main.content');

document.getElementById("toggler").addEventListener('click', function(){
    dropdown.classList.toggle('open');
    pushhead.classList.toggle('push');
    pushbody.classList.toggle('push');
})