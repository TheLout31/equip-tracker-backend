const EquipmentModel = require("../models/equipment.model");

/**
 * GET all equipment
 */
exports.getAllEquipment = async (req, res) => {
  try {
    const {
      search,
      status,
      type,
      sortBy = "createdAt",
      order = "desc",
    } = req.query;
    const filter = {};
    let sort = null;
    if (status) {
      filter.status = status;
    }
    if (type) {
      filter.type = type;
    }
    if (sortBy) {
      sort = sortBy;
    }

    if (search) {
      filter.name = { $regex: search, $options: "i" };
    }

    const equipment = await EquipmentModel.find(filter).sort({
      [sort]: order == "asc" ? 1 : -1,
    });
    res.status(200).json(equipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * ADD new equipment
 */
exports.addEquipment = async (req, res) => {
  try {
    const equipment = await EquipmentModel.create(req.body);
    res.status(201).json(equipment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * UPDATE equipment
 */
exports.updateEquipment = async (req, res) => {
  try {
    const updated = await EquipmentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Equipment not found" });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * DELETE equipment
 */
exports.deleteEquipment = async (req, res) => {
  try {
    const deleted = await EquipmentModel.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Equipment not found" });
    }

    res.status(200).json({ message: "Equipment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
