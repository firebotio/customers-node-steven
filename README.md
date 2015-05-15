## Setup
```
$ brew install node    # Install Node and NPM
$ npm install -g bower # Install Bower
$ npm install          # Install Node packages
$ bower install        # Install Bower packages
```

## Development
```
$ npm start      # Compile JS
$ npm run watch  # Compile SCSS
$ node server.js # Start Node server on port 8080
```

## Production
Before deploying, compress assets.
```
$ npm run gulp compress
```

## Customization
To change the default page title
1. Open `app/Data.js`
2. Edit the `layout` section and change the value for `page_title`

## Environment Variables
| Key  | Description | Example |
| --- | --- | --- |
| FIREBOT_API_URL | API URL | https://api.firebot.io |
| FIREBOT_API_VERSION | API version | 1 |
| FIREBOT_APPLICATION_KEY | Application key | xxz2-sdae-asdv-asfe |
| FIREBOT_APPLICATION_ID | Application ID | 1234abcde5678fghi |
