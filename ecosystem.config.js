// PM2 Configuration
const fs = require("fs");
const path = require("path");
// file 'secret' is a comma-separated list
const pathToSecretKey = path.join("/var/lib", "pm2node", "secrets_strapi");
const getSecretKeys = () => {
  try {
    const secretKeys = fs.readFileSync(pathToSecretKey, "utf8");
    const secretsArray = secretKeys.split(",");
    secretsArray[secretsArray.length - 1] = secretsArray[
      secretsArray.length - 1
    ].replace(/(\r\n|\n|\r)/gm, "");
    console.log("SECRETS", secretsArray);
    return secretsArray;
  } catch (error) {
    console.error(`Error reading SecretKeys ${error}`);
    process.exit(1);
  }
};

let secretKeys = getSecretKeys();

module.exports = {
  apps: [
    {
      name: "lectonet_strapi",
      script: "./strapi_server.js",
      watch: false,
      ignore_watch: ["database"],
      autorestart: true,
      env: {
        NODE_ENV: "production",
        APP_KEYS: secretKeys.slice(0, 3),
        JWT_SECRET: secretKeys[3],
        API_TOKEN_SALT: secretKeys[4],
        ADMIN_JWT_SECRET: secretKeys[5],
      },
    },
  ],
};
