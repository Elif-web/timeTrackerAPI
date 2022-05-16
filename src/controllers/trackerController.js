const getAllActivities = (req, res) => {
    res.send("Get all activities");
  };
  
  const getOneActivity = (req, res) => {
    res.send("Get an existing activity");
  };
  
  const createNewActivity = (req, res) => {
    res.send("Create a new activity");
  };
  
  const updateOneActivity = (req, res) => {
    res.send("Update an existing activity");
  };
  
  const deleteOneActivity = (req, res) => {
    res.send("Delete an existing activity");
  };
  
  module.exports = {
    getAllActivities,
    getOneActivity,
    createNewActivity,
    updateOneActivity,
    deleteOneActivity,

  };