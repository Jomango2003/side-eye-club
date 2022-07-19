const asyncHandler = require('express-async-handler')

const syet = require('../model/syetModel')

// @desc Get syet 
// @route GET /api/syets
// @access Private
const getSyet = asyncHandler (async (req, res)=> {
    const syets = await syet.find()
    res.status(200).json(syets)
})

// @desc Set syet 
// @route POST /api/syets
// @access Private
const setSyet = asyncHandler (async (req, res)=> {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    const sideToken = await syet.create({
        text:req.body.text
    })
    res.status(200).json(sideToken)
})
// @desc update syet 
// @route PUT /api/syets/:id
// @access Private
const updateSyet = asyncHandler (async (req, res)=> {
    const sideToken = await syet.findById(req.params.id)

    if(!sideToken){
        res.status(400)
        throw new Error('syet not found')
    }

    const updatedSyet = await syet.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedSyet)
})
// @desc delete syec 
// @route DELETE /api/syets/:id
// @access Private
const deleteSyet = asyncHandler (async (req, res)=> {
    const sideToken = await syet.findById(req.params.id)
    if(!sideToken){
        res.status(400)
        throw new Error('syet not found')
    }

    await sideToken.remove();
    res.status(200).json({
        id: req.params.id
    })
})

module.exports = {
    getSyet, setSyet, updateSyet, deleteSyet
}