const Stock = require("../models/stock");

module.exports = class StockService {
    async fetchAllPositions() {
        const data = await Stock.find({}).exec();
        return data;
    }

    async createPosition(position) {
        return Stock.create(position);
    }

    async updatePosition(position) {
        return Stock.updateOne({ symbol: position.symbol }, position).exec();
    }

    async deletePosition(symbol) {
        return Stock.deleteOne({ symbol }).exec();
    }
};