cd /var/lib/pm2node/lectonet_strapi
npm install
pm2 stop lectonet_strapi
git clean -d
git clean -d -f
git checkout main
pm2 delete lectonet_strapi
pm2 restart ecosystem.config.js
pm2 save