const mongoose = require("mongoose");

const domainSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    aRecord: {
      type: Array,
      default: [],
    },
    domainOwner: {
      type: String,
    },
    ownerCountry: {
      type: String,
    },
    geoLocation: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Domain", domainSchema);
