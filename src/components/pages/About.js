import React from 'react';
import me from '../../media/me.jpg'

export default function About() {
  return (
      <div className='about-me'>
        <h2>About Me</h2>
        <p>
          My name is Michael Hoyle and I am a full stack web developer.
          I have learned throught the UNCC web development bootcamp
          and have created this page as a way to show a few of my projects.
          I am 20 years old and live in North Carolina.
          I have 2 dogs that I love very much and enjoy spending
          time with. In my free time I enjoy gaming, playing guitar, and prop
          building. As a web developer my goal is to be able to design web pages and applications that work efficently and effectively and to
          continuously develop my own skills and abilities. The goal of this
          webpage is to give a look into a few of those projects that I have
          worked on and to showcase my developing skill as a fullstack web
          developer. In addition it will also give several ways to get in
          touch with me in case of questions or inquiries.
        </p>
        <img src={me} alt="Michael Playing Guitar" className='img-fluid'></img>
      </div>
  );
}
