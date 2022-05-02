pm2 kill
cd /var/lib/pm2node/lectonet_frontend
pm2 start ecosystem.config.js
cd /var/lib/pm2node/lectonet_strapi
npm install
npm run build
# git clean -f
# git clean -d -f
# git checkout main
pm2 start ecosystem.config.js
pm2 save