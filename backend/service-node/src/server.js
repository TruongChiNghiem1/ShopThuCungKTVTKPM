const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const router = require('./routers')
const bodyParser = require('body-parser')
const pool = require('./database')
dotenv.config()
const PORT = process.env.PORT

app.use(cors({ credentials: true }))
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', router)

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

async function connect() {
    let conn
    try {
        conn = await pool.getConnection()
        console.log('Đã kết nối database thành công!')
    } catch (err) {
        console.error('Lỗi kết nối database: ' + err)
    } finally {
        if (conn) conn.release()
    }
}

connect()
