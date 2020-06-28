# express-oas-api

Module to:
* automatically generate OpenAPI (Swagger) specification for existing ExpressJS 4.x REST API applications;
* provide Swagger UI basing on generated specification.

#### WARNINING!
Again: goal of the module is to provide baseline specification which should be reviewed and modified before exposing to REST API clients.
Module should be used in test environment only because it can disclose sensitive information if it is running in production.

## Examples

* [server_basic.js](server_basic.js)
* [server_advanced.js](server_advanced.js)
* [./examples](./examples):
    * [./examples/with-jest](./examples/with-jest)

## How to use

## (Optional) Additions to your package.json

If your service is running not at the root of the server add full base path URL to package.json

```json 
{
  "baseUrlPath" : "/tokens"
}
```

Here is a sample
```json 
{
  "name": "cwt-sts-svc",
  "version": "1.1.48",
  "description": "JWT generation service",
  "keywords": [],
  "author": "",
  "main": "lib",
  "baseUrlPath" : "/tokens",
  "bin": {
    "cwt-sts-svc": "bin/server"
  }
}
```

## Rationale

Goal of the module is to provide developers with Swagger UI in development environments. Module process every request and response therefore it may slow down your app - is not supposed to be used in production environment.

Assuming you have ExpressJS REST API application and you
* don't want to write documentation manually;
* but want to use Swagger ecosystem:
  * keep REST API endpoint documented;
  * provide others with Swagger UI to your REST API;
  * generate client libraries for it with Swagger code generator.

## How does it work?

1. During initialization module iterates through all routes and methods and initializes OpenAPI (Swagger) specification.
2. After an application start module analyze every request/response and fills specification with schemes and examples.
3. Module replace values of password fields with `******`

## Limitations

1. All headers with prefix `X-` treated as a apiKey type headers;
2. Module doesn't recognize enumerations in JSON objects;
