## Project Description

![demo](https://thumbs.gfycat.com/DimwittedWeirdIsopod-size_restricted.gif)

  In this project, I made a clone of the [Game 2048](http://2048game.com/) with
a few modifications. I worked on this project because I recently learned [React](https://reactjs.org/).
The only way to get better with a new tool was create things with that tool.
[2048](http://2048game.com/)is the perfect application for [React](https://reactjs.org/).
I got to practice with passing down data and methods in components. I learned
how to use functional and rendering components. I added a developer twist to
this project with [Slack Emojis](https://slackmojis.com/). I got to practice
CSS animation, data maniuplation, and object orientated progamming here too!
I am very proud of this project. Please try it out [here](https://kailinc.github.io/react-2048/).

## Table of Contents

1. [Technologies](#technologies)
1. [Set Up](#set-up)
2. [WireFrames](#wireframes)
3. [User Stories](#user-stories)
4. [Development](#development)
5. [Problem Solving Strategy](#problem-solving-strategy)
6. [Unsolved Problems](#unsolved-problems)
7. [Solution to Unsolved Problems](#solution-to-unsolved-problems)
8. [Takeaways](#takeaways)
9. [Future Tasks](#future-tasks)

## Technologies

-   [React Library](https://reactjs.org/)
-   [JavaScript](https://www.javascript.com/)
-   [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)


## Set Up

1. fork and clone this repository
2. `npm install`
3. `yarn start`

## Wireframes

![Wireframe](public/wireframe1.jpg)

![Wireframe](public/wireframe2.jpg)

  In the beginning, I just drew a rough idea of how I wanted the application to
be. I did not focus on the design aspect of the application at all. I just wanted
an idea of how I wanted the application to look like. I used most of my brain power
on making the features of the application work. Once the application work, I focused
on the design. I went to GitHub and "referenced" other people's css for this game.
I made a few modifications.

<img src="public/landingPage.png" alt="landingPage" style="width: 500px;"/>

## User Stories

  1. As a user, I want to be able to see my score, so I know how I am doing.
  2. As a user, I want to be able to restart a game, so I can keep playing.
  3. As a user, I want to see cool animations, so I can have a great experience.
  4. As a user, I want to see an appealing website, so I can have a great experience.
  5. As a user, I want the board to render according to my arrow keys, so the game is working.
  6. As a user I want to see my current and highscore because I am competitive.
  7. As a user I want to click on links under History, so I can go back in time and correct my mistakes.
  8. As a user I want a congratulatory message when I win, so I feel good about myself and a sense of accomplishment.
  9. As a user I want a loser message when I lose, so I know I messed up.

## Development

  I wanted to work on this project every week day in the semester. However, this semester
is the most intense semester at Boston University. I want to commit at least
5 times each day. I would write psuedo code in class when the professors are
wasting my time. Once I get the time to hack the project, I would use the pseudo
code.

![psuedoCode1](address)
![psuedoCode1](address)
![psuedoCode1](address)

  Initially, I made the game with no animations. It was functional programming.
It was easy to test and I finished it very quickly. The only hard part was
the algorithm for manipulating the data structure to check for matches. I would
write psuedo code and whiteboard any problems I faced. The code for this can be
found in the branch `no-animations`. Once, I finished this and wanted to add animations
to the project, things got gross.

  I had to track information like position, new position, value about each Block.
This would require me to fundamentally change my code. A lot of people were saying
that [Redux](https://redux.js.org/) is a great tool to be used with state management.
I learned it and thought it was gross. I didn't use it in this project because
I thought it didn't help in this application. I will revisit [Redux](https://redux.js.org/) later because
a lot of people from big companies are praising it.

  I used object orientated programming in this project. Theres an object for game and
blocks. I would pass these objects to React Components. OOP was a very interesting and
intuitive way to do things. However, testing it was not as easy as functional programming.
I would reuse code in `no-animations` branch for certain methods in game object.
The process was enjoyable. I faced a road block in css animations and positioning
because I had 0 experience in it. This was not a major issue. I just had to learn [CSS Animations](https://www.w3schools.com/css/css3_animations.asp). Making things move
was just magical.

## Problem Solving Strategy

  Sometimes before writing my code, I would write pseduo code in class. This would
help me tackle the problem and think about any potential problems I would have to
face. It actually was a blessing that I didn't have unlimited access to my computer.
I would think hard about how my code is implemented before writing the code. This
help ensure that my code is high quality.

If I ran into a problem, I would try printing it out, Googling for help, or
whiteboard it out. For problems that I could not solve in the coding session, I would
create an issue on GitHub and explain the situation. Explaining the problem helped
me form an approach to tackle the issue. No one answered my issues, but I was able
to figure out my problems.

## Unsolved Problems

  There are a few annoying problems with CSS animation. Sometimes certain Animations
would not run. However, other animations always ran.

1. Animation for rendering a new block would not always run.
```css
.new {
  transform: scale(0);
  animation: new linear forwards;
  animation-duration: 0.25s;
  animation-delay: 0.2s;
}

@keyframes new {
  from { transform:  scale(0); }
  to { transform: scale(1); }
}
```

2. Animation for adding a score to the current score would not always run.
```css
.addScore {
  color: black;
  position: absolute;
  z-index: 10;
  animation: addScore 0.3s linear forwards;
}

@keyframes addScore {
  0% { transform: translateY(0); opacity: 0.2; }
  75% { transform: translateY(-37.5px); opacity: 1; }
  100% { transform: translateY(-75px); opacity: 0; }
}
```

3. My CSS code is not DRY. There's a lot of code that is repeated. There probably is a
   way in CSS or SASS to make my code DRY.

## Solution to Unsolved Problems

I read on Stack Overflow and Medium that other developers run into this issue to.
On a Medium article, [UI Animations with React — The Right Way](https://medium.com/@joethedave/achieving-ui-animations-with-react-the-right-way-562fa8a91935) ,there seems to be a way to take care of this by using [React Transition Groups](https://facebook.github.io/react/docs/animation.html). This isn't a huge problem and I am sick of
making and playing this game. I will revisit this project to fix it later on.

## Takeaways

- [x] Got a firm grip on React
- [x] Learned Redux
- [ ] Used Redux
- [x] Improved OOP skills
- [x] Improved Functional Programming Skills
- [x] Learned CSS Animations
- [x] Improved CSS Positioning Skills
- [x] Learned CSS Animations
- [x] Mastered Game of 2048

## Future Tasks

- [ ] Add Theme to the game with color theme of Atom Theme One Dark
- [ ] Optimize Code for CSS
- [ ] Optimize Code for Game Object
- [ ] Rename GameObj and Game Component

## Pull requests welcome!

Spotted an error? Something doesn't make sense? Send me a pull request! Thanks!
