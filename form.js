(function(){
    emailjs.init("N9-YEwXqYvpg1_vf-");
 })();
 document.getElementById('formDetail').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting the traditional way

    // Use EmailJS to send the form data
    emailjs.sendForm('service_dq2mwje', 'template_aacvkwv', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('submitted successfully!')
        }, function(error) {
            console.log('FAILED...', error);
            alert('failed to submit form')
        });
});