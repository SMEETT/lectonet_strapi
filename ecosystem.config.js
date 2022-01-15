// PM2 Configuration
// const fs = require("fs");
// const path = require("path");
// file 'secret' is a comma-separated list
// const pathToSecretKey = path.join("/var/lib", "pm2node", "secrets");
// const getSecretKeys = () => {
//   try {
//     const secretKeys = fs.readFileSync(pathToSecretKey, "utf8");
//     const secretsArray = secretKeys.split(",");
//     secretsArray[secretsArray.length - 1] = secretsArray[
//       secretsArray.length - 1
//     ].replace(/(\r\n|\n|\r)/gm, "");
//     return secretsArray;
//   } catch (error) {
//     console.error(`Error reading SecretKeys ${error}`);
//     process.exit(1);
//   }
// };

// let secretKeys = getSecretKeys();

module.exports = {
  apps: [
    {
      name: "lectonet_strapi",
      script: "./strapi_server.js",
      watch: true,
      autorestart: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};