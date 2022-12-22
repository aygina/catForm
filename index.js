class Cat {
    constructor(name, breed, food, sex) {
        this.name = name;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
    }
}

function getInfo() {
    let petsName = document.getElementById('petsName').value;
    let petsBreed = document.getElementById('petsBreed').value;
    let petsFood = document.querySelector('.food:checked').value;
    let petsSex = document.querySelector('.sex:checked').value;

    let myCat = new Cat(petsName, petsBreed, petsFood, petsSex);
    alert(JSON.stringify(myCat, null, 2));
}