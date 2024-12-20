const express = require('express');
const router = express.Router();
const { getMetricsData } = require('../controllers/metricController');

router.get('/', getMetricsData);

module.exports = router;
