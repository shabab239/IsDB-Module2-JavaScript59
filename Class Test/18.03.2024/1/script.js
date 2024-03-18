function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let contact = document.getElementById('contact').value;
    let remarks = document.getElementById('remarks').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let courseElementArray = document.querySelectorAll('input[name="course"]:checked');
    let location = document.getElementById('location').value;

    let courseValueArray = [];
    courseElementArray.forEach(
        function (course) {
            courseValueArray.push(course.value);
        }
    )

/*     if (name == '') {
        document.getElementById('error-name').innerHTML = 'Required';
        document.getElementById('error-name').style.display = 'block';
    } else if(name.length > 50) {
        document.getElementById('error-name').innerHTML = 'Required';
        document.getElementById('error-name').style.display = 'block';
    } */

    let output = 'Name: ' + name + '\n';
    output += 'Contact: ' + contact + '\n';
    output += 'remarks: ' + remarks + '\n';
    output += 'gender: ' + gender + '\n';
    output += 'Course(s): ' + courseValueArray.join(', ') + '\n';
    output += 'location: ' + location + '\n';

    let newWindow = window.open('', '_blank');
    newWindow.document.write('<pre><h1>' + output + '</pre><h1>');

}

let dataForm = document.getElementById('dataForm');
dataForm.addEventListener('submit', submitForm);

/* function setError(element, message){
    
} */