# React Joke Generator

[Use the app here](https://reese-parker.github.io/joke-generator/)


## Description

A joke generator - users can request a random dad joke.

## Design

* Components are styled using CSS Modules.
* Jokes are sourced from the icanhazdadjoke.com API using the Axios library for HTTP requests.
* Jokes are saved with useState. The app requests a joke on page load with useEffect.


## How it works

* The getJokes function makes an HTTP request to the icanhazdadjoke.com API using the Axios library, then saves the response to state. An error is logged in the console if the API call fails.
* useEffect  calls the getJokes function in the JokeGenerator component on page load and renders the text in a Joke component.
* The joke request button calls the getJokes function on click.

## Installation

* Clone the repo by opening terminal and typing

```bash
$ git clone https://github.com/reese-parker/joke-generator.git
```

* Navigate to the new folder by typing into terminal:
```bash
$ cd joke-generator
```

* Install the required dependencies by typing into terminal:
```bash
$ npm install
```
* Run the project by typing into terminal:
```bash
$ npm start
```

