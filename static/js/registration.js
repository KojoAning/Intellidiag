$(document).ready(function () {
    // Handle registration form submission
    $('.login').click(function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get CSRF token from cookie
        var csrftoken = getCookie('csrftoken');

        // Get form data
        var formData = {
            'email': $('input[name=email]').val(),
            'username': $('input[name=username]').val(),
            'password1': $('input[name=password1]').val(),
            'password2': $('input[name=password2]').val()
        };

        // Send AJAX request for registration
        $.ajax({
            type: 'POST',
            url: '/accounts/user_register/',  // Assuming the URL for the new registration view is '/accounts/register/'
            headers: {
                'X-CSRFToken': csrftoken
            },
            data: formData,
            success: function (response) {
                if (response.status === 'success') {
                    // Display success message
                    $('#success-message').text(response.message);

                    // Clear input fields
                    $('input[type="text"], input[type="password"]').val('');

                    // Animate the redirection to the home screen
                    $('body').fadeOut(1000, function () {
                        window.location.href = response.redirect_url;  // Redirect to the home screen
                    });
                }
            },
            error: function (xhr, status, error) {
                // Handle AJAX errors
                console.error(xhr.responseText);  // Log error response for debugging

                // Parse the error response JSON
                var response = JSON.parse(xhr.responseText);

                // Check if the error response contains errors
                if (response.status === 'error' && response.errors) {
                    // Iterate through the errors
                    for (var fieldName in response.errors) {
                        if (response.errors.hasOwnProperty(fieldName)) {
                            // Get the error messages for the field
                            var fieldErrors = response.errors[fieldName];

                            // Construct error message string
                            var errorMessage = "";
                            for (var i = 0; i < fieldErrors.length; i++) {
                                errorMessage += fieldErrors[i].message + " "; // Append error message to the string
                            }

                            // Update the corresponding <span> element with the error message
                            $('#' + fieldName + '-error').text(errorMessage.trim());
                        }
                    }
                }
            }
        });
    });

    // Handle login form submission
    $('#login-button').click(function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get the CSRF token
        var csrftoken = getCookie('csrftoken');

        // Get the values from the form inputs
        var email = $('#id_email').val();
        var password = $('#id_password').val();

        // Perform basic validation (optional)
        if (email === '' || password === '') {
            $('#login-message').text('Please enter both email and password.');
            return;
        }

        // Send AJAX request
        $.ajax({
            url: '/accounts/user_login/', // URL to the login view
            type: 'POST',
            headers: {
                'X-CSRFToken': csrftoken
            },
            data: {
                'email': email,
                'password': password
            },
            success: function (response) {
                if (response.success) {
                    $('#login-message').text('Login successful! Redirecting...');
                    // Redirect or perform actions on successful login
                    window.location.href = '/dashboard'; // Replace with your redirect URL
                } else {
                    $('#login-message').text('Login failed: ' + response.message);
                }
            },
            error: function () {
                $('#login-message').text('An error occurred during login. Please try again.');
            }
        });
    });
});

// Function to get CSRF token from cookie
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
