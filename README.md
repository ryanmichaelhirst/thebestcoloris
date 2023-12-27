# TheBestColorIs

Remix web app that lets you declare the best color. Uses a plain html form to record the user's color choice, location from ip address, comment (optional), and name (optional).

Based on this reddit post: https://www.reddit.com/r/InternetIsBeautiful/comments/16q21mt/website_where_you_can_set_the_best_color_it_will/

## Installation

```bash
pnpm install
```

## Development

Requires docker to run the local database.

```
pnpm dev
```

## Production

```
pnpm build
```

```
pnpm start
```

## Railway

This web app is deployed on https://railway.app/. Railway will automatically detect the Dockerfile to build and deploy the web app.

Add a service for this github repo (your fork) to deploy the app, and then add a second service for the postgres db.
You will need to add an env var `DATABASE_URL` on the app service using the creds from the postgres service on railway.
