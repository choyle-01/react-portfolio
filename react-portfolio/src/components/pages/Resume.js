import React from 'react';

export default function Resume() {
  return (
    <div>
      <h4 className='m-2'>Find My Resume <a href='https://docs.google.com/document/d/1geiaMEMMjcTBS5OU3rXfStyzDAFSoRnUro86trLAiEQ/edit?usp=sharing' target="_blank" rel='noreferrer'>Here!</a></h4>
      <h4 className='m-2'>Front-End Proficencies</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>APIs</li>
      </ul>
      <h4 className='m-2'>Back-End Proficencies</h4>
      <ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySql</li>
        <li>MongoDB</li>
        <li>Handlebars</li>
        <li>REST</li>
      </ul>
    </div>
  );
}
