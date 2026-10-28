const MAX_FILE_SIZE = 10 * 1024 * 1024;
const IMAGE_MIME_TYPES = /^image\/(jpeg|png|gif|webp|avif)$/;

export default {
  async upload(ctx: any) {
    const requestFiles = ctx.request.files?.files;
    const files = Array.isArray(requestFiles)
      ? requestFiles
      : requestFiles
        ? [requestFiles]
        : [];

    if (files.length === 0) {
      return ctx.badRequest('Please upload images using the multipart field "files".');
    }

    const invalidFile = files.find(
      (file: any) =>
        !IMAGE_MIME_TYPES.test(file.mimetype ?? '') ||
        Number(file.size ?? 0) > MAX_FILE_SIZE,
    );

    if (invalidFile) {
      return ctx.badRequest(
        'Only JPG, PNG, GIF, WebP, or AVIF images up to 10MB per file are allowed.',
      );
    }

    const uploadedFiles = await strapi.plugin('upload').service('upload').upload({
      data: {},
      files,
    });

    ctx.status = 201;
    ctx.body = { data: uploadedFiles };
  },
};
