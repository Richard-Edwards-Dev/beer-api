const express = require('express')
const app = express()
const PORT = 8000

const beers = {
    'ipa': {
        hops: 'Cascade',
        yeast: 'American Ale',
        dryhop: true
    },
    'lager': {
        hops: 'Hallertauer',
        yeast: 'czech pilsner',
        dryhop: false
    }

}

app.get( '/', (req,res) =>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/main.js',(req,res)=>{
    res.sendFile(__dirname + '/main.js')
})

app.get('/api/:beer', (req,res) =>{
    const beerName = req.params.beer
    if(beers[beerName]){
        res.json(beers[beerName])
    } else {
        res.send('Nah')
    }
    
    //res.json(beers)
})

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})
