export default {
  routes: [
    {
      method: 'POST',
      path: '/media/upload',
      handler: 'media.upload',
      config: {
        auth: {},
      },
    },
  ],
};
