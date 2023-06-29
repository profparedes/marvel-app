# Marvel React App

This is a web application that allows users to explore Marvel characters and comics. The project was developed using [Vite](https://vitejs.dev/), [Yarn](https://yarnpkg.com/), [React.js](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/).

The project can be viewed at [https://profparedes-marvel.netlify.app](https://profparedes-marvel.netlify.app).

## Prerequisites

To run this project, you need to have [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) installed on your computer.

## Setup

Before you start, you will need to get your Marvel API keys:

1. Sign up on the [Marvel Developer Portal](https://developer.marvel.com/).
2. After logging in, go to "My Developer Account" to get your public API key and API hash.
3. Clone this repository on your computer.
4. At the project root, copy the `.env.example` file and rename the copy to `.env`.
5. Open the `.env` file and replace `<your_api_key>` and `<your_api_hash>` with your Marvel public and private API keys, respectively.

```
VITE_API_KEY=<your_api_key>
VITE_API_HASH=<your_api_hash>
VITE_API_TS=1
```

## Installation

At the project root, run the following command to install all necessary dependencies:

```
yarn
```

## Running

To run the app, use the following command:

```
yarn dev
```

This will start the development server on port 3000. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the app.

## Tests

This project uses [Jest](https://jestjs.io/) for testing. To run the tests, use the following command:

```
yarn test
```

## Contributions

Contributions are welcome. Feel free to open an issue or make a pull request.

## License

This project is licensed under the MIT license.