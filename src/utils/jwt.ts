import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

export class JWT {
  static sign(payload: object): string {
    return sign(payload, JWT_SECRET, { expiresIn: "15m" });
  }

  static verify<T>(token: string): T | null {
    try {
      return verify(token, JWT_SECRET) as T;
    } catch {
      return null;
    }
  }
}