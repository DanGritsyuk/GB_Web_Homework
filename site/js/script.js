function printName() {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
}

function changeColor() {
    var element = document.getElementById('colorful');
    if (element.style.color == 'blue') {
        element.style.color = 'red';
        element.innerHTML = 'А этот синий цвет, не спорь!';
    } else {
        element.style.color = 'blue';
        element.innerHTML = 'Это точно красный цвет!';
    }
}

function changeListColor() {
    var listItems = document.getElementsByTagName('li');
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].style.color = 'green';
    }
}

function handleSubmit(event) {
    event.preventDefault();
    let requiredInputs = document.querySelectorAll('[required]');
    let isFormValid = true;
    requiredInputs.forEach(input => {
        if (!input.value) {
            input.classList.add('error');
            isFormValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    if (isFormValid) {
        alertData(requiredInputs);
    }
}

function alertData(requiredInputs) {
    let name = requiredInputs[0].value;
    let age = parseInt(requiredInputs[1].value);
    let validUser = false;

    alert('Привет, ' + name + '!\n');

    switch (true) {
        case age > 0 && age < 10:
            alert('Тебе еще рано потреблять этот контент!');
            break;
        case age >= 10 && age < 18:
            alert('Учи уроки, ' + name + '!');
            break;
        case age == 18:
            alert('П-п, найс...');
            validUser = true;
            break;
        case age > 18 && age < 30:
            alert('Иди работай, ' + name + '.');
            break;
        case age >= 30 && age < 101:
            alert('Дед, прими таблетки!');
            break;
        default:
            alert('Шутку понял, смешно.');
    }

    if (validUser) {
        let ul = document.getElementById('user-data');
        let ocum = "";

        ocum += `<li>
                    Имя: ${name}
                </li>
                <li>
                    Возраст: ${age}
                </li>`;
        ul.innerHTML = ocum;



        document.getElementById('after-submit').style.display = "block";
        document.getElementById('input-data').style.display = "none";

        document.getElementById('after-submit').style.display = "block";
        document.getElementById('input-data').style.display = "none";
    }
}