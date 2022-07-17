const express = require('express');
const blogRoutes = require('./src/blogdetails/routes');
const app = express();
const port = 5000;

app.use(express.json());

app.use('/api/v1/blogs', blogRoutes);

// app.get('/', (req, res) => {
//     res.send("Database connected");
// });

app.listen(port, () => {
    console.log("Server connected", port);
});