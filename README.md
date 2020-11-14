# nodeMailSender
Sending emails with Node JS and a simple UI powered by [tailwind CSS](https://tailwindcss.com).
To use, install node JS and run `npm install` in the root directory of the project, then create a .env file with the following values:
```
mailService=mailService
mailUsername=username
mailPassword=mysecurepass123

```
 run `node index.js`.

To build the client JS for production run `npm run build` in the root directory.
Then, change the path of the `index.js` file within the project to `dist/bundle.js`. This is where the output of webpack can be found.

When developing, make sure the path for the `index.js` file is set to `assets/js/master.js`, as this is the unminified JS file.

