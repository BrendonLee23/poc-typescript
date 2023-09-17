import express from "express"
import dotenv from "dotenv"
import peopleRouter from "./routes/router.people"

const app = express()
app.use(express.json())
app.use(peopleRouter)
dotenv.config()

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})