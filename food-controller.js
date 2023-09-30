const getFoods = async (request, h) => {
    const foods = [
        {
            id: 1,
            name: "pizza calabresa"
        },
        {
            id: 2,
            name: "pizza catupiry"
        }
    ];

    return h.response(foods).code(200);
}

const create = async (request, h) => {
    console.log(request.payload);
    return h.response("sucesso").code(201);
}

module.exports = {getFoods, create};
