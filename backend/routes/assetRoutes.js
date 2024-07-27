const express = require('express');
const router = express.Router();

const assetController = require('../controller/assetController');

// Route to fetch all assets of a specific type
router.get(`/:type`, assetController.getAllAssetsByType);

// Route to fetch a specific asset by ID
router.get('/:id', assetController.getAssetById);
router.post('/', assetController.addAsset);
module.exports = router;
