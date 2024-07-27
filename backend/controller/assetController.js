const Asset = require('../models/assets');

const addAsset=async(req,res)=>{
    const { assetType, vehicle, infrastructure } = req.body;
    console.log(req.body);

    if (!['Vehicle', 'Infrastructure'].includes(assetType)) {
        return res.status(400).json({ message: 'Invalid asset type' });
    }

    try {
        let newAsset;
        if (assetType === 'Vehicle') {
            newAsset = new Asset({
                assetType,
                vehicle
            });
        } else if (assetType === 'Infrastructure') {
            newAsset = new Asset({
                assetType,
                infrastructure
            });
        }
        
        await newAsset.save();
        res.status(201).json(newAsset);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Fetch all assets of a specific type
const getAllAssetsByType = async (req, res) => {
    const { type } = req.params;

    if (!['Vehicle', 'Infrastructure'].includes(type)) {
        return res.status(400).json({ message: 'Invalid asset type' });
    }

    try {
        const assets = await Asset.find({ assetType: type });
        res.status(200).json(assets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Fetch a specific asset by ID
const getAssetById = async (req, res) => {
    const { id } = req.params;

    try {
        const asset = await Asset.findById(id);
        if (!asset) {
            return res.status(404).json({ message: 'Asset not found' });
        }
        res.status(200).json(asset);
        console.log(asset)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllAssetsByType,
    getAssetById,
    addAsset
};
