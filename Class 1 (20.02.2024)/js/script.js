function setRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    // alert('rgb(' + r + ',' + g + ',' + b + ')');

    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

function takeName() {
    let name = prompt('Sup Mate?');
    let welcomeModal = new bootstrap.Modal(document.getElementById('welcome-modal'), {});
    document.getElementById('welcome-modal-body').innerText = name;
    welcomeModal.show();
}


// document.write('<h1>HOLY SHOT MATE LOL</h1>');