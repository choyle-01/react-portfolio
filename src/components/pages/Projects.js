import React from 'react';
import chiron from '../../media/Chiron.png'
import movie from '../../media/movie.png'
import weather from '../../media/Weather-Dashboard.png'
import password from '../../media/password.png'
import noteTaker from '../../media/Note-taker.png'
import planner from '../../media/planner.png'

export default function Project() {
  return (
    <div className='projects container'>
      <div className='row'>
        <h2>Projects Page</h2>
        <div className='example col-4 p-3'>
          <h4>Chiron Medical Portal</h4>
          <div className='pContainer'>
            <p>Chiron is an applicaion with a patient/physican interaction in mind. It is designed as a medical portal that allows patients to sign up and fill out their medical form. They are then allowed to view their information and view doctor's to schedule an appointment with. This application makes use of bootstrap, handlebars, mysql, sequelize, ES lint, and the calendly api to make a straight foward and responsive user expirence.
            </p>
          </div>
          <ul>
            <li><img src={chiron} alt="chiron web application" className='img-fluid' ></img> </li>
            <li><a href="https://polar-peak-28753.herokuapp.com/" target="_blank" rel="noreferrer"><button className='btn-primary btn m-2'>Deployed Link</button></a></li>
            <li><a href="https://github.com/choyle-01/chiron-medical-portal" rel="noreferrer" target="_blank"><button className='btn-primary btn m-2'>GitHub Repository</button></a></li>
          </ul>
        </div>
        <div className='example col-4 p-3'>
          <h4>Weather Dashboard</h4>
          <div className='pContainer'>
            <p>The Weather Dashboard app is an application that through the use of free web api's is able to search for any particular city and give weather information
            on that city. The app gives the current forcast as well as a 5 day forcast and keeps a search history of the cities searched.
            </p>
          </div>
          <ul>
            <li><img src={weather} alt="weather dashboard web application" className='img-fluid'></img> </li>
            <li><a href="https://choyle-01.github.io/weather-app/" target="_blank" rel="noreferrer"><button className='btn-primary btn m-2'>Deployed Link</button></a></li>
            <li><a href="https://github.com/choyle-01/weather-app" target="_blank" rel="noreferrer"><button className='btn-primary btn m-2'>GitHub Repository</button></a></li>
          </ul>
        </div>
        <div className='example col-4 p-3'>
          <h4>Movie Database Project</h4>
          <div className='pContainer'>
          <p>The Movie Database Project is a project that focuses on using API fetch calls to create a fun expirence. The application pulls from the OMDB and giffy to show movie search results and related giffies to the search.</p>
          </div>
          <ul>
            <li><img src={movie} alt="movie giphy web application" className='img-fluid'></img></li>
            <li><a href="https://choyle-01.github.io/Movie-database-project/" target="_blank" rel="noreferrer"><button className='btn-primary btn m-2'>Deployed Link</button></a></li>
            <li><a href="https://github.com/choyle-01/Movie-database-project" target="_blank" rel="noreferrer"><button className='btn-primary btn m-2'>GitHub Repository</button></a></li>
          </ul>
        </div>
        <div className='example col-4 p-3'>
          <h4>Password Generator</h4>
          <div className='pContainer'>
          <p>This project uses simple JavaScrips to create a randomized password. It gives the user several options on what they would like in their password and generates a password based on their inputs.</p>
          </div>
          <ul>
            <li><img src={password} alt="password generator web application" className='img-fluid'></img></li>
            <li><a href="https://choyle-01.github.io/random-password-generator/" target="_blank" rel="noreferrer"><button className='btn-primary btn m-2'>Deployed Link</button></a></li>
            <li><a href="https://github.com/choyle-01/random-password-generator" target="_blank" rel="noreferrer"><button className='btn-primary btn m-2'>GitHub Repository</button></a></li>
          </ul>
        </div>
        <div className='example col-4 p-3'>
          <h4>Note Taker</h4>
          <div className='pContainer'>
          <p>The Note Taker project is a simple project that is able to take notes and store them in a database to be pulled back up at any time by the user though the use of express and some simple routing.</p>
          </div>
          <ul>
            <li><img src={noteTaker} alt="note taker web application" className='img-fluid'></img></li>
            <li><a href="https://polar-hollows-30972.herokuapp.com/notes" target="_blank" rel="noreferrer"><button className='btn-primary btn m-2'>Deployed Link</button></a></li>
            <li><a href="https://github.com/choyle-01/great-note-taker" target="_blank" rel="noreferrer"><button className='btn-primary btn m-2'>GitHub Repository</button></a></li>
          </ul>
        </div>
        <div className='example col-4 p-3'>
          <h4>Schedule Project</h4>
          <div className='pContainer'>
          <p>The Schedule Project is a simple daily planner using javascript, local storage, and moment.js. It allows the user to see what time of day it is and any activities they have planned out for the remainder of the day.</p>
          </div>
          <ul>
            <li><img src={planner} alt="schedule web application" className='img-fluid'></img></li>
            <li><a href="https://choyle-01.github.io/fun-schedule//" target="_blank" rel="noreferrer"><button className='btn-primary btn m-2'>Deployed Link</button></a></li>
            <li><a href="https://github.com/choyle-01/fun-schedule" target="_blank" rel="noreferrer"><button className='btn-primary btn m-2'>GitHub Repository</button></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
