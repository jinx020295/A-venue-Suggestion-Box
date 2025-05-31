document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const anonymousCheckbox = document.getElementById('anonymous');
    const formMessageDiv = document.getElementById('form-message');
    const currentYearSpan = document.getElementById('currentYear');

    // Set current year in footer
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Handle anonymous checkbox
    if (anonymousCheckbox) {
        anonymousCheckbox.addEventListener('change', function() {
            if (this.checked) {
                nameInput.value = '';
                emailInput.value = '';
                nameInput.disabled = true;
                emailInput.disabled = true;
                nameInput.required = false; // No longer required if anonymous
                emailInput.required = false; // No longer required if anonymous
            } else {
                nameInput.disabled = false;
                emailInput.disabled = false;
                // You might want to re-add 'required' if it's not optional by default when not anonymous
            }
        });
    }

    // Handle form submission
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(event) 
        
                                      // Prevent default HTML form submission

            // --- IMPORTANT: Backend Integration Point ---
            // To actually send the data, you'll need to integrate with a backend
            // or a third-party service like Formspree, Netlify Forms, etc.
            //
            // Example using Formspree:
            // 1. Create a Formspree endpoint.
            // 2. Set your HTML form's `action` attribute to your Formspree URL
            //    and `method="POST"`.
            // 3. You can then remove this `event.preventDefault()` and the `fetch`
            //    block below if you let Formspree handle the redirect, or use
            //    fetch to submit programmatically for a smoother UX.

            const formData = new FormData(feedbackForm);
            const data = Object.fromEntries(formData.entries());

            // For demonstration, we'll just log to console and show a message.
            // Replace this with your actual submission logic.
            console.log('Form Data Submitted:', data);

            // Display a success message (or error)
            formMessageDiv.textContent = 'Thank you for your suggestion!';
            formMessageDiv.className = 'form-message success'; // Add success class
            feedbackForm.reset(); // Clear the form

            // Optionally, re-enable name/email if they were disabled by anonymity
            if (anonymousCheckbox && anonymousCheckbox.checked) {
                nameInput.disabled = true;
                emailInput.disabled = true;
            } else {
                nameInput.disabled = false;
                emailInput.disabled = false;
            }


            // If using fetch to submit to a service like Formspree or your own backend:
            /*
            fetch('https://formspree.io/f/myzwrvjn', { // Replace with your Formspree or backend URL
                method: 'POST',
                body: formData, // or JSON.stringify(data) if your endpoint expects JSON
                headers: {
                    'Accept': 'application/json' // If your endpoint returns JSON
                    // 'Content-Type': 'application/json' // If sending JSON
                }
            })
            .then(response => {
                if (response.ok) {
                    formMessageDiv.textContent = 'Thank you! Your suggestion has been sent.';
                    formMessageDiv.className = 'form-message success';
                    feedbackForm.reset();
                    // Handle anonymous checkbox state again after reset if needed
                    if (anonymousCheckbox) {
                        nameInput.disabled = anonymousCheckbox.checked;
                        emailInput.disabled = anonymousCheckbox.checked;
                    }
                } else {
                    // Try to get an error message from the server response
                    response.json().then(data => {
                        formMessageDiv.textContent = data.error || 'Oops! Something went wrong. Please try again.';
                        formMessageDiv.className = 'form-message error';
                    }).catch(() => {
                        formMessageDiv.textContent = 'Oops! Something went wrong. Please try again.';
                        formMessageDiv.className = 'form-message error';
                    });
                }
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                formMessageDiv.textContent = 'There was an error sending your suggestion. Please check your connection.';
                formMessageDiv.className = 'form-message error';
            });
            */
        });
    }

    // Example: If you have a link to the main cafe site
    const cafeMainSiteLink = document.getElementById('cafeMainSiteLink');
    if (cafeMainSiteLink) {
        // Replace '#' with the actual URL of your main cafe website
        cafeMainSiteLink.href = "https://example.com/avenue-cafe"; // Placeholder
    }
});
