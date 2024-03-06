function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let cell = document.getElementById('cell').value;
    let password = document.getElementById('password').value;
    let dob = document.getElementById('dob').value;
    let course = document.getElementById('course').value;
    let address = document.getElementById('address').value;

    let gender = document.querySelector('input[name="gender"]:checked').value;

    // Selecting Gender using Class Name
    /*  let gender = '';
    let genderElements = document.getElementsByName('gender');
    for (let i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            gender = genderElements[i].value;
        }
    } */

    let hobbyArray = [];
    let hobbyElements = document.querySelectorAll('input[name="hobby"]:checked');
    for (let i = 0; i < hobbyElements.length; i++) {
        hobbyArray.push(hobbyElements[i].value);
    }

    // Selecting Gender using Class Name
    /*let hobbyArray = [];
    let hobbyElements = document.getElementsByName('hobby');
    for (let i = 0; i < hobbyElements.length; i++) {
        if (hobbyElements[i].checked) {
            hobbyArray.push(hobbyElements[i].value);
        }
    } */

    let output = '';
    output += 'Name: ' + name + '\n';
    output += 'Email: ' + email + '\n';
    output += 'Cell: ' + cell + '\n';
    output += 'Password: ' + password + '\n';
    output += 'Gender: ' + gender + '\n';
    output += 'Date of Birth: ' + dob + '\n';
    output += 'Course: ' + course + '\n';
    output += 'Hobby: ' + hobbyArray.join(', ') + '\n';
    output += 'Address: ' + address + '\n';

    let newWindow = window.open('', '_blank');
    newWindow.document.write('<pre><h3>' + output + '</h3></pre>');
}

let regForm = document.getElementById('regForm');
regForm.addEventListener('submit', submitForm);