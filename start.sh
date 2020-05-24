#!/bin/bash
cd fs-back-end
rails s &
cd ..
cd fs-front
yarn start &
cd ..