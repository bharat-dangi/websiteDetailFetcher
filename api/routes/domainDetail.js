const express = require("express");
const { getDomainDetail } = require("../controllers/domainDetail");
const router = express.Router();

router.get("/:domainName", getDomainDetail);

module.exports = router;
