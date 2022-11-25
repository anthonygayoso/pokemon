
//acceder a coneccion de mysql configurada
const consql = require('../database/database');

// ==========================================
// crear un pokemon
// ==========================================
const crearPokemon = async(req, res) => {
    try {
        const p_name = req.body.name;
        const p_experience = req.body.base_experience;
        const p_weight = req.body.weight;
        const p_height = req.body.height;

        const query = `CALL SP_CREATE_POKEMON( "${p_name}", "${p_experience}", "${p_weight}", "${p_height}" )  `;

        const reg = await register_pokemon(req, res, query);

        if ( reg < 1 ) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear pokemon'
            })
        }
        
        return res.status(201).json({
            ok: true,
            mensaje: 'Pokemon agregado con éxito'
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            mensaje: 'Error en el servidor',
            error: error.message
        });
    }
}

function register_pokemon(req, res, query) {
    return new Promise((resolve, reject) => {
        consql.query(query, (err, rows, fields) => {
            if (err) {;
                return reject(err);
            }
            resolve(rows[0][0]['id']);
        });
    });
}


module.exports = {
    crearPokemon
}