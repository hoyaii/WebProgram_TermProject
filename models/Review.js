const Sequelize = require('sequelize');

module.exports = class Review extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            review_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            order_id: {
                type: Sequelize.INTEGER,
            },
            customer_id: {
                type: Sequelize.INTEGER,
            },
            rating: {
                type: Sequelize.INTEGER,
            },
            comment: {
                type: Sequelize.TEXT,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Review',
            tableName: 'Review',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.Review.belongsTo(db.User, { foreignKey: 'customer_id', targetKey: 'user_id' });
        db.Review.belongsTo(db.Orders, { foreignKey: 'order_id', targetKey: 'order_id' }); //
    }
};