import User, { UserInput, UserOutput } from '../../models/User';
import user from '../../models/User';

class Users {
  async findById(id: string): Promise<User | null> {
    return await User.findOne({
      where: { id },
    });
  }
  async findByEmail(email: string): Promise<User | null> {
    return await User.findOne({
      where: { email },
    });
  }
  async create(data: UserInput): Promise<User> {
    const user = await User.build(data);

    return await user.save();
  }
  async update(data: Partial<UserOutput>): Promise<User> {
    if (!data.id) {
      throw new Error('Trying to update entity without id');
    }
    const user = await this.findById(data.id);
    if (!user) {
      throw new Error('Trying to update unexisting entity');
    }
    return await user.update(data);
  }
  async delete(id: string): Promise<number> {
    return await User.destroy({
      where: { id },
    });
  }
}

const users = new Users();

export default users;
