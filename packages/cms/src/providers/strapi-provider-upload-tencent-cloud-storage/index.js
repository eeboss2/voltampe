// Local wrapper provider to add uploadStream fallback for providers that don't implement it.
// This avoids editing node_modules directly and keeps the fix in your project.

const upstreamName = 'strapi-provider-upload-tencent-cloud-storage';

module.exports = {
  init(config) {
    // require the original provider
    const upstream = require(upstreamName);

    // upstream may export an object with init or be the init function itself
    const instance = typeof upstream === 'function' ? upstream(config) : (upstream.init ? upstream.init(config) : upstream(config));

    // if uploadStream is missing, alias it to upload
    if (instance && !instance.uploadStream && typeof instance.upload === 'function') {
      instance.uploadStream = instance.upload;
    }

    return instance;
  },
};
