function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const formData = {
        name: name,
        email: email,
        message: message
    };

    fetch('https://your-server-endpoint.com/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Form data submitted successfully:', data);
        // Optionally, you can redirect the user or show a success message
    })
    .catch(error => {
        console.error('Error submitting form data:', error);
        // Handle errors or show an error message to the user
    });
}
