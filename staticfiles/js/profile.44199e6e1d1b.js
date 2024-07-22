// Get all form steps
const formSteps = document.querySelectorAll('.form-step');

// Get all next and previous buttons
const nextBtns = document.querySelectorAll('.next');
const prevBtns = document.querySelectorAll('.prev');

// Set initial step
let currentStep = 0;

// Show the first step
showStep(currentStep);

// Next button click event
nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        currentStep++;
        showStep(currentStep);
    });
});

// Previous button click event
prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        currentStep--;
        showStep(currentStep);
    });
});

// Function to show or hide form steps
function showStep(n) {
    // Hide all steps
    formSteps.forEach(step => {
        step.classList.remove('active');
    });

    // Show the current step
    formSteps[n].classList.add('active');

    // Update the previous button visibility
    updatePrevBtnVisibility(n);

    // Update the next button text
    updateNextBtnText(n);
}

// Function to update the previous button visibility
function updatePrevBtnVisibility(n) {
    prevBtns.forEach(btn => {
        if (n === 0) {
            btn.style.display = 'none';
        } else {
            btn.style.display = 'inline-block';
        }
    });
}

// Function to update the next button text
function updateNextBtnText(n) {
    const lastStep = formSteps.length - 1;

    nextBtns.forEach(btn => {
        if (n === lastStep) {
            btn.textContent = 'Save';
        } else {
            btn.textContent = 'Next';
        }
    });
}