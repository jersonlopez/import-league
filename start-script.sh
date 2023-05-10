# To avoid run npm i before run docker-compose uncomment next lines
# echo 'Installing dependencies...'
# npm i

#echo 'Reseting database....' # for reset the db
# npm run db:migrate:rollback

echo 'Running migrations...'
npm run db:migrate

echo 'Starting the server...'
npm run dev
