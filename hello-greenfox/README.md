# project-phase

Hello, Green Fox Academy!
✔ create a GitHub repository under your @done(19-01-15 11:04)
✔ clone that repository and work in that from now @done(19-01-15 11:04)
✔ create a package.json file @done(19-01-15 11:04)
✔ add react and react-dom to the dependencies: @done(19-01-15 11:04)
npm install react react-dom --save
☐ add the following packages to the development dependencies and rtfm on ther npm site:

✔ babel-core @done(19-01-15 11:16)

✔ babel-loader @done(19-01-15 11:16)
- npm i babel-loader
✔ babel-preset-env @done(19-01-15 11:35)
- npm install --save-dev babel-cli babel-preset-react
- npm install babel-preset-env --save-dev
✔ babel-preset-react @done(19-01-15 11:17)
✔ webpack @done(19-01-15 11:35)
✔ webpack-cli @done(19-01-15 11:36) 
- npm install --save-dev webpack-cli
✔ webpack-dev-server @done(19-01-15 11:37) 
- npm install webpack-dev-server --save-dev
✔ eslint @done(19-01-15 12:27)
- npm i eslint
// npm install babel-core babel-loader babel-preset-env babel-preset-react webpack webpack-cli webpack-dev-server eslintbabel-core  babel-loader babel-preset-env babel-preset-react webpack webpack-cli webpack-dev-server eslint --save-dev --save-dev

Browser Support
While webpack-dev-server transpiles the client (browser) scripts to an ES5 state, the project only officially supports the last two versions of major browsers. We simply don't have the resources to support every whacky browser out there.
✔ configure webpack: — webpack.config.js @done(19-01-15 12:27)
documentation: 
  https://webpack.js.org/configuration/dev-server/#devserver
✔ configure eslint using Airbnb's config for React: 
— .eslintrc.js
✔ configure babel: @done(19-01-15 12:29)
— .babelrc
✔ set up the following npm scripts to be able to run and lint the project @done(19-01-15 12:35)
✔ "start:dev": "webpack-dev-server --mode development" @done(19-01-15 12:35)
✔ "lint": "./node_modules/eslint/bin/eslint.js ." @done(19-01-15 12:35)
✔ create an HTML file that will use the bundled JavaScript: — dist/index.html @done(19-01-15 12:35)
✔ create the entry point in the src folder — src/index.js @done(19-01-15 12:35)

✔ ignore the necessary files: — .gitignore @done(19-01-15 12:35)
node_modules/
dist/*
!dist/index.html
☐ try it out with npm run start:dev! 🎉