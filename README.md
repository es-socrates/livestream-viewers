### Odysee Livestream Viewers

This is a small script you can use on localhost from any folder to display the number of viewers of your livestream in Odysee. You can import this script into your **OBS or Streamlabs** as a browser source using the URL http://localhost:5173/ generated when deploying the local server using **npx vite**.

### To use it is pretty simple:

1. Please update the repository if you have already downloaded version. *Do we have a version in the first place?*
2. Install these dependencies: ```npm install dotenv``` and ```npm install vite```.
3. Create a **.env** file in the root of the project and add these environment variables.

* ```VITE_CLAIM_ID=xxx```
* ```VITE_API_URL=https://api.odysee.live/livestream/is_live?channel_claim_id=$VITE_CLAIM_ID```

4. You must put the ```ClaimID``` of your Odysee channel in VITE_CLAIM_ID=```here xxx```
5. Open a terminal from the project folder and run the ```npx vite``` command in the terminal and that's it. The server is up and running to receive data from the channel's livestream.
6. To close the server you can use the Ctrl + C command in the Terminal.

## npm install dotenv: A Detailed Explanation

npm install dotenv is a command used in Node.js application development to install a package called dotenv. This package plays a vital role in managing environment variables within a project.

## npm install vite: Short explanation

Vite is a command used to install the Vite package in a Node.js project. Vite is a next-generation build tool that has gained a lot of popularity in recent years, especially in web application development with frameworks such as Vue, React, and Svelte.

As viewers watch your livestream the counter will display the number in real time.

These instructions are more complex than the first version, but are better optimized.