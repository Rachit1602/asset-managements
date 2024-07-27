const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
    model: {
        type: String,
        required: true
    },
    mileage: {
        type: String,
        required: true
    },
    maintenanceHistory: {
        type: Object,
        required: true
    },
    issues: {
        type: String
    },
    fuelType: {
        type: String
    },
    odometerReading: {
        type: String
    },
    serviceHistory: {
        type: Object
    },
    accidentHistory: {
        type: String
    },
    tireCondition: {
        type: String
    },
    brakeCondition: {
        type: String
    },
    vehicleAge: {
        type: String
    }
});

const infrastructureSchema = mongoose.Schema({
    name: {
        type: String
    },
    buildingId: {
        type: String
    },
    location: {
        type: String
    },
    constructionDate: {
        type: String
    },
    areaSqft: {
        type: String
    },
    value: {
        type: String
    },
    status: {
        type: String
    },
    events: {
        type: String
    },
    maintenanceHistory: {
        type: Object
    },
    expenditure: {
        type: Object
    },
    geoData: {
        type: Object
    }
});

const assetSchema = mongoose.Schema({
    assetType: {
        type: String,
        required: true,
        enum: ['Vehicle', 'Infrastructure']
    },
    vehicle: vehicleSchema,
    infrastructure: infrastructureSchema
});

module.exports = mongoose.model('Asset', assetSchema);

 