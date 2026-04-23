# Jarrovians RUFC Site

## Senior Team RFU Sync

The senior team pages now read from a generated RFU data file for:

- Mens 1st XV
- Mens 2nd XV
- Womens XV

To refresh fixtures, results, and league tables from England Rugby for the configured season, run:

```bash
npm run sync:rfu
```

That command rewrites [seniorRfuData.js](F:/projects/myclub/src/data/seniorRfuData.js:1), which is what the site uses for those three senior team pages.

After syncing, rebuild or redeploy the site as normal.
