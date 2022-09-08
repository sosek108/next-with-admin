import { Model } from 'sequelize';

export interface AbstractModelAttributes {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export abstract class AbstractModel<ModelAttributes extends {}, InputAttributes extends {} = ModelAttributes> extends Model<ModelAttributes, InputAttributes> {
  public id!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
