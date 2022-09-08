import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../connection';
import { AbstractModel, AbstractModelAttributes } from './AbstarctModel';

interface VerificationTokenAttributes extends AbstractModelAttributes {
  expires: Date;
  token: string;
  identifier: string;
}

export interface VerificationTokenInput extends Optional<VerificationTokenAttributes, 'id' | 'createdAt' | 'updatedAt'> {}
export interface VerificationTokenOutput extends Required<VerificationTokenAttributes> {}

class VerificationToken extends AbstractModel<VerificationTokenAttributes, VerificationTokenInput> {
  public expires!: Date;
  public token!: string;
  public identifier!: string;
}
VerificationToken.init(
  {
    expires: DataTypes.DATE,
    identifier: DataTypes.STRING,
    token: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: 'verification_tokens',
    modelName: 'VerificationToken',
  },
);
export default VerificationToken;
