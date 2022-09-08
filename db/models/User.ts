import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../connection';
import { AbstractModel, AbstractModelAttributes } from './AbstarctModel';
import { AdapterUser } from 'next-auth/adapters';
interface UserAttributes extends AbstractModelAttributes {
  email: string;
  emailVerified: Date;
  name: string;
  image?: string;
}

export interface UserInput extends Optional<UserAttributes, 'id' | 'emailVerified' | 'createdAt' | 'updatedAt'> {}
export interface UserOutput extends Required<UserAttributes> {}

class User extends AbstractModel<UserAttributes, UserInput> implements UserAttributes, AdapterUser {
  [x: string]: unknown;
  public email!: string;
  public name!: string;
  public image!: string | undefined;
  public emailVerified!: Date;
}

User.init(
  {
    email: DataTypes.STRING,
    emailVerified: DataTypes.DATE,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: 'users',
    modelName: 'User',
    timestamps: true,
  },
);

export default User;
