const express = require('express')
const app = express()

app.get('/produtos', (req, res)=>{
    res.json({
        data: [
            {id: 7, nome: 'Ana', position: 1},
            {id: 34, nome: 'Bia', position: 2},
            {id: 73, nome: 'Carlos', position: 3},

        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200,
    }
    )

    // res.json({
    //     nome: 'iPad 32G',
    //     preco: 1899.00,
    //     desconto: 0.12,
    // })
})

app.listen(3000, () => {
    console.log('Executando backend...')
})

