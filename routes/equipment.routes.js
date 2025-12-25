const express = require("express");
const EquipmentRouter = express.Router();

const {
  getAllEquipment,
  addEquipment,
  updateEquipment,
  deleteEquipment,
} = require("../controllers/equipment.controller");

// View list of equipment
EquipmentRouter.get("/", getAllEquipment);

// Add new equipment
EquipmentRouter.post("/", addEquipment);

// Edit equipment
EquipmentRouter.put("/:id", updateEquipment);

// Delete equipment
EquipmentRouter.delete("/:id", deleteEquipment);

module.exports = EquipmentRouter;
