let coll = document.getElementsByClassName('Working-Process__box-button');
for(let i=0; i<coll.length; i++) {
    coll[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if(content.style.display == 'none') {
            content.style.display = 'flex';
        } else {
            content.style.display = 'none';
        }
    })
}

