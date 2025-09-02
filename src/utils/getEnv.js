import dotenv from 'dotenv';

dotenv.config();

export function getEnvVar(name, defaultValue) {
  const value = proccess.env[name];

  if (value) return value;
  if (defaultValue) return defaultValue;

  throw new Error(`Missing: proccess.env.${name}`);
}