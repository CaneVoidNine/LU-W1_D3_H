import { DataTypes } from "sequelize";
import sequelize from "../../db.js";
const ReviewsModel = sequelize.define("review", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  comment: { type: DataTypes.STRING, allowNull: false },

  rate: { type: DataTypes.INTEGER, allowNull: false },
});

export default ReviewsModel;
