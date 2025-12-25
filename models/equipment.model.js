const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      enum: ["Machine", "Vessel", "Tank", "Mixer"],
      required: true,
    },

    status: {
      type: String,
      enum: ["Active", "Inactive", "Under Maintenance"],
      default: "Active",
    },

    lastCleanedDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

 const EquipmentModel= mongoose.model("Equipment", equipmentSchema);

 module.exports =  EquipmentModel