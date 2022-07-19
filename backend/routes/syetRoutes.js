const express = require('express')
const router = express.Router()

const {getSyet, setSyet, updateSyet, deleteSyet} = require('../controllers/syetController')

router.route('/').get(getSyet).post(setSyet);
router.route('/:id').put(updateSyet).delete(deleteSyet);

/*
// get nft
router.get('/', getSyet)

// create nft
router.post('/', setSyet )

// update nft 
router.put('/:id', updateSyet)

//delete nft
router.delete('/:id', deleteSyet)
*/


module.exports = router;