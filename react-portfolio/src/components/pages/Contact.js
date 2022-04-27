import React from 'react';

export default function Contact() {
  return (
    <div className='contact'>
      <h2>Contact Page</h2>
      <p>
        Below will be a few ways to contact me. My GitHub and LinkIn as well as my resume. Feel free to contact me if any questions or concerns arise. 
      </p>
      <a href='https://github.com/choyle-01' target='_blank' rel="noreferrer"><button>GitHub</button></a>
      <a href='https://www.linkedin.com/in/michael-hoyle-523143226/' target='_blank' rel="noreferrer"><button>LinkedIn</button></a>
      <a href='https://docs.google.com/document/d/1geiaMEMMjcTBS5OU3rXfStyzDAFSoRnUro86trLAiEQ/edit?usp=sharing' target='_blank' rel="noreferrer"><button>Resume</button></a>
    </div>
  );
}
