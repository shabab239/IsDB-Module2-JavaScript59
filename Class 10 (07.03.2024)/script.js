function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let cell = document.getElementById('cell').value;
    let password = document.getElementById('password').value;
    let dob = document.getElementById('dob').value;
    let course = document.getElementById('course').value;
    let address = document.getElementById('address').value;

    if(name == '') {
        alert('Name cannot be empty');
        return;
    } else if (name.length < 3) {
        alert('Name must contain at least 3 characters');
        return;
    }

    let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email == '') {
        alert('Email cannot be empty');
        return;
    } else if (!emailRegEx.test(email)) {
        alert('Invalid Email');
        return;
    }

    if(cell == '') {
        alert('Cell cannot be empty');
        return;
    } else if (cell.length != 11) {
        alert('Cell must have 11 digits');
        return;
    } else if(isNaN(cell)){
        alert('Digits Only');
        return;
    }

    if(password == '') {
        alert('Password cannot be empty');
        return;
    } else if (password.length < 6) {
        alert('Password must contain at least 6 characters');
        return;
    }


    let gender = document.querySelector('input[name="gender"]:checked');

    if(gender == null) {
        alert('Please Select Gender');
        return;
    }

    // Selecting Gender using Class Name
    /*  let gender = '';
    let genderElements = document.getElementsByName('gender');
    for (let i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            gender = genderElements[i].value;
        }
    } */

        
    if(course == '') {
        alert('Please select course');
        return;
    }

    if(address == '') {
        alert('Address cannot be empty');
        return;
    }

    let hobbyArray = [];
    let hobbyElements = document.querySelectorAll('input[name="hobby"]:checked');
    if(hobbyElements.length < 1){
        alert('Please select at least 1 hobby');
        return;
    }
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
    output += 'Gender: ' + gender.value + '\n';
    output += 'Date of Birth: ' + dob + '\n';
    output += 'Course: ' + course + '\n';
    output += 'Hobby: ' + hobbyArray.join(', ') + '\n';
    output += 'Address: ' + address + '\n';

    let newWindow = window.open('', '_blank');
    newWindow.document.write('<pre><h3>' + output + '</h3></pre>');
}

let regForm = document.getElementById('regForm');
regForm.addEventListener('submit', submitForm);