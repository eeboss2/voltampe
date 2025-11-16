module.exports = ({ env }) => {

  return {
    ckeditor5: {
      enabled: true,
      config: {
        editor: {
          // Editor configuration
          toolbar: {
            items: [
              'heading',
              '|',
              'bold',
              'italic',
              'link',
              'bulletedList',
              'numberedList',
              '|',
              'imageInsert',
              'blockQuote',
              'insertTable',
              'mediaEmbed',
              'undo',
              'redo',
            ]
          }
        }
      }
    },
    // ...
    seo: {
      enabled: true,
    },

    // 腾讯云COS作为上传提供商的配置开始
    // upload: {
    //   config: {
    //     provider: "strapi-provider-upload-tencent-cloud-storage",
    //     providerOptions: {
    //       SecretId: env("COS_SecretId"),
    //       SecretKey: env("COS_SecretKey"),
    //       Region: env("COS_Region"),
    //       Bucket: env("COS_Bucket"),
    //       // baseUrl: `https://${env('COS_Bucket')}.cos.${env('COS_Region')}.myqcloud.com`,
    //       // domain: 可选，如果你有自定义 CDN 域名
    //     },
    //   },
    // },
    // 腾讯云COS作为上传提供商的配置结束

    // cloudflare R2 作为上传提供商的配置开始
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          // 非 S3 全局选项可以放在这里
          baseUrl: env('CF_PUBLIC_ACCESS_URL'), // 可选，用于生成外链
          endpoint: env('CF_ENDPOINT'),
          rootPath: env('CF_ROOT_PATH'),
          // 把 S3/SDK 相关的选项放到 s3Options 里（必需）
          s3Options: {
            credentials: {
              accessKeyId: env('CF_ACCESS_KEY_ID'),
              secretAccessKey: env('CF_ACCESS_KEY_SECRET'),
            },
            region: env('CF_REGION', 'auto'),
            params: {
              Bucket: env('CF_BUCKET'),
              ACL: env('AWS_ACL', 'public-read'),
            },
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    // cloudflare R2 作为上传提供商的配置结束
  };
};