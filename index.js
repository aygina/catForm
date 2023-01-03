class Cat {
    constructor(name, breed, food, sex) {
        this.name = name;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
    }
}

postButton.addEventListener("click", getInfo);

function getInfo() {
    let petsName = document.getElementById('petsName').value;
    let petsBreed = document.getElementById('petsBreed').value;
    let petsFood = document.querySelector('.food:checked').value;
    let petsSex = document.querySelector('.sex:checked').value;

    let myCat = new Cat(petsName, petsBreed, petsFood, petsSex);
    console.log(JSON.stringify(myCat, null, 2));
}