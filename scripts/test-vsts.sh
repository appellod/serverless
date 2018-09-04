#!/bin/bash
set -e

nyc mocha --exit --reporter mocha-multi-reporters --reporter-options configFile=mocha-multi-reporters.json ./find-users/index.spec.js