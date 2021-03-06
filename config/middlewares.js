module.exports = ({ env }) => [
  "strapi::errors",
  // {
  //   name: "strapi::security",
  //   config: {
  //     contentSecurityPolicy: {
  //       directives: {
  //         "script-src": [
  //           "'self'",
  //           "'unsafe-inline'",
  //           "cdn.jsdelivr.net",
  //           "'unsafe-eval'",
  //         ],
  //         "img-src": ["'self'", "data:", "cdn.jsdelivr.net", "strapi.io"],
  //       },
  //     },
  //   },
  // },
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
