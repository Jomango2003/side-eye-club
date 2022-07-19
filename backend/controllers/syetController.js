const asyncHandler = require('express-async-handler')
// @desc Get syet 
// @route GET /api/syets
// @access Private
const getSyet = asyncHandler (async (req, res)=> {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field');

    }
    console.log(req.body)
    res.status(200).json({
        message:'get side eye token '
    })
})

// @desc Set syet 
// @route POST /api/syets
// @access Private
const setSyet =asyncHandler (async (req, res)=> {
    res.status(200).json({
        message:'set side eye token '
    })
})
// @desc update syet 
// @route PUT /api/syets/:id
// @access Private
const updateSyet = asyncHandler (async (req, res)=> {
    res.status(200).json({
        message:`Update goal ${req.params.id}`
    })
})
// @desc delete syec 
// @route DELETE /api/syets/:id
// @access Private
const deleteSyet = asyncHandler (async (req, res)=> {
    res.status(200).json({
        message:`delete goal ${req.params.id}`
    })
})

module.exports = {
    getSyet, setSyet, updateSyet, deleteSyet
}