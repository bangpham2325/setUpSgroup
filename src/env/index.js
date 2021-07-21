export const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS, 10) || 10;
export const JWT_SECRET = process.env.JWT_SECRET || 'bangpham';
export const EXPPIRE_DAYS = process.env.EXPPIRE_DAYS || '10d';
export const { DATABASE_URL } = process.env;
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const PORT = process.env.PORT||3000