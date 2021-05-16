const express = require("express");
const router = express.Router();

const {
  getApprovedResearchPapers,
} = require("../controllers/researchpapers.controller");

//@route  GET api/ResearchPapers
//@desc   Get Approved Research Papers
//@access public
router.get("/", getApprovedResearchPapers);

module.exports = router;
