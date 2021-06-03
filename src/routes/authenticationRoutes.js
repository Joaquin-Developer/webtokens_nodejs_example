const { Router } = require("express")
const router = Router()

router.post("/signup", (req, res) => {

})

router.post("/signin", (req, res) => {
    
})

router.get("/me", (req, res) => {
    res.json({ status: true })
})

module.exports = router
// 18:19