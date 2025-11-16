export default ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': ['https://cdn.ckeditor.com'],
          "connect-src": ["'self'", "https:", 'https://proxy-event.ckeditor.com'],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            env("CF_PUBLIC_ACCESS_URL") ? env("CF_PUBLIC_ACCESS_URL").replace(/^https?:\/\//, "") : "", //使用 Cloudflare R2 作为上传提供商时，允许从 R2 存储桶加载图像
            // `https://${env('COS_Bucket')}.cos.${env('COS_Region')}.myqcloud.com`, //允许从腾讯云COS加载图像
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            env("CF_PUBLIC_ACCESS_URL") ? env("CF_PUBLIC_ACCESS_URL").replace(/^https?:\/\//, "") : "",//使用 Cloudflare R2 作为上传提供商时，允许从 R2 存储桶加载媒体文件
            // `https://${env('COS_Bucket')}.cos.${env('COS_Region')}.myqcloud.com`, //允许从腾讯云COS加载媒体文件
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];