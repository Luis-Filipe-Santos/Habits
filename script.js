const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button');

button.addEventListener('click',add);

function add() {
    alert("hello world!");
}

// const data = {
//     run: ['01-23', '01-24', '01-25', '01-26','01-27', '01-28', '01-29', '01-30', '01-31'],
//     water: ['01-23', '01-24', '01-25', '01-26','01-27', '01-28', '01-29', '01-30', '01-31'],
//     food: ['01-23', '01-24', '01-25', '01-26','01-27', '01-28', '01-29', '01-30', '01-31'],
//     bible: ['01-23', '01-24', '01-25', '01-26','01-27', '01-28', '01-29', '01-30', '01-31'],
//     stude: ['01-23', '01-24', '01-25', '01-26','01-27', '01-28', '01-29', '01-30', '01-31'],
//     sleep: ['01-23', '01-24', '01-25', '01-26','01-27', '01-28', '01-29', '01-30', '01-31']
// };

// nlwSetup.setData(data);
// nlwSetup.load();