const express = require('express');
const Stock = require('../services/stock');

const router = express.Router();
const stock = new Stock();

router.get('/', async (req, res) => {
    try {
        const state = await stock.fetchAllPositions()
        res.json({ state });
    }
    catch (err) {
        res.status(500).json({ msg: " Error Occured!", err })
    }
})

router.post('/', async ({ body: { position } }, res) => {
    try {
        const response = await stock.createPosition(position)
        res.json({ msg: "Position Created!", response });
    }
    catch (err) {
        res.status(500).json({ msg: " Error Occured!", err })
    }
})

router.put('/', async ({ body: { position } }, res) => {
    try {
        const response = await stock.updatePosition(position)
        res.json({ msg: "Position Updated!", response });
    }
    catch (err) {
        res.status(500).json({ msg: " Error Occured!", err })
    }
})


router.delete('/', async ({ body: { position } }, res) => {
    try {
        const response = await stock.deletePosition(position)
        res.json({ msg: " Position Deleted!", response });
    }
    catch (err) {
        res.status(500).json({ msg: " Error Occured!", err })
    }
})


module.exports = router;
