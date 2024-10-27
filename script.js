function toggleForm() {
    const form = document.getElementById('form-section');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
    if (form.style.display === 'block') {
        populateForm();
    }
}

function populateForm() {
    const profile = JSON.parse(localStorage.getItem('profile')) || {};
    document.getElementById('name').value = profile.name || 'Nama Anda';
    document.getElementById('role').value = profile.role || 'Front End Designer';
    document.getElementById('availability').value = profile.availability || 'Full Time';
    document.getElementById('age').value = profile.age || '19';
    document.getElementById('location').value = profile.location || 'Jakarta';
    document.getElementById('yoe').value = profile.yoe || '2';
    document.getElementById('email').value = profile.email || 'email@gmail.com';
}

function saveProfile() {
    const profile = {
        name: document.getElementById('name').value,
        role: document.getElementById('role').value,
        availability: document.getElementById('availability').value,
        age: document.getElementById('age').value,
        location: document.getElementById('location').value,
        yoe: document.getElementById('yoe').value,
        email: document.getElementById('email').value
    };
    localStorage.setItem('profile', JSON.stringify(profile));
    updateProfileDisplay();
    toggleForm();
}

function updateProfileDisplay() {
    const profile = JSON.parse(localStorage.getItem('profile')) || {};
    document.getElementById('name-display').textContent = profile.name || 'Nama Anda';
    document.getElementById('role-display').textContent = profile.role || 'Front End Designer';
    document.getElementById('availability-display').textContent = profile.availability || 'Full Time';
    document.getElementById('age-display').textContent = profile.age || '19';
    document.getElementById('location-display').textContent = profile.location || 'Jakarta';
    document.getElementById('yoe-display').textContent = profile.yoe || '2';
    document.getElementById('email-display').textContent = profile.email || 'email@gmail.com';
}

document.addEventListener('DOMContentLoaded', updateProfileDisplay);