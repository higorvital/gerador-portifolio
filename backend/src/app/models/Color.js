const {Model} = require('sequelize');
const Sequelize = require('sequelize');

class Color extends Model{
    static init(sequelize){
        super.init({
            main: Sequelize.STRING,
            secondary: Sequelize.STRING,
            text: Sequelize.STRING,
        },
        {
            sequelize
        });


        return this;
    }

}

module.exports = Color;