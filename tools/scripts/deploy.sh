#!/bin/sh
if [ $CIRCLE_EVENT_TYPE != "push" -o $CIRCLE_BRANCH != "main" ]; then
  echo This job is not running against a commit that has been merged to main.
  echo Skipping deployment.
  exit 0
fi
openssl aes-256-cbc \
  -K $encrypted_4c3763264a8a_key \
  -iv $encrypted_4c3763264a8a_iv \
  -in github-deploy-key.enc \
  -out github-deploy-key \
  -d
chmod 600 github-deploy-key
eval "$(ssh-agent -s)"
ssh-add github-deploy-key
rm github-deploy-key
git config --global user.email "test262@ecma-international.org"
git config --global user.name "Test262 Automation Script"
# The repository on TravisCI is a shallow clone, so the `main` branch must
# be retrieved explicitly, and a local branch created from the `FETCH_HEAD`
# git reference
git fetch origin main
git branch main FETCH_HEAD
./make.py deploy
