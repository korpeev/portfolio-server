export type JwtPayload = {
  sub: number;
  username: string;
  exp: number;
  iat: number;
};
