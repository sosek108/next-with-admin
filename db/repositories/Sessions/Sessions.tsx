import Session, { SessionInput, SessionOutput } from '../../models/Session';

class Sessions {
  async create(data: SessionInput): Promise<Session> {
    console.log('createsession', data);
    const session = await Session.build(data);
    return await session.save();
  }
  async findByToken(sessionToken: string): Promise<Session | null> {
    return await Session.findOne({
      where: { sessionToken },
    });
  }
  async delete(sessionToken: string): Promise<number> {
    return await Session.destroy({
      where: { sessionToken },
    });
  }
}

const session = new Sessions();

export default session;
