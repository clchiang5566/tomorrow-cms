/**
 * home controller
 */

import { factories } from '@strapi/strapi';

const populateHeroImage = (ctx: any) => {
  ctx.query = {
    ...ctx.query,
    populate: {
      ...(typeof ctx.query?.populate === 'object' ? ctx.query.populate : {}),
      heroImage: {
        populate: {
          image: true,
        },
      },
    },
  };
};

export default factories.createCoreController('api::home.home', () => ({
  async find(ctx: any) {
    populateHeroImage(ctx);
    return await super.find(ctx);
  },

  async findPluralAlias(ctx: any) {
    populateHeroImage(ctx);
    return await super.find(ctx);
  },
}));
