const express = require('express')
const router = express.Router()
const Contacts = require('../models/ContactModel')
const Contacts = require('../models/ContactModel')


router.get('/add',async(req,res) => {
    try {
 const Contacts = await Contacts.find()
 return res.status(200).json(Contacts)
    } catch (error) {
        return res.status(500).json({message: error.message})
        }
    })



    router.post('/add',async (req,res) => {
        try{ 
            const newcontact = new Contacts(req.body)
            const {name,phone} = newcontact
            if(!phone || !name) {
                return res.status(400).json({message:"ALL fields required"})
            }
            await newcontact.save()
            return res.status(200).json(newcontact)
        }
        catch(error) {
            return res.status(500).json({message: error.message}) 
        }
    })

    module.exports = router