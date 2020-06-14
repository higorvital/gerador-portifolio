const User = require('../models/User');
const Color = require('../models/Color');
const Yup =  require('yup');

class UserController{
    async store(req, res){

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            username: Yup.string().required(),
            slug: Yup.string().string().required(),
            email: Yup.string().email().required(),
            color_id: Yup.number().integer().positive().required(),
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error: "Valor de campo inválido"});
        }

        const {slug, color_id} = req.body;

        const userExists = await User.findOne({
            where: {
                slug
            }
        });

        if(userExists){
            return res.status(400).json({error: "Email já cadastrado"});
        }

        const color = await User.findByPk(color_id, {
            attributes: ['id', 'main', 'secondary', 'text'],
        });

        if(!color){
            return res.status(400).json({error: "Cor não existe"});
        }

        const user = await User.create(req.body);

        const {id, name, username, email} = user;

        return res.json({
            id,
            name,
            username,
            slug,
            email,
            color
        });
    }

    async index(req, res){
        const {slug} = req.params;

        const user = await User.findOne({
            where: {
                slug
            },
            attributes: ['id', 'name', 'username', 'slug', 'email'],
            include: [
                {
                    model: Color,
                    as: 'color',
                    attributes: ['id','main', 'secondary', 'text']
                }
            ]
        });

        if(!user){
            return res.status(401).json({error: "Usuário não encontrado"});
        }

        return res.json(user);

    }

}

module.exports = new UserController();