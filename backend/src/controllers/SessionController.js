const User = require('../models/User');

// metodos => index, show, store, update, destroy

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        // verifica se possui usuario
        let user = await User.findOne({ email });

        // se nao existir, cria o usuario
        if(!user) {
            user = await User.create({ email });
        }

        // const user = await User.create({ email });

        return res.json(user);
    }
};