# Cloud Functions for mbc-website

This folder contains all relevant GCP cloud functions the mbc-website project.  The current build contains the following functions:

## ical-parser

### Function

Downloads a public .ics google calendar file from the exposed private link, parses it into a JSON object, then sends the data over HTTP.

#### API

`GET` -> Retuns JSON object of all public events at the current URL.

### Build / Deploy

The following commands have been developed for easy deployment on GCP Cloud Functions.  All commands use the GCP CLI.

`npm run new` - Creates and names a new cloud function, expresses all necessary attributes.  Must be ran before `deploy`.

`npm run deploy` - Re-deploys the named cloud function on GCP.
