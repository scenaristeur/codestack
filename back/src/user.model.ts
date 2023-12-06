import { sequelize, DataTypes } from "./db";

const UserModel = sequelize.define("users", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  username: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  adress: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: false,
  },
  phone: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  // website: {
  //   type: DataTypes.STRING(100),
  //   allowNull: true,
  //   unique: true,
  // },
  company: {
    type: DataTypes.STRING(100),
    allowNull: true,
    unique: false,
  },
  // content: {
  //   type: DataTypes.TEXT,
  //   allowNull: false,
  // },
  // category: {
  //   type: DataTypes.STRING(50),
  //   allowNull: true,
  // },
  // published: {
  //   type: DataTypes.BOOLEAN,
  //   defaultValue: false,
  //   allowNull: false,
  // },
  // createdAt: {
  //   type: DataTypes.DATE,
  //   defaultValue: DataTypes.NOW,
  //   allowNull: false,
  // },
  // updatedAt: {
  //   type: DataTypes.DATE,
  //   defaultValue: DataTypes.NOW,
  //   allowNull: false,
  // },
});

export default UserModel;
