import { JWTPayload, SignJWT, jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "supersecretkey");

export class JWT {
  static async sign(payload: JWTPayload): Promise<string> {
    return await new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setExpirationTime("15m").sign(JWT_SECRET);
  }

  static async verify<T>(token: string): Promise<T | null> {
    try {
      const { payload } = await jwtVerify(token, JWT_SECRET);
      return payload as T;
    } catch (error) {
      if (process.env.NODE_ENV !== "production") console.error(`Terdapat kesalahan pada token Anda: ${error}`);
      return null;
    }
  }
}