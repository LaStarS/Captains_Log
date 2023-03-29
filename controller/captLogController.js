const Log = require('../models/captLogs')
const captLogsArray = require('../models/captLogsArray')

module.exports.create = async (req, res) => {
    
    if(req.body.shipIsBroken) {
        req.body.shipIsBroken = true
    }else {
        req.body.shipIsBroken = false
    }

    try {
        const result = await Log.create(req.body)
        console.log(result)
    } catch(err) {
        console.log(err)
    }
    
    res.redirect('/captLogs')

}

module.exports.index = async (req, res) => {

    try {
        const logs = await Log.find() 
        console.log('inside controller')
        
        res.render('Index', { logs })

    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.show = async (req, res) => {
    try {
        const log = await Log.findById(req.params.id)
        const date = log.createdAt.toString().slice(0, 15)
        res.render('Show', { log , date})
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.delete = async (req, res) => {
  
    try {
        await Log.findByIdAndDelete(req.params.id)
        res.redirect('/captLogs')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
} 

module.exports.edit = async (req, res) => {
  
    try {
        const log = await Log.findById(req.params.id)
        res.render('Edit', { log })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }    
}

module.exports.update = async (req, res) => {
 
    console.log(req.body)

    if (req.body.shipIsBroken) {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

   try {
        await Log.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/captLogs/${req.params.id}`)
   } catch(err) {
        console.log(err)
        res.send(err.message)
   }
}

module.exports.seed = async (req, res) => {

    try {
        await Log.deleteMany({})
        await Log.create(captLogsArray)
        res.redirect('/captLogs')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.clear = async (req, res) => {

    try {
        await Log.deleteMany({})
        res.redirect('/captLogs')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}