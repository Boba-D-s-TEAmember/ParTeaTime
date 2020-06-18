# ParTeaTime

ParTeaTime is a social network that lets users share their experiences with tea. Sweet!

![Login Screen](https://i.imgur.com/3T2rEao.png)


## Installation

Before you begin, clone the repository to your computer.


### Client

1. Navigate to the `client` folder within the repository.
2. Run `npm install` to install the client dependencies.
3. Run `npm start` to start the app in development mode. Go to [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Server

1. Navigate to the `server` folder within the repository.
2. Run `npm install` to install the server dependencies.
3. Run `npm start` to start the server.


## Inspiration

We were inspired to make this app because we missed boba tea. Boba tea is not just a drink it is an experience. For those of you who do not know boba tea is Taiwanese tea-based drink, that has many different flavors. Typically there are tapioca pearls or lichee jelly in the tea. Getting boba was was time to enjoy the comfort of a warm drink or to be energized by a cold drink. We would get boba tea or just tea in groups, enjoying each other's company or alone and savor the taste. We missed not only the tea but the Tea Shop experience. People watching, comparing drinks, and hanging with friends. Our inspiration for this hack was to bring a little part of the boba tea experience to those at home. We know these are difficult times, but we hoped to be able to distract or bring comfort to someone who needs it.

## What it does

This project brings the ParTea to you! We allows users to upload their own pictures, titles and captions of their own tea or creations. Upload your home-made boba or tea! Post your latest creation and the recipe to go alongside with it! We have a fun BobaQuiz that categorizes users into their favorite tea flavor. Our navigation bar allows users to easily go through pages, and our Feed shows them what other users have shared! Consider this a wholesome social media, perfect for tea lovers everywhere!

## How we built it
We used react.js for frontend and MongoDB, express, and node js for the back end. We deployed the backend to Google App Engine and the frontend to Firebase Hosting. The basic structure of the app is that it first uploads pictures to google cloud storage and returns the global link and then the link gets stored on MongoDB with other attributes. That way we can query posts with pictures on the frontend. 

## Challenges we ran into
We were having trouble uploading pictures to google cloud from the backend since there were many security measures imposed by google cloud service but eventually we got it to post. Using MongoDB as a database was challenging because it was something none of us had done before. Some of our members are very new to coding and so learning and employing new languages was challenging! 

## Accomplishments that we're proud of
We are proud of our project! We are proud that we were able to overcome our challenges. We are proud that we were able to use git to collaborate on this virtual hackathon! We are proud of the new things we learned and we're able to apply.

## What we learned
One of our team members learned a ton about MongoDB specifically the way it works with node.js and found building Schema was quite engaging. Another member learned React.js and how to apply it to front end.
 
## What's next for ParTeaTime
We will continue to use ParTeaTime as our own personal friend group social media. We will expand it with new features to make it even more fun for all of us!
