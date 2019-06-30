# Github Repository Listing

This is a simple app that allows the user to search the repositories of a user or organisation.

## Note

This project has only been tested on Chrome v75. It may look or behave in unintended ways on other browsers.

## Use

**Install:**  
`npm run install:all`  
An npm script is used to install client and server node modules separately because they each have their own packages. It's just shorthand for `npm i && cd ./client && npm i`.

**Build:**  
`npm run build`  

**Run development:**  
`npm run dev`  
This runs the client and server. The client can be run in silo with `npm run client`, and the server with `npm run server`.

**Run production (run build command first):**  
`npm run server`  
The server serves the build files from root at `localhost:5000`

**Run API tests:**  
`npm run test`

## Setup

The client project files belong in the `client` project subdirectory. This allows for clear separation from the `server` subdirectory which contains an Express app. For development, instead of running the client and server in silos, an npm script `npm run dev` uses `concurrently` to allow webpack and nodemon to run concurrently. This enables easy development as file changes could be made to either client or server and webpack or nodemon will handle reloading accordingly. Webpack also uses an entry in the client's `package.json` to proxy relative API urls to the port the API is actually running on - `"proxy": "http://localhost:5001"`. This works in development only, because when the client app is built, the server serves the static build files, so client and API are running on the same port in production.

## API

For this project the API is purposefully verbose - instead of acting purely as a proxy, it handles request schema validation and data transformation for demonstration purposes. There is also an integration test to cover the 400 error when the request query is invalid, and 200 when the API successfully GETs a payload back from Github API. Nock is used to intercept network calls to map requests with response payloads and headers.

## Client

The client was constructed using `create-react-app`. Redux is used for state management. There is only one container component `SearchList` that ties the app state to the other components. This is needed as the `Search` and `Pagination` components both call a `requestRepos` action, however they both contribute to different parts of the request data (`Search` provides `userType`, `userName`, `type` and `sort`, while `Pagination` provides `page` (page number)). The store holds these values so that `requestRepos` can be called by either component. There are only two actions and corresponding reducer cases - `REQUEST_REPOS` and `RECEIVE_REPOS`. These handle updating the search query values and the corresponding `repos` and `pages` values. The `pages` value represents the last page of the paginated results. Instead of directly using the `link` header from the Github API for pagination, the Express API parses it into the response payload. This keeps the logic of the `Pagination` component agnostic, as it should not need to care if the pagination is used for Github or any other service - all it needs to care about is the props that are passed in (`lastPage` and `range`).

## SASS

Installing `node-sass` easily enables the use of SASS without any other configuration (perk of `create-react-app`). Instead of using css-modules, the styles are decoupled from the app by ensuring that each root node in a component has a `className` that mirrors the name of the component. In the SASS file all the styles and classes are nested under the component's `className` to ensure safe scope. This decoupling means that SASS could be swapped out with another CSS framework and no changes need to be made to the components.  

The `index.scss` file holds the global variables that are consumed by component SASS files. This includes border, colors, padding, etc.

## Deployment

As this is just a nodejs app, it can be contained using Docker then exposed via a port mapping from 5000 to 8080 or 443. As it's contained it can be deployed to a cluster and handled by an orchestrator such as Kubernetes. Alternatively it can be cloned and built on a server with an NGINX reverse proxy.

For a small demonstration there is a `Dockerfile` included in this project. Simply run `docker build -t app .` then `docker run -p 5000:5000 -t app` and checkout `http://localhost:5000` for the app.