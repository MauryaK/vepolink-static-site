# AWS Static Hosting Plan

Target host: `www.vepolink.com`

Recommended setup:

- S3 bucket: private origin for static files
- CloudFront: public HTTPS CDN
- ACM certificate: `us-east-1`, covering `www.vepolink.com` and optionally `vepolink.com`
- Route 53: `A/AAAA` alias from `www.vepolink.com` to CloudFront
- CloudFront Function: `deploy/cloudfront-clean-urls.js` for directory index rewrites, `/about -> /about/`, `/product -> /product/`, `/wqms -> /wqms/`, and apex-to-www redirects

## Local Deploy Sync

After AWS resources exist, sync the site files:

```bash
aws s3 sync . s3://www.vepolink.com \
  --delete \
  --exclude ".git/*" \
  --exclude ".DS_Store" \
  --exclude "deploy/*" \
  --exclude "assets/team/*.png"
```

Then invalidate CloudFront:

```bash
aws cloudfront create-invalidation \
  --distribution-id DISTRIBUTION_ID \
  --paths "/*"
```

## DNS

Create these Route 53 records after CloudFront is deployed:

- `A` alias: `www.vepolink.com` -> CloudFront distribution
- `AAAA` alias: `www.vepolink.com` -> CloudFront distribution

Optional but recommended:

- Redirect apex `vepolink.com` to `https://www.vepolink.com/`

## Notes

- The site canonical URLs, Open Graph URLs, schema URLs, sitemap, and robots file are configured for `https://www.vepolink.com`.
- `about.html` is a compatibility redirect to `/about/`.
- `product.html` is a compatibility redirect to `/product/`.
- The former water-focused homepage now lives at `/wqms/`.
- Clean URL support requires the CloudFront Function in `deploy/cloudfront-clean-urls.js`.
