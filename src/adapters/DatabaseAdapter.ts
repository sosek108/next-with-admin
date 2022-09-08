import type { Adapter } from 'next-auth/adapters';
import { AdapterUser, VerificationToken as BaseVerificationToken } from 'next-auth/adapters';
import users from '../../db/repositories/Users/Users';
import User, { UserOutput } from '../../db/models/User';
import sessions from '../../db/repositories/Sessions/Sessions';
import verificationTokens from '../../db/repositories/VerificationTokens/VerificationTokens';
import Session from '../../db/models/Session';

const DatabaseAdapter = (): Adapter => {
  return {
    async createUser() {
      throw new Error('Not implemented');
    },
    async getUser(id: string): Promise<UserOutput | null> {
      const user = await users.findById(id);
      if (!user) {
        return null;
      }
      return user as UserOutput;
    },
    async getUserByEmail(email: string): Promise<UserOutput | null> {
      const user = await users.findByEmail(email);
      if (!user) {
        return null;
      }
      return user as UserOutput;
    },
    async getUserByAccount() {
      throw new Error('Not implemented');
    },
    async updateUser(data: Partial<AdapterUser>) {
      return await users.update(data as UserOutput);
    },
    async linkAccount() {
      return Promise.resolve();
    },
    async createSession(data: { sessionToken: string; userId: string; expires: Date }) {
      return await sessions.create(data);
    },
    async getSessionAndUser(sessionToken: string): Promise<{ session: Session; user: User } | null> {
      const session = await sessions.findByToken(sessionToken);

      if (!session) {
        return Promise.resolve(null);
      }
      const user = await users.findById(session.userId);
      if (!user) {
        throw new Error(`User is not found for session token ${sessionToken}.`);
      }

      return Promise.resolve({ session, user });
    },
    async updateSession() {
      throw new Error('Not implemented');
    },
    async deleteSession(sessionToken: string) {
      await sessions.delete(sessionToken);
    },
    async createVerificationToken(verificationToken: BaseVerificationToken) {
      return await verificationTokens.create(verificationToken);
    },
    async useVerificationToken({ token }: { identifier: string; token: string }) {
      const verificationToken = await verificationTokens.findByToken(token);
      if (!verificationToken) {
        throw new Error('Token not found');
      }
      await verificationTokens.delete(verificationToken.token);
      return verificationToken;
    },
  };
};
export default DatabaseAdapter;
