import React from 'react';
import chiron from '../../media/Chiron.png'
import movie from '../../media/movie.png'
import weather from '../../media/Weather-Dashboard.png'

export default function Blog() {
  return (
    <div>
      <h1>Projects Page</h1>
      <div>
        <h4>Chiron Medical Portal</h4>
        <p>Chiron is an applicaion with a patient/physican interaction in mind. It is designed as a medical portal that allows patients to sign up and fill out
          their medical form. They are then allowed to view their information and view doctor's to schedule an appointment with. This application makes use
          of bootstrap, handlebars, mysql, sequelize, ES lint, and the calendly api to make a straight foward and responsive user expirence.
        </p>
        <ul class="actions">
          <li><img src={chiron} alt="chiron web application"></img> </li>
          <li><a href="https://polar-peak-28753.herokuapp.com/" target="_blank" rel="noreferrer"><button>Deployed Link</button></a></li>
          <li><a href="https://github.com/choyle-01/chiron-medical-portal" rel="noreferrer" target="_blank"><button>GitHub Repository</button></a></li>
        </ul>
      </div>
      <div class="inner">
        <h4>Weather Dashboard</h4>
        <p>The Weather Dashboard app is an application that through the use of free web api's is able to search for any particular city and give weather information
          on that city. The app gives the current forcast as well as a 5 day forcast and keeps a search history of the cities searched.
        </p>
        <ul class="actions">
          <li><img src={weather} alt="weather dashboard web application"></img> </li>
          <li><a href="https://choyle-01.github.io/weather-app/" target="_blank" rel="noreferrer"><button>Deployed Link</button></a></li>
          <li><a href="https://github.com/choyle-01/weather-app" target="_blank" rel="noreferrer"><button>GitHub Repository</button></a></li>
        </ul>
      </div>
      <div class="inner">
        <h4>Movie Database Project</h4>
        <p>The Movie Database Project is a project that focuses on using API fetch calls to create a fun expirence. The application pulls from the OMDB and giffy to show movie search results and related giffies to the search.</p>
        <ul class="actions">
          <li><img src={movie} alt="movie giphy web application"></img></li>
          <li><a href="https://choyle-01.github.io/Movie-database-project/" target="_blank" rel="noreferrer"><button>Deployed Link</button></a></li>
          <li><a href="https://github.com/choyle-01/Movie-database-project" target="_blank" rel="noreferrer"><button>GitHub Repository</button></a></li>
        </ul>
      </div>
    </div>
  );
}
