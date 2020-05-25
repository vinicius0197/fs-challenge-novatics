cd fs-back-end
bundle install
rails db:setup db:seed
rails db:migrate
cd ..
cd fs-front
yarn install
cd ..
