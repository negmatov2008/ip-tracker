# IP Address Tracker

![App Homepage](https://github.com/Harris-Ryan/ip-tracker/blob/main/src/assets/ip-tracker-homepage.png?raw=true)

## Overview

This project is an app that allows users to input an IP Address and have the information of that IP (geolocation, country, timezone, isp, etc...) populate in the app (Via an API endpoint), along with a complementary visial representation of the geolocation using a leaflet map API. See below for more information on the technologies used.

### Technologies Used

- React (Vite)
- Typescript
- Tailwind CSS
- Github Actions for CI/CD and Github Pages for hosting
- [LeafletJS](https://leafletjs.com/)[LeafletJS](https://leafletjs.com/): Used to generate the interactive on-screen map
- [IP Geolocation](https://ipgeolocation.io): Used to request information about a given IP Address

### What I Learned

This was the first project I had worked more seriously with Typescript as well as with multiple API's. My biggest takeaway from this project is how to conceptualize the project's structure and functionality (file structure, page layouts, props to pass, how to balance using two separate API's that can complement eachother) from both the user's standpoint (What looks the best and has excellent functionality), as well as the developer (What is the optimal solution for this problem and how can I integrate it into the code that is already existing?).

There were a number of roadblocks I encountered along the way. Primarily, these issues stemmed from my lack of specific knowledge of the API's I was using to retreive and display the information, but usually, this problem is easily fixed with looking into the API's documentation.

### Cloning the Repo

Anyone is welcome to clone this repo and explore how it works, just follow these steps!

1. Run the following command in your terminal

```console
$ git clone https://github.com/Harris-Ryan/ip-tracker.git
```

2. `cd` into the newly created directory (the root directory of the cloned repo) and run the following command to install all dependencies (This repository uses pnpm as its Node package manager)

```console
$ pnpm install
```

3. After this, you should be able to open the project in your editor and run `pnpm dev` to start the dev server. To test the production version of the app, you will need to run `pnpm build` to generate the production build folder (dist/) and then run `pnpm preview` which will start a server using the production build code.

### CI/CD

This repo uses a simple Github Action workflow to build and deploy the app with Github Pages. This workflow is set to run on every push to the main branch. Once this runs, it will build the project, generate a 'dist' folder, place it on a subtree branch (gh-pages), and that is what Github Pages uses to host the app.

## Author

- Portfolio Website - [Ryan Harris](https://www.eryanharris.com)
