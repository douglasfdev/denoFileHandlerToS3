import { env } from "./env.config.ts"

export const awsS3Config = {
  awsAccessKeyId: env.AWS_ACCESS_KEY_ID,
  awsSecretKey: env.AWS_SECRET_ACCESS_KEY,
  region: env.AWS_REGION,
};
