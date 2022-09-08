import NextAuth, { SessionStrategy } from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import DatabaseAdapter from '../../../adapters/DatabaseAdapter';

export const authOptions = {
  session: {
    strategy: 'jwt' as SessionStrategy,
  },
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: DatabaseAdapter(),
};

export default NextAuth(authOptions);
