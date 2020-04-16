# Versions
```
➜
node --version                                                                                                                                                $(spaceship_rprompt)
v12.16.1

smsfrealestatev2 on  master [✘!] is 📦 v1.0.0 via ⬢ v12.16.1
➜ yarn --version
1.22.4

smsfrealestatev2 on  master [✘!] is 📦 v1.0.0 via ⬢ v12.16.1
➜ git --version
git version 2.23.0

```

# How to change code in the shell?

- See: [Kenekt Admin](https://admin.kenekt.com.au)

- Clone site after it has been produced using Kenekt Admin. The create process invites you to be a collaborator in the git repo produced on create.
```
git clone https://github.com/pdeka/{your repo name here}.git
```

- Run Yarn Install
```
cd {your repo name here}
yarn install
```

- Create site config
```
node site-config.js --theme={your theme name here; can be 'mosman', 'narrabeen', 'randwick'} --themeversion={theme version here}
source .env
```

- Make the changes you want to the SCSS and JS files.

- Start development server on port 8000 using:
```
gatsby develop
```
- Test changes
- Build production assets and run server using:
```
gatsby build
gatsby serve
```
- Test changes

* Push to GitHub
```
git add . 
git commit -m "Add your message"
git push origin master
```

# Troubleshooting

- Sometimes the most recent version of a theme is not applied automatically. Run the following. Its a 'switch it off and then on' script.
```
yarn run update
```

-  Look at whether you have the right version of the theme
```
thepropertydomainv2
➜ npm list |grep narrabeen
```

- Build complains when I do an npm run narrabeen even though it have not changed anything

Sometimes a rebuild of the lib dists are required. Just stop and start
```
lerna run --stream watch:libs
```
