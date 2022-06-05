export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '032b998a439dcb4c23e0ae9ab4411640'),
  },
});
