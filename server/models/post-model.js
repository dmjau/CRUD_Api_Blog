module.exports = (sequelize, type) => {
    const postModel = sequelize.define(
        'post', {
            id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: type.STRING,
                allowNull: false,
            },
            content: {
                type: type.TEXT,
                allowNull: false,
            },
            picture: {
                type: type.STRING,
                allowNull: false,
                validate: {
                    is: /\.(jpeg|jpg|gif|png)$/,
                },
            },
            creation_date: {
                type: type.DATEONLY,
                defaultValue: sequelize.NOW,
                allowNull: false,
            },
        },
        { timestamps: false, tableName: 'posts'},
    )
    return postModel
}