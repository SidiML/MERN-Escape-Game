const express = require("express")
const app = express(); const port = 5000
const dotenv = require('dotenv'); dotenv.config()
const appRouter = require("./AppRouter.js")
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", appRouter)

app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});