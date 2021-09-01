const dropdownArr = document.querySelectorAll(".dropdown");

function dropdownActivate(element) {
    element.classList.toggle("hidden");
};

for(let dropdown of dropdownArr) {
    dropdown.addEventListener('click', () => {
        const response = dropdown.children[1];
        response.classList.toggle('hidden');

        const question = dropdown.children[0].children[0];
        question.classList.toggle('question-active');

        const toggle = dropdown.children[0].children[1];
        toggle.classList.toggle('toggle-active');
    })
};

