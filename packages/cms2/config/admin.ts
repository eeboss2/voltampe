export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    // Configure session lifespans to replace deprecated `auth.options.expiresIn`.
    // maxRefreshTokenLifespan: how long a refresh token remains valid (use a longer period)
    // maxSessionLifespan: maximum lifespan of a single session (shorter than refresh token)
    sessions: {
      maxRefreshTokenLifespan: env('ADMIN_MAX_REFRESH_TOKEN_LIFESPAN', '30d'),
      maxSessionLifespan: env('ADMIN_MAX_SESSION_LIFESPAN', '7d'),
    },
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
