# IP Address Tracker

![App Homepage](https://github.com/Harris-Ryan/ip-tracker/blob/main/src/assets/ip-tracker-homepage.png?raw=true)

## Overview

This project is an app that allows users to input an IP Address and have the information of that IP (geolocation, country, timezone, isp, etc...) populate in the app (Via an API endpoint), along with a complementary visial representation of the geolocation using a leaflet map API. See below for more information on the technologies used.

### Technologies Used

- React (Vite)
- Typescript
- Tailwind CSS
- Mobile and desktop optimized designs
- [LeafletJS](https://leafletjs.com/)[LeafletJS](https://leafletjs.com/): Used to generate the interactive on-screen map
- [IP Geolocation](https://ipgeolocation.io): Used to request information about a given IP Address

### What I Learned

This was the first project I had worked more seriously with Typescript as well as with multiple API's. My biggest takeaway from this project is how to conceptualize the project's structure and functionality (file structure, page layouts, props to pass, how to balance using two separate API's that can complement eachother) from both the user's standpoint (What looks the best and has excellent functionality), as well as the developer (What is the optimal solution for this problem and how can I integrate it into the code that is already existing?).

There were a number of roadblocks I encountered along the way. Primarily, these issues stemmed from my lack of specific knowledge of the API's I was using to retreive and display the information, but usually, this problem is easily fixed with looking into the API's documentation.

### Continued Development

This project will continue to be worked on, but this will primarily be through the design (CSS) aspect of the project in order to further optimize the view for different devices and screen sizes as well as clean up the overall layout to have it looking as clean as possible.

### Deployment Instructions

This app uses a GitHub Actions workflow to deploy to GitHub Pages, where it is hosted. The app uses a separate 'gh-pages' git branch with only the projects 'dist/' folder which contains the output of the build. Eventually, this process will be fully automated through GH Actions. It will be triggered automatically on a change to the 'main' branch, just need to find time to implement.

Fow now, the instructions are as follows:

1. Pull/Merge all changes into 'gh-pages' branch so it is most up-to-date

2. Run `pnpm build` on the 'main' branch

## Author

- Portfolio Website - [Ryan Harris](https://www.eryanharris.com)
