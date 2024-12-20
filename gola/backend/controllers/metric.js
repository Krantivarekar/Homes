const Metric = require('../models/Metric');

const getMetricsData = async (req, res) => {
  try {
    const metrics = await Metric.find();
    res.status(200).json(metrics);
  } catch (error) {
    res.status(500).json({ message: "Error fetching metrics data", error });
  }
};

module.exports = { getMetricsData };
