const express = require("express"); 

const v1trackerRouter = require("./v1/routes/trackerRoutes");

const app = express(); 

const PORT = process.env.PORT || 3000;

app.use("/api/v1/activities", v1trackerRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});



