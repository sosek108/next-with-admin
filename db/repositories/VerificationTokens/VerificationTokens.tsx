import VerificationToken, { VerificationTokenInput, VerificationTokenOutput } from '../../models/VerificationToken';

class VerificationTokens {
  async create(data: VerificationTokenInput): Promise<VerificationToken> {
    const token = await VerificationToken.build(data);
    return await token.save();
  }
  async findByToken(token: string): Promise<VerificationTokenOutput | null> {
    return await VerificationToken.findOne({
      where: { token },
    });
  }
  async delete(token: string): Promise<number> {
    return await VerificationToken.destroy({
      where: { token },
    });
  }
}

const verificationTokens = new VerificationTokens();

export default verificationTokens;
