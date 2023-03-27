# Convin

This is a web application built with ReactJS that allows users to create, edit and delete cards containing video/mp3 links under customizable buckets. The application also includes the functionality to move cards from one bucket to another, view card history, and delete single or multiple cards.

### Tech Stack

- React
- Redux / Redux Toolkit / Redux Thunk
- React Router
- TailwindCSS / DaisyUI
- Json Server
- React Toastify

### Features

- Create, edit and delete cards containing video/mp3 links
- Categorize cards under customizable buckets
- Move cards between buckets
- View card play history
- Delete cards

### Getting Started

To get started with this project, follow these steps:

### Installation

Clone the repository and install dependencies using the following commands:

```sh
git clone https://github.com/aj-2000/convin-redux-thunk.git
cd convin-redux-thunk
yarn
```

### Usage

1. Start the json server by running the following command:

```sh
yarn json-server
```

This will start the json server on `http://localhost:8000`

2. Start the development server by running the following command:

```sh
yarn dev
```

This will start the development server on `http://localhost:5173/`

3. Open the application in your browser by visiting `http://localhost:5173/`

### Deployed JSON-Server Backend Repo

- [Repo](https://github.com/aj-2000/convin-json)
- [Deployed Backend](https://convin-json-production.up.railway.app/)

NOTE: Configure this link to your project by changing url in /src/services/axios.js file.

### License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
