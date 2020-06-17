import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About Page";
  }, []);

  return (
    <div>
      <h1>About me</h1>
      <h3>I'm a web developer.</h3>
      <p>
        I enjoy turning complex problems into simple, beautiful and intuitive
        designs. When I'm not coding,writing , listening podcast,watching
        movie,reading and tweeting or pushing pixels.
      </p>
      <p>
        Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices
        dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu.
        Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas
        viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo
        luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue
        tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam.
        Vivamus accumsan dui in facilisis aliquet.,
      </p>
      <p>
        UI design is all about problem-solving. The result is an interface
        that’s simple, beautiful and easy to use. I’ve read quite a few UI
        design books over the years and they’ve definitely helped me gain a
        solid foundation in the principles of interface design. I love reading,
        but there are only so many hours in a day, so you need to choose your
        books wisely. With so many UI design books out there, it’s sometimes
        hard to figure out which ones are worth reading. With this in mind, I’ve
        put together a list of my favourite UI design books that I hope you’ll
        find helpful. Let me know what your own favourites are and how they’ve
        improved your UI design process.
      </p>
    </div>
  );
};

export default About;
