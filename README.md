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
