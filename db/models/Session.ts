import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../connection';
import { AbstractModel, AbstractModelAttributes } from './AbstarctModel';
import { AdapterSession } from 'next-auth/adapters';

interface SessionAttributes extends AbstractModelAttributes {
  expires: Date;
  sessionToken: string;
  userId: string;
}

export interface SessionInput extends Optional<SessionAttributes, 'id' | 'createdAt' | 'updatedAt'> {}
export interface SessionOutput extends Required<SessionAttributes> {}

class Session extends AbstractModel<SessionAttributes, SessionInput> implements SessionAttributes, AdapterSession {
  public expires!: Date;
  public sessionToken!: string;
  public userId!: string;
}
Session.init(
  {
    expires: DataTypes.DATE,
    sessionToken: DataTypes.STRING,
    userId: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: 'sessions',
    timestamps: true,
    modelName: 'Session',
  },
);

export default Session;
