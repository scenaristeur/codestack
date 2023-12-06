import { sequelize, DataTypes } from "./db";

const StageModel = sequelize.define("stages", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  titre: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  // category: {
  //   type: DataTypes.STRING(50),
  //   allowNull: true,
  // },
  // published: {
  //   type: DataTypes.BOOLEAN,
  //   defaultValue: false,
  //   allowNull: false,
  // },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
});

export default StageModel;
