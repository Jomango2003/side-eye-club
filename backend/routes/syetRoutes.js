const express = require('express')
const router = express.Router()

// get nft
router.get('/', (req, res)=> {
    res.status(200).json({
        message:'get side eye token '
    })
})

// create nft
router.post('/', (req, res)=> {
    res.status(200).json({
        message:'set side eye token '
    })
})

// update nft 
router.put('/', (req, res)=> {
    res.status(200).json({
        message:`update nft ${req.params.id}`
    })
})

//delete nft
router.delete('/', (req, res)=> {
    res.status(200).json({
        message:`delete nft ${req.params.id}`
    })
})


module.exports = router;