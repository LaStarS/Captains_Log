const express = require('express')

const router = express.Router()

const captLogController = require('../controller/captLogController')

router.get('/', captLogController.index)



router.get('/new', (req, res) => {
    res.render('New')
})

router.delete('/clear', captLogController.clear)

router.delete('/:id', captLogController.delete)


router.put('/:id', captLogController.update)


router.post('/seed', captLogController.seed)


router.post('/', captLogController.create )


router.get('/:id/edit', captLogController.edit)

router.get('/:id', captLogController.show)

module.exports = router