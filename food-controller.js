const business = require('./food-business')
const foodsInMemory = [];

const getFoods = async (request, h) => {
    const result = business.getFoods.find();
    return h.response(result).code(200);
}

const create = async (request, h) => {
    
    const result = await business.create(request.payload);

    return h.response(result).code(200);
}

module.exports = {getFoods, create};
