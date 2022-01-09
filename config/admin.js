module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '08338935f2d9e34a70d1ec4bf681e7de'),
  },
});
