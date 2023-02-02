import { DataTypes } from "sequelize";
import sequelize from "../../db.js";
import ReviewsModel from "../reviews/model.js";
const UsersModel = sequelize.define("user", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: { type: DataTypes.STRING, allowNull: false },

  surname: { type: DataTypes.STRING, allowNull: false },

  dob: { type: DataTypes.DATEONLY, allowNull: false },
});

UsersModel.hasMany(ReviewsModel, { foreignKey: "userId" });
ReviewsModel.belongsTo(UsersModel);

export default UsersModel;
