[![Build Status](https://travis-ci.org/hisplan/angular-seed.svg?branch=master)](https://travis-ci.org/hisplan/angular-seed/)

# `angular-seed` — the seed for AngularJS apps

This project is an application skeleton for a typical AngularJS v1.5.0 web app. You can use it
to quickly bootstrap your angular webapp projects and dev environment for these projects.

### Install Dependencies

```
npm install
```

### Run the Application

```
npm start
```

Now browse to the app at [`http://localhost:8000/index.html`](http://localhost:8000/index.html).


## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests
  view1/                --> the view1 view template and logic
    view1.html            --> the partial template
    view1.js              --> the controller logic
    view1_test.js         --> tests of the controller
  view2/                --> the view2 view template and logic
    view2.html            --> the partial template
    view2.js              --> the controller logic
    view2_test.js         --> tests of the controller
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```


## Testing

### Running Unit Tests

Karma will start watching the source and test files for changes and then re-run the tests whenever any of them
changes.

```
npm test
```

You can also ask Karma to do a single run of the tests and then exit.

```
npm run test-single-run
```

### Running End-to-End Tests

Before starting Protractor, open a separate terminal window and run:

```
npm start
```

Run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

## Updating Angular

Since the Angular framework library code and tools are acquired through package managers (npm and
bower) you can use these tools to easily update the dependencies. Simply run the preconfigured
script:

```
npm run update-deps
```

This will call `npm update` and `bower update`, which in turn will find and install the latest
versions that match the version ranges specified in the `package.json` and `bower.json` files
respectively.

### Running the App in Production

This really depends on how complex your app is and the overall infrastructure of your system, but
the general rule is that all you need in production are the files under the `app/` directory.
Everything else should be omitted.
