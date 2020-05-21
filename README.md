# Contact list app 

App to add a list of contacts with auth using json-server-auth as Mock API for authorization.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.


## Get the files

Clone or download the project to your local computer. 

## Run the app

1. Run npm install in the root folder.

```bash
# NPM
npm install 

```
2. Install json-server-auth in development mode

```bash
# NPM
npm install -D json-server-auth

```

3. Once all dependencies are installed, open a new terminal and start the json-server

```bash

json-server-auth db.json

```

You can check if json-server-auth is running on http://localhost:3000/

4. Open a second terminal and run the app

```bash

npm start

```

Or you can use 

```bash

ng serve

```

The app will be running on `http://localhost:4200/`


In the login page, you will need to register as new user. Click in the link Регистрация and fill the form. 

Once you complete the registration form, you will be redirected to the `login page`. 

Fill the login form using your `email` and `password` as typed in the register form. 

If you are logged in successfully, you will see the list of contacts empty. You need to start adding new contacts to the list. 

