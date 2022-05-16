const express = require("express");

const trackerController = require("../../controllers/trackerController");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all activities");
});

router.get("/:activityId", (req, res) => {
  res.send("Get an existing activity");
});

router.post("/", (req, res) => {
  res.send("Create a new activity");
});

router.patch("/:activityId", (req, res) => {
  res.send("Update an existing activity");
});

router.delete("/:activityId", (req, res) => {
  res.send("Delete an existing activity");
});

router.get("/", trackerController.getAllActivities);

router.get("/:activityId", trackerController.getOneActivity);

router.post("/", trackerController.createNewActivity);
router.patch("/:activityId", trackerController.updateOneActivity);

router.delete("/:activityId", trackerController.deleteOneActivity);

module.exports = router;