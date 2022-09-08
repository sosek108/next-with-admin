import { Dialect, Sequelize } from 'sequelize';
const env = process.env.NODE_ENV || 'development';
import config from './config/config';
type Config = {
  database: string;
  username: string;
  password?: string;
  host: string;
  port: number;
  dialect: Dialect;
};

const envConfig = config[env] as Config;

const sequelize = new Sequelize(envConfig.database, envConfig.username, envConfig.password, envConfig);

export default sequelize;
