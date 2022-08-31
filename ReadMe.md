# Deploying to Vercel

1. Add and commit the changes in the repo
2. Run Command `npm run vercel-deploy` which will run the script and push the changes to main branch.

## Why push dist folder

We need to run the build command to transpile ts to js during build time. However, if we use builds command in vercel.json it doesn't allow the npm run build command to be executed hence, we need to build the project and then push the code.
