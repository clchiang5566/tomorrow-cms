/**
 * custom home routes
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/homes',
      handler: 'home.findPluralAlias',
      config: {
        auth: false,
      },
    },
  ],
};
