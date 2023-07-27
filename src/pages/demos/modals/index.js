// Modal open & close functions

function openModal(modalId) {
    const modalDiv = document.getElementById('modal-containers');
    const modal = document.getElementById(modalId);
    modalDiv.style.display = 'block';
    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modalDiv = document.getElementById('modal-containers');
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    modalDiv.style.display = 'none';
}

document.querySelectorAll('[data-modal]').forEach((button) => {
    button.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        openModal(modalId);
    });
});

document.querySelectorAll('[data-modal]').forEach((button) => {
    button.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        closeModal(modalId);
    });
});

document.addEventListener('click', function (event) {
    const modalDiv = document.getElementById('modal-containers');
    const openButtons = Array.from(document.querySelectorAll('[data-modal]'));
    const openButtonIds = openButtons.map((button) => button.id);

    openButtons.forEach((button) => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        if (
            !modal.contains(event.target) &&
            !openButtonIds.includes(event.target.id) &&
            modal.style.display !== 'none'
        ) {
            modal.style.display = 'none';
            modalDiv.style.display = 'none';
        }
    });
});

const openModalIds = [
    'basic-modal',
    'confirm-modal',
    'form-modal',
    'location-modal',
    'no-service-modal',
    'autopay-modal',
];

openModalIds.forEach((id) => {
    const openButton = document.querySelector(`[data-modal="${id}"]`);
    if (openButton) {
        openButton.addEventListener('click', () => openModal(id));
    }
});

const closeModalIds = ['basic-modal', 'location-modal', 'autopay-modal'];

closeModalIds.forEach((id) => {
    const closeButton = document.querySelector(`[data-modal-close="${id}"]`);
    if (closeButton) {
        closeButton.addEventListener('click', () => closeModal(id));
    }
});

// Form Validation

function validateForm() {
    const form = document.getElementById('myForm');
    const inputs = form.getElementsByTagName('input');
    let isValid = true;

    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        if (input.hasAttribute('required') && input.value === '') {
            isValid = false;
            displayErrorMessage(input, 'Field required');
        } else if (input.hasAttribute('pattern') && !input.checkValidity()) {
            isValid = false;
            displayErrorMessage(input, 'Invalid input');
        } else {
            removeValidationMessage(input);
        }
    }
    return isValid;
}

function displayErrorMessage(input, message) {
    removeValidationMessage(input);

    const errorMessage = document.createElement('div');
    errorMessage.className = 'validation-message';
    errorMessage.textContent = message;
    input.parentNode.insertBefore(errorMessage, input.nextSibling);
}

function removeValidationMessage(input) {
    const nextSibling = input.nextSibling;
    if (nextSibling && nextSibling.className === 'validation-message') {
        input.parentNode.removeChild(nextSibling);
    }
}

document.getElementById('formValidationButton').addEventListener('click', validateForm);
