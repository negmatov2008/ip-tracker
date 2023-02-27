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
