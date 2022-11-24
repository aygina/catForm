function changeName() {
    let fullName = document.getElementById("fullName").value;
    let arrayName = fullName.split(" ");
    let cleanName = arrayName.filter(el => el !== '');

    let surname = cleanName[0];
    let name = cleanName[1];
    let middleName = cleanName[2];

    let niceSurname = surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase();
    let niceName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    let niceMidName = middleName.charAt(0).toUpperCase() + middleName.slice(1).toLowerCase();

    yourSurname.textContent = (`Фамилия: ` + niceSurname);
    yourName.textContent = (`Имя: ` + niceName);
    yourMidName.textContent = (`Отчество: ` + niceMidName);
}