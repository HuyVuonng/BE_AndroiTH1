const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const Schema = mongoose.Schema;

const Account = new Schema(
  {
    // ID: { type: Int32Array, required: true},
    name: { type: String },
    dateOfBirth: { type: Date },
    email: { type: String },
    gender: { type: Number },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);
// Account.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });
module.exports = mongoose.model("Account", Account);
