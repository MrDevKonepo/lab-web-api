const controller = require('./food-controller');

const routes = [
    {
        method: "GET",
        path: "/foods",
        handler: controller.getFoods
    },
    {
        method: "POST",
        path: "/foods",
        handler: controller.create
    }
];

module.exports = routes
