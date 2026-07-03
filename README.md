# scroix.github.io

Personal portfolio site, built with [Hugo](https://gohugo.io/).

## Deploying

Pushing to `master` triggers the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which builds the site with a pinned Hugo
version and publishes it to GitHub Pages. No local build step is required.

## Local preview

```sh
hugo server
```

Requires Hugo (`brew install hugo`). The site is verified against the Hugo
version pinned in the deploy workflow.

## Future: Cloudflare Pages

To move hosting to Cloudflare Pages with a custom domain later:

1. Connect this repo in the Cloudflare Pages dashboard
   (build command `hugo --minify`, output directory `public`,
   env var `HUGO_VERSION` matching the workflow's pin).
2. Change `baseURL` in `config.toml` to the custom domain.
3. Add the domain in Cloudflare Pages and point DNS at it.
4. Delete `.github/workflows/deploy.yml` (Cloudflare replaces it).
