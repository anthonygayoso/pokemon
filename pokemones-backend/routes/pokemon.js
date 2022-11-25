
/*
    Ruta : /api/pokemon
*/

const { Router } = require('express');


const { crearPokemon } = require('../controllers/pokemon');


const router = Router();

router.post('/', 
    crearPokemon 
);

module.exports = router;