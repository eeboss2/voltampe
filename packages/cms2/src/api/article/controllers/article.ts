/**
 *  article controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::article.article');


// 'use strict';

// /**
//  * article controller
//  */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::article.article', ({ strapi }) => ({
//   async findOne(this: any, ctx) {
//     const { slug } = ctx.params;
//     const { query } = ctx;

//     try {
//       const entity = await strapi.db.query('api::article.article').findOne({
//         where: { slug },
//         populate: query.populate ? query.populate.split(',') : [], // 根据需要处理关联字段
//       });

//       if (!entity) {
//         return ctx.notFound('article not found');
//       }

//       const sanitizedEntity = await this.sanitizeOutput(entity);

//       return this.transformResponse(sanitizedEntity);
//     } catch (error) {
//       return ctx.badRequest(null, [{ messages: [{ id: error.message }] }]);
//     }
//   },
// }));