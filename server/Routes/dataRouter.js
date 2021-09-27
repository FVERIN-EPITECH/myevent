const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

//envoie des données sur la page de l'api
const publicKey= 'e1b6555a4b0947f8aaa003895d217757';

router.get('/',(req,res)=>{
    fetch(`https://api.openagenda.com/v2/agendas?key=${publicKey}`)
    .then(res => res.json())
    .then(dataAgenda => res.send(dataAgenda));
})

router.get('/evenement',(req,res)=>{
    fetch(`https://api.openagenda.com/v2/agendas/${req.query['uid']}/events?key=${publicKey}`)
    .then(res => res.json())
    .then(dataEvent => res.send(dataEvent));
    console.log(req);
})
router.get('/search',(req,res)=>{
    fetch(`https://api.openagenda.com/v2/agendas?key=${publicKey}&size=100&search=${req.query['search']}`)
    .then(res => res.json())
    .then(dataEvent => res.send(dataEvent));
    console.log(req);
})

module.exports = router;