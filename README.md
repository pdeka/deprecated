# How to deploy a new site?

- Clone Kroxy and run ./scripts/createv2. See details on how-to in Kroxy
- Run npm install to get the most recent version of the deployable code.

```
npm install
```

- Start development server on port 8000 using:
```
npm run develop
```

- Build production assets and run server using:
```
npm run build
npm run serve
```

# How to update an existing site?

You can update to the latest non-breaking version of the site by just running a

```
npm run update
```

However, if you are planning to move to a BREAKING version, you have to change the package version of gatsby-theme-<theme name> yourself, in the package.json.

A BREAKING change is defined as a change in the code that expects a corresponding manual change to the Prismic repo before the site can be run with the new code.
