# How to deploy a new site?

- Clone Kroxy and run ./scripts/createv2. See details on how-to in Kroxy
- Run npm install to get the most recent version of the deployable code.

```
npm install
```
- Run site-config to produce the production configuration files so that code can be deployed to netlify.
This is done automatically by ./cratev2 in Kroxy. You need to run it just once in the life cycle of the project. However, it is idempotent and can be run any number of times.

```
npm site-config
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

# Update old site to new kenekt-sites manually

* Manually clone the repo
```
scripts/.work
➜ git clone https://github.com/pdeka/kenekt-site.git thepropertydomainv2
```

* Edit prismic-configuration.js in the repo.

* Run
```
yarn install
```

* Create site config
```
thepropertydomainv2
➜ node site-config.js --theme=narrabeen
```

* Run yarn install again

* Pull the the old code from GitHub

* Copy shadow files into new repo

* Test
```
npm (or yarn) run develop
```
```
npm run build
```

* Push to GitHub
```
git remote remove origin
git remote add origin https://github.com/pdeka/thepropertydomain.git
git add .
git commit -m "Initial Revision"
git push -f origin master
```


# Troubleshooting

- Sometimes the most recent version of a theme is not applied automatically. Run the following. Its a 'switch it off and then on' script.
```
npm run update
```

-  Look at whether you have the right version of the theme

```
thepropertydomainv2
➜ npm list |grep narrabeen
```
