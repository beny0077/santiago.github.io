# SantiagoGithubIo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.




/*:root {*/
/*  --dark-purple: #170021;*/
/*  --light-purple: #EBE8FC;*/
/*  --white-wash: #FAF9FE;*/
/*  --text-color: #232323;*/
/*  --navbar-background: linear-gradient(135deg, #080808, #0f0016);*/
/*  --hero-background: linear-gradient(135deg, #1f0529, #1e002c);*/
/*  --section-background: linear-gradient(135deg, #441e52, #232323);*/
/*  --dark-orange: #370001;*/
/*  --orange: #FF4500;*/
/*  --background-image: radial-gradient(farthest-corner at 40px 40px, #080808, #370001, #0f0016);*/
/*  !*--background-image: url("/assets/Agile.png");*!*/
/*}*/

/*body {*/
/*  font-family: 'Roboto', sans-serif;*/
/*  color: var(--text-color);*/
/*  background-color: var(--white-wash);*/
/*  margin: 0;*/
/*  padding: 0;*/
/*}*/

/*.home-container {*/
/*  max-width: 98%;*/
/*  margin: auto;*/
/*  padding: 20px;*/
/*  background-image: var(--background-image);*/
/*}*/

/*.navbar {*/
/*  position: sticky;*/
/*  top: 0;*/
/*  background: var(--navbar-background);*/
/*  padding: 10px 20px;*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  gap: 20px;*/
/*  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);*/
/*  z-index: 10;*/
/*}*/

/*.navbar a {*/
/*  color: var(--white-wash);*/
/*  text-decoration: none;*/
/*  font-weight: 500;*/
/*  font-family: 'Roboto', sans-serif;*/
/*  font-size: 1.1rem;*/
/*  transition: color 0.3s ease;*/
/*}*/

/*.navbar a:hover {*/
/*  color: var(--light-purple);*/
/*}*/

/*.navbar a:focus, .tabs-container button:focus {*/
/*  outline: 1px solid var(--light-purple);*/
/*  outline-offset: 1px;*/
/*}*/

/*.hero {*/
/*  text-align: center;*/
/*  padding: 60px 20px;*/
/*  background: var(--hero-background);*/
/*  color: var(--white-wash);*/
/*}*/

/*.hero h1 {*/
/*  font-size: 2.5rem;*/
/*  margin: 0 0 20px;*/
/*  font-family: 'Roboto', sans-serif;*/
/*}*/

/*.hero p {*/
/*  font-size: 1.2rem;*/
/*  font-family: 'Roboto', sans-serif;*/
/*}*/

/*.section {*/
/*  padding: 40px 20px;*/
/*  margin: 20px auto;*/
/*  border-radius: 10px;*/
/*  background: var(--section-background);*/
/*  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);*/
/*}*/

/*.skills-grid {*/
/*  display: grid;*/
/*  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));*/
/*  gap: 10px;*/
/*  justify-items: center;*/
/*  background-color: var(--white-wash);*/
/*  padding: 10px 10px 20px;*/
/*}*/

/*.skills-grid img {*/
/*  width: 100%;*/
/*  max-width: 70px;*/
/*  height: auto;*/
/*  object-fit: contain;*/
/*  transition: transform 0.3s ease;*/
/*}*/

/*.skills-grid img:hover {*/
/*  transform: scale(1.1);*/
/*}*/

/*.skills-names {*/
/*  display: flex;*/
/*  flex-wrap: wrap;*/
/*  gap: 10px;*/
/*  justify-content: center;*/
/*  margin-top: 10px;*/
/*  background-color: var(--white-wash);*/
/*  padding: 20px 20px 30px;*/
/*  border-radius: 10px;*/
/*  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);*/
/*}*/

/*.tabs-container {*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  gap: 15px;*/
/*  margin-bottom: 20px;*/
/*  max-width: 100%;*/
/*  overflow-x: auto;*/
/*  padding: 10px;*/
/*  box-sizing: border-box;*/
/*}*/

/*.tabs-container button {*/
/*  background-color: var(--dark-purple);*/
/*  color: var(--white-wash);*/
/*  border: 1px solid transparent;*/
/*  border-radius: 10px;*/
/*  padding: 5px 10px;*/
/*  font-size: 0.8rem;*/
/*  font-weight: 500;*/
/*  font-family: 'Roboto', sans-serif;*/
/*  cursor: pointer;*/
/*  transition: all 0.3s ease;*/
/*  text-transform: capitalize;*/
/*}*/

/*.tabs-container button.active {*/
/*  background-color: var(--light-purple);*/
/*  color: var(--dark-purple);*/
/*  border: 1px solid var(--light-purple);*/
/*  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);*/
/*  outline: none; !* Ensure no outline remains *!*/
/*}*/

/*.tabs-container button:hover {*/
/*  transform: scale(1.1);*/
/*  background-color: var(--light-purple);*/
/*  color: var(--dark-purple);*/
/*  border: 1px solid var(--light-purple);*/
/*}*/

/*.tabs-container::-webkit-scrollbar {*/
/*  height: 15px;*/
/*}*/

/*.tabs-container::-webkit-scrollbar-track {*/
/*  background: var(--white-wash);*/
/*  border-radius: 10px;*/
/*}*/

/*.tabs-container::-webkit-scrollbar-thumb {*/
/*  background: var(--dark-purple);*/
/*  border-radius: 10px;*/
/*  border: 1px solid var(--white-wash);*/
/*}*/

/*.tabs-container::-webkit-scrollbar-thumb:hover {*/
/*  background: var(--dark-orange);*/
/*}*/

/*.carousel-item {*/
/*  min-width: 300px;*/
/*  background: var(--white-wash);*/
/*  border: 1px solid var(--light-purple);*/
/*  border-radius: 10px;*/
/*  padding: 20px;*/
/*  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);*/
/*  text-align: center;*/
/*  transition: transform 0.3s ease;*/
/*}*/

/*.carousel-item:hover {*/
/*  transform: translateY(-5px);*/
/*}*/

/*.carousel-item button {*/
/*  background: var(--white-wash);*/
/*  color: var(--dark-purple);*/
/*  margin-top: 10px;*/
/*  border: none;*/
/*  padding: 10px 20px;*/
/*  border-radius: 50px;*/
/*  cursor: pointer;*/
/*  transition: all 0.3s ease;*/
/*}*/

/*.carousel-item button:hover {*/
/*  background: var(--light-purple);*/
/*  color: var(--text-color);*/
/*}*/

/*.footer {*/
/*  text-align: center;*/
/*  padding: 5px;*/
/*  background: var(--section-background);*/
/*  color: var(--white-wash);*/
/*}*/

/*.experience-grid {*/
/*  display: grid;*/
/*  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));*/
/*  gap: 20px;*/
/*}*/

/*.experience-item {*/
/*  background: white;*/
/*  border: 1px solid var(--white-wash);*/
/*  border-radius: 10px;*/
/*  padding: 20px;*/
/*  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);*/
/*  transition: transform 0.3s ease;*/
/*  margin-bottom: 2rem;*/
/*}*/

/*.experience-item:hover {*/
/*  transform: translateY(-2px);*/
/*}*/

/*#about h1,*/
/*#experience h1,*/
/*#skills h1,*/
/*#overview h1,*/
/*#tech-stack h1,*/
/*#project-components h1,*/
/*#projects h1,*/
/*#contact h1 {*/
/*  color: var(--white-wash);*/
/*}*/
/*#image{*/
/*  width: 40%;*/
/*  height: 40%;*/
/*}*/

/*.highlight {*/
/*  color: #962b9e;*/
/*  font-weight: bold;*/
/*  font-family: 'Roboto', sans-serif;*/
/*}*/

/*h2 {*/
/*  font-size: 1.5rem;*/
/*  margin-bottom: 0.5rem;*/
/*  font-family: 'Roboto', sans-serif;*/
/*}*/

/*h3 {*/
/*  font-size: 1.2rem;*/
/*  font-family: 'Roboto', sans-serif;*/
/*  margin-top: 1rem;*/
/*  margin-bottom: 0.5rem;*/
/*  color: #333;*/
/*}*/

/*ul {*/
/*  margin-left: 1.5rem;*/
/*  list-style-type: disc;*/
/*}*/

/*li {*/
/*  margin-bottom: 0.5rem;*/
/*  line-height: 1.5;*/
/*}*/

/*.text-box {*/
/*  background-color: var(--white-wash);*/
/*  padding: 20px;*/
/*  border-radius: 10px;*/
/*  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);*/
/*}*/

/*.pill-box-container {*/
/*  display: flex;*/
/*  flex-wrap: wrap;*/
/*  gap: 10px;*/
/*  justify-content: center;*/
/*  margin-top: 10px;*/
/*}*/

/*.carousel-indicators li {*/
/*  background-color: var(--dark-purple);*/
/*  width: 10px;*/
/*  height: 10px;*/
/*  border-radius: 50%;*/
/*  margin: 5px;*/
/*  border: none;*/
/*}*/

/*.carousel-indicators {*/
/*  position: absolute;*/
/*  bottom: 5px;*/
/*  left: 50%;*/
/*  transform: translateX(-50%);*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  background-color: #232323;*/
/*}*/

/*.carousel-indicators .active {*/
/*  background-color: var(--orange);*/
/*}*/

/*.carousel-control-prev,*/
/*.carousel-control-next {*/
/*  width: auto;*/
/*  height: auto;*/
/*  top: 50%;*/
/*  transform: translateY(-50%);*/
/*  background: transparent;*/
/*  border: none;*/
/*  outline: none;*/
/*}*/

/*.carousel-item img {*/
/*  max-height: 350px;*/
/*  width: 100%;*/
/*  object-fit: cover;*/
/*}*/

/*.pill {*/
/*  background-color: var(--dark-orange);*/
/*  color: var(--white-wash);*/
/*  font-size: 0.9rem;*/
/*  font-family: 'Roboto', sans-serif;*/
/*  padding: 5px 7px;*/
/*  border-radius: 15px;*/
/*  display: inline-block;*/
/*  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);*/
/*}*/

/*.carousel {*/
/*  margin: 20px auto;*/
/*  position: relative;*/
/*}*/

/*.carousel-inner {*/
/*  position: relative;*/
/*  z-index: 1;*/
/*  min-height: 400px;*/
/*  padding: 20px;*/
/*}*/

/*button.carousel-control-prev:hover,*/
/*button.carousel-control-next:hover {*/
/*  background-color: var(--dark-orange);*/
/*}*/

/*ol.carousel-indicators {*/
/*  list-style: none;*/
/*  padding: 0;*/
/*  margin: 0;*/
/*}*/

/*.carousel-indicators button {*/
/*  background-color: var(--dark-purple);*/
/*  width: 12px;*/
/*  height: 12px;*/
/*  border-radius: 50%;*/
/*  margin: 5px;*/
/*  border: 1px solid var(--light-purple);*/
/*}*/

/*.carousel-control-prev-icon,*/
/*.carousel-control-next-icon {*/
/*  background-color: var(--dark-orange);*/
/*  padding: 10px;*/
/*}*/

/*.carousel-control-prev-icon:hover,*/
/*.carousel-control-next-icon:hover {*/
/*  background-color: var(--dark-orange);*/
/*}*/

/*.carousel-caption {*/
/*  background: rgba(0, 0, 0, 0.7);*/
/*  color: var(--white-wash);*/
/*  padding: 20px;*/
/*  border-radius: 15px;*/
/*  max-width: 80%;*/
/*  margin: auto;*/
/*  text-align: center;*/
/*  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);*/
/*}*/

/*.carousel-caption h5 {*/
/*  font-size: 1.5rem;*/
/*  font-family: 'Roboto', sans-serif;*/
/*  font-weight: bold;*/
/*  margin-bottom: 10px;*/
/*  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);*/
/*}*/

/*.carousel-caption p {*/
/*  font-size: 1rem;*/
/*  font-family: 'Roboto', sans-serif;*/
/*  line-height: 1.5;*/
/*  margin-bottom: 15px;*/
/*}*/

/*!* Adjust the size of the "Learn More" button on smaller screens *!*/
/*@media (max-width: 576px) {*/
/*  .carousel-item button {*/
/*    padding: 5px 10px; !* Reduce padding for smaller screens *!*/
/*    font-size: 0.8rem; !* Reduce font size for smaller screens *!*/
/*    font-family: 'Roboto', sans-serif;*/
/*  }*/

/*  !* Hide carousel indicators on smaller screens *!*/
/*  .carousel-indicators {*/
/*    display: none;*/
/*  }*/
/*}*/

/*@media (max-width: 768px) {*/
/*  .pill {*/
/*    font-size: 0.7rem;*/
/*    font-family: 'Roboto', sans-serif;*/
/*    padding: 3px 5px;*/
/*  }*/
/*}*/

/*@media (max-width: 576px) {*/
/*  .pill {*/
/*    font-size: 0.6rem;*/
/*    font-family: 'Roboto', sans-serif;*/
/*    padding: 2px 4px;*/
/*  }*/
/*}*/

/*@media (max-width: 768px) {*/
/*  .navbar {*/
/*    flex-wrap: wrap;*/
/*  }*/

/*  .hero h1, .hero p {*/
/*    font-size: 1.5rem;*/
/*    font-family: 'Roboto', sans-serif;*/
/*    margin: 10px 0;*/
/*  }*/

/*  .skills-grid {*/
/*    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));*/
/*  }*/

/*  .experience-grid {*/
/*    grid-template-columns: 1fr;*/
/*  }*/

/*  .hero h1 {*/
/*    font-size: 2rem;*/
/*    font-family: 'Roboto', sans-serif;*/
/*  }*/

/*  .hero p {*/
/*    font-size: 1rem;*/
/*    font-family: 'Roboto', sans-serif;*/
/*  }*/

/*  .section {*/
/*    padding: 20px 10px;*/
/*  }*/

/*  .tabs-container {*/
/*    flex-direction: column;*/
/*    gap: 5px;*/
/*  }*/

/*  .carousel-item {*/
/*    padding: 10px;*/
/*  }*/

/*  .carousel-caption {*/
/*    padding: 10px;*/
/*  }*/
/*}*/

/*.navbar nav a {*/
/*  margin-right: 15px;*/
/*}*/

/*.navbar nav a:last-child {*/
/*  margin-right: 0;*/
/*}*/
