const {Model} = require('sequelize');
const Sequelize = require('sequelize');

class User extends Model{
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            username: Sequelize.STRING,
            slug: Sequelize.STRING,
            email: Sequelize.STRING,
        },
        {
            sequelize
        });


        return this;
    }

    static associate(models){
        this.belongsTo(models.Color, {foreignKey: 'color_id', as: 'color'});
    }

}

module.exports = User;