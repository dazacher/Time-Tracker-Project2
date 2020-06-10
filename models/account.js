module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define(
        "account",
        {
            first_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            freezeTableName: true
        }
    );

    Account.associate = (models) => {
        Account.hasOne(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Account;
};