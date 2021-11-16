# Proof of concept (POC) - Module Federation
This project shouldn't used as a reference. It's for study purposes only.

<p align="center">
    <img alt="Application screenshot" src="https://user-images.githubusercontent.com/33819657/141891068-ee37b65a-d95c-4613-96a6-344e33e96557.png" />
</p>

### References
[Module Federation](https://webpack.js.org/concepts/module-federation/)

## Installing

### Host application (React)
```shell
  cd poc-module-federation-frontend
  cd ./react-shell-product-page
  npm install
```

### Sales experience application (Angular)
```shell
  cd poc-module-federation-frontend
  cd ./angular-atom-sales-experience
  npm install
```

## Running
All applications must be running, to prevent unrenders

Host
```shell
  cd ./react-shell-product-page
  npm run start
```

Sales experience
```shell
  cd ./angular-atom-sales-experience
  npm run start
```

## Testing
```shell
  cd ./react-shell-product-page
  npm run cy:install && npm run test
```
