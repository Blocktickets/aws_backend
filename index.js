import express from 'express'

const app = express()

app.listen(3000, () => console.log("api running on port 3000"))


app.get('/', (req, res) => res.json("API is running on aws") )

app.get('/list', (req,res) => res.json("This is the list of all eligible candidates. Kindly take the screenshot before it gets deleted."))
