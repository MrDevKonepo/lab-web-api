const foodsInMemory = [];

const create = async (food) => {

    const id = Math.floor(Math.random() * 9999);
    food.id = id;
    foodsInMemory.push(food);

    return food;
}

const find = async (filter) => {
    return foodsInMemory
}

module.exports = {create, find};
