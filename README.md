# Full-stack software engineer - Novatics Challenge

Challenge to work as software engineer at Novatics

## The Challenge

The objective of this challenge is to evaluate your domain in fullstack development: its organization, style and good practices with code, APIs creation, frameworks knowledge and technologies.

1. We want to see how you approach problem solving and use your skills to create an elegant engineering solution.
2. We want to see how you externalize the problem and communicate your work to other team members.

## The Problem

The Big Brother's are looking for a way to keep registered all the nice things that happen inside the house. They want to be more grateful for each other's acts. We discover 3 kinds of acts that worth to be registered: I learned, Was awesome, I'm grateful. Each participant will receive 6 kudo brooches, 2 for each act, and they could give these brooches for the friend that deserves.

Your challenge is to create a virtual kudo board where the Big Brothers could interact and give your brooches.

### Getting Started

This project was developed with a React/Redux front-end and Ruby on Rails running on the back-end. You should have `yarn` and
`bundle` installed.

You can install all the pre-requisite packages by running the following commands:

```
chmod +x install.sh
./install.sh
```

This will run a bash script to install the required dependencies. If you have trouble with that, you can install those manually by running `bundle install` and `yarn install` inside `/fs-back-end` and `fs-front` respectively. You will also need to manually setup and seed the databases with `rails db:setup db:seed` as well.

After that, you can start the development servers by running:

```
chmod +x start.sh
./start.sh
```

Again, you can start the back-end and front-end servers separately by running `rails s` and `yarn start`.

### Usage

To use the app you need to be logged in. There are some sample accounts provided with the `seeds.rb` file, but you can also
navigate to `localhost:3000/signup` and create an account. You will be required to inform a username, a password and a URL for your
avatar.

The main page allows you to interact with other members by sending them kudos. There are 3 types of kudos and you have 2 of each kind. Each day, your kudos will be replenished.

In the _Timeline_ view, you can check all the kudos that have been sent by everyone.

_Meus Kudos_ allows you to read the kudos that have been sent to you.

_Estatisticas_ shows a Pie Chart with information about how many kudos each member has received.

### API

The Rails API allows users to create and receive kudos, and it also implements a very simple authentication mechanism
with JWT. This authentication system is very bare-bones and only for demonstration purposes and should not be used in a production enviroment.

`/GET kudos`
This endpoint returns all kudos that were created. This is a protected route and the JWT authentication token must be sent.

`/POST kudos`
Creates a POST request to the `/kudos` endpoint. Expects a "kudo" object with a `sender_id`, `recipient_id`, `kudo_type` and
`description` fields.

`/GET /remaining_kudos`
Checks how many kudos the current user can still send that day.

`/POST /login`
Attempts to login a user.

`/POST /signup`
Attempts to sign up a user.

`/GET /user_is_authed`
Checks if user is authenticated.

`/GET /users`
Gets a complete list of current users.
