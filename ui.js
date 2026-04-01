// UI layer functions

// Function to create a button
function createButton(label, onClick) {
    const button = document.createElement('button');
    button.textContent = label;
    button.onclick = onClick;
    return button;
}

// Function to create a div with text
function createTextDiv(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div;
}

// Function to create a dropdown
function createDropdown(options) {
    const select = document.createElement('select');
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.value;
        opt.textContent = option.text;
        select.appendChild(opt);
    });
    return select;
}