#!/usr/bin/env bash

watchman watch-del-all
rm -rf ios/build
rm -rf ios/Pods
rm -rf android/build
rm -rf node_modules
yarn
cd android
./gradlew clean
cd ..
