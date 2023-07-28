window.onload = loadData;

function loadData() {
    let name = readCookie('name');
    let age = readCookie('age');

    if (name && age) {
        let userData = document.getElementById('user-data');
        let nameNode = document.createTextNode('Имя: ' + name);
        let ageNode = document.createTextNode('Возраст: ' + age);
        userData.appendChild(nameNode);
        userData.appendChild(ageNode);

        document.getElementById('after-submit').style.display = "block";
        document.getElementById('input-data').style.display = "none";
    }
}

function printName() {
    let name = document.getElementById('nameInput').value;
    let age = parseInt(document.getElementById('ageInput').value);
    if (!name) {
        alert('Укажите имя...');
        return;
    }
    if (!age) {
        alert('Укажите возраст...');
        return;
    }

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
            break;
        case age > 18 && age <= 30:
            alert('Иди работай, ' + name + '.');
            break;
        case age > 30 && age < 101:
            alert('Дед, прими таблетки!');
            break;
        default:
            alert('Шутку понял, смешно.');
    }

    writeCookie('name', name);
    writeCookie('age', age);
}

function changeColor() {
    var element = document.getElementById('colorful');
    if (element.style.color == 'red') {
        element.style.color = 'blue';
        element.innerHTML = 'Это точно красный цвет!';
    } else {
        element.style.color = 'red';
        element.innerHTML = 'А этот синий цвет, не спорь!';
    }
}

function changeListColor() {
    var listItems = document.getElementsByTagName('li');
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].style.color = 'green';
    }
}

function writeCookie(name, val) {
    var date = new Date;
    document.cookie = name + "=" + val + "; path=/;";
}

function readCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}