const articles = [
    {
        name: 'learn-react',
        title: 'The Fastest Way to Learn React',
        content: [
            `After we got clarity about learning only React and React's prerequisites, let's see how to learn React from zero from there. I strongly believe the best start is going through the official React documentation. The documentation keeps up with the recent changes, is not biased, teaches you everything the React way, and is put together by the React core team and the React community in your interest
            Being referred to the documentation of a library as a beginner in web development can be intimidating. But I strongly believe it's the best way to learn something new. On your career path to becoming a developer, you will get used to learn new things with the documentation of the new thing, so why not get used to it now? It comes with certain benefits to learn documentation driven:
            `,
            `beginner tutorial
            no commercial interest
            opinionated way of doing things
            thoughtfully put together by core contributors and community
            latest material and updates for new versions
            API references
            Every time I pick up a new tech, I don't check any courses or books, I go straight to the tech's documentation and check whether there is a beginner tutorial. Often there is one and that's my entry point into a new world. From there, I can always check for other learning material, but my starting point will always be the official documentation of the new thing I intend to learn. After all, that's why I write my tutorials and books in close relation to the documentation by always refereing it in my guides. That's how beginners learn to use the documentation and that's what will make them more efficient and effecrtive when learning a new tech in the future.`,
            `Learn React with Projects
            After you went through the React beginner tutorial from the React documentation and learned the basics of React from scratch, continue learning by building a project yourself before learning any other tech. It's not always simple to come up with project ideas, but there is plenty of inspiration out there.
            
            For instance, there are also people who want to learn React by building games. I guess you will find plenty of React Tic Tac Toe implementations out there. Implement the game in React yourself and compare your solution to the other solutions. You will learn from your mistakes and learn to evaluate your source code against the implementation by others.`,
            `Learn React by Doing
            Learn React by doing is one of the most common recommendations you will get to hear from other developers, it applies to almost everything in life, because every task will present you with a new challenge to grow as a React developer. Also it is too easy to passively consume video courses, books, and tutorials. Get your hands dirty and implement something yourself. Get stuck with a problem, become desperate, ponder over the problem by taking time off the screen, solve the problem eventually, and reap the fruits of it. That's the basic framework of learning anything.
             `, `Learn React every Day
             Confront yourself to stick to coding every day. You can participate in the 100 Days of Code challenge, write about it on Twitter or on your website. Make it a daily habit. Only when sticking to it for a while, by having the persistence and by coding every day, you will eventually become a React developer. It's a marathon and not a sprint.
             `, `Learn React in Public
             The best way to learn something new is to learn it in public. Confront yourself with the feedback from other React developers by showing off your achievements. If you have reached a milestone with your React project, show it to others and ask for their feedback. These are a couple of commonly known platforms to share ideas around React:`, `Step 5: Start server
             Twitter
Reddit
Reactiflux
Spectrum
You will not only get feedback from people there, but also dive more into React by joining discussions. Be part of the community. Another great way to learn something new yourself is to explain it to someone else. Maybe you are one step ahead of a fellow React beginner and can help them out. Checkout the React Beginner Thread in the React Subreddit where you can help fellow React developers to solve their proble
             `, `Learn to use React
             After you went through the beginner tutorial in React's docs and started to implement a React project yourself, learn to use React with all its facets. React has only a slim API surface area, so try to get proficient with it.
             
             Learn about React's JSX syntax
             Learn about React Components
             Learn about React Component Composition
             Learn about React Props
             Learn about React State
             Learn and understand React. In the end, it doesn't need much to create a React component that returns JSX, to use a React component in another React component while arranging them in a component hierarchy, to pass data from component to component with props, and to make components interactive with state. That's the gist of React. Learn React in depth by applying your learned skills in your project and not by consuming endless of content.`
        ]
    }, {
        name: 'learn-node',
        title: 'How to Build a Node Server in 10 Minutes',
        content: [
            `Step 1: Install node
            Ok, this must take more than 5 minutes, but if you have Node already, skip this and let's go!
            
            Install latest LTS version for your OS
            https://nodejs.org/en/download/
            To test if it works, create a file server.js in your project root
            // server.js
            console.log("Hello World!");
            `,
            `And test it out
            $ node server.js
            Hello world!
            Nice! We're ready to do some backend-fu!`,
            `Step 2: Setup npm
            We use NPM to manage our node packages.
            Initialize npm and let it take defaults.`,
            `Step 3: Install and import express middleware
            A middleware is a piece of code that has access to the request and response object. For now,
             think about express making things easier for us by being a "middle-man" 🕵️ 
             between our code and Node's HTTP stuff.
             $ npm install express
                // server.js
                const express = require('express');
                const server = express();
             `, `Step 4: Add a JSON route handler
             Whenever client requests/accesses "/json" (localhost:4000/json), send JSON which is "Hello world" message`,
            `server.get("/json", (req, res) => {
                res.json({ message: "Hello world" });
             });
             `, `Step 5: Add a HTML route handler
             Whenever client requests/accesses "/" (localhost:4000), send file which is an HTML page
             
             __dirname holds the directory of current module (server.js) ...
             server.get("/", (req, res) => {
                res.sendFile(__dirname + '/index.html');
             });
             Create index.html in same level as server.js
             Go to town with the HTML! Or you can copy-paste this if you like blue headings.`, `<!DOCTYPE html>
             <html lang="en">
              <head>
                <title>Node Workshop</title>
              </head>
              <body>
                  <h1 style="color: blue;">
                     Express: HELLO WORLD
                  </h1>
              </body>
             </html>`, `Step 5: Start server
             // server.js
             ...
             const port = 4000;
             
             server.listen(port, () => {
                 console.log('Server listening at { port});
             });
             # CTRL+C to stop server if currently running
             $ npm start
             `, `Step 6: Test
             # on another terminal
             
             $ curl http://localhost:4000/json
             {"message":"Hello world"}
             
             $ curl http://localhost:4000
             <!-- index.html --> ...
             Or open a browser and go to
             
             http://localhost:4000/json
             http://localhost:4000`,
        ]
    }, {
        name: 'my-thought-on-resumes',
        title: 'My Thoughts on Resumes',
        content: [
            `Today is the day I talk about something which scares most people: resumes.
            In reality, I'm not sure why people have such a hard time with proin congue
            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. 
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ]
    },
    {
        name: 'learn-angular',
        title: 'What is Angular',
        content: [
            `What is Angular?
            Angular is an open source web application framework lead by Google and by community developers.`,
            `It is based on TypeScript which is a strict syntactical superset of JavaScript which adds optional static typing to the language. While Typescript needs to be compiled it does offer a benefit in prototyping.
            `, `Getting Started
            To use the Angular framework you should be familiar with:
            
            JavaScript
            HTML
            CSS`, `Another important thing to understand is that Angular apps require libraries that are available as npm packages.

            Step 1: Install the Angular CLI 👨‍💻
            To install the CLI using npm, open the terminal and enter
            npm install -g @angular/cli`, `Step 2: Create a workspace and initial application 👷‍♂️
            To create a new workspace and initial starter app:
            
            Run the CLI command ng new and provide the name my-application, as shown here:
            ng new my-application
            `,
            `Angular will now get to work building the application. The client will create all folders and files necessary.

            To run type:
            ng serve
            This will run the application through localhost:4200/`,
        ]
    },
];




export default articles;