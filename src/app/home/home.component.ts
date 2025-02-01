import {Component, AfterViewInit, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {NgForOf} from '@angular/common';
import {filter} from 'rxjs';

interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  detailsPage: string;
  technologies: string[];
  shortDescription: string;
}

interface Skill {
  name: string;
  image: string;
}

declare var bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [NgForOf, RouterLink, RouterLinkActive], // add RouterLink here when needed
  standalone: true
})

export class HomeComponent implements OnInit, AfterViewInit {
  selectedCategory: string = '';
  selectedProjectIndex: number = 0;
  selectedProject: Project | null = null;
  isLearnMoreDisabled: boolean = true;

  skills: Skill[] = [
    {name: 'AngularJS', image: 'AngularJS.png'},
    {name: 'Angular', image: 'Angular.svg'},
    {name: 'Spring_Boot', image: 'Spring_Boot.png'},
    {name: 'Junit', image: 'Junit.png'},
    {name: 'Docker', image: 'Docker.png'},
    {name: 'ActiveMQ', image: 'ActiveMQ.png'},
    {name: 'Jenkins', image: 'Jenkins-Emblem.png'},
    {name: 'Linux', image: 'Ubuntu.png'},
    {name: 'WinSCP', image: 'WinSCP.png'},
    {name: 'Oracle', image: 'Oracle.png'},
    {name: 'Okta', image: 'Okta.png'},
    {name: 'Sql_Server', image: 'SQL.png'},
    {name: 'Java', image: 'Java.png'},
    {name: 'JS', image: 'JS.png'},
    {name: 'Python', image: 'Python.png'},
    {name: 'HTML', image: 'HTML.png'},
    {name: 'Typescript', image: 'Typescript.png'},
    {name: 'Agile', image: 'Agile.png'},
    {name: 'Github Actions', image: 'Github_Actions.svg'},
    {name: 'GitHub Workflows', image: 'GitHub_Workflows.png'},
    {name: 'IBM_Maximo', image: 'IBM_Maximo.png'},
    {name: 'UiPath', image: 'UiPath.png'},
    {name: 'Three_JS', image: 'Three_JS.png'},
    {name: 'Pandas', image: 'Pandas.png'},
    {name: 'PyTorch', image: 'PyTorch.png'},
    {name: 'Google Bert', image: 'Bert.svg'},
    {name: 'Hugging_Face', image: 'Hugging_Face.svg'},
    {name: 'Jet_Brains', image: 'Jet_Brains.png'},
    {name: 'Copilot', image: 'Copilot.png'},
    {name: 'Pivotal Cloud Foundry', image: 'PCF.png'},
    {name: 'SASS CSS', image: 'Sass-css.png'},
    {name: 'RESTful APIs', image: 'Restful.png'},
    {name: 'DB2', image: 'DB2.png'},
    {name: 'MySQL', image: 'MySQL.png'},
    {name: 'Splunk', image: 'Splunk.png'},
    {name: 'AppDynamics', image: 'AppDynamics.png'},
    {name: 'ReactJS', image: 'React.png'},
  ];

  projects: Project[] = [
    {
      id: 1,
      category: 'Ecommerce',
      title: 'Full Stack E-Commerce',
      description: 'An integrated Angular 9, Spring Boot, and MySQL web application. It allows users to browse, shop, and manage their accounts securely using Okta authentication.',
      image: 'Ecommerce-Project.png',
      shortDescription: 'An Angular 9, Spring Boot, MySQL, and Okta web application',
      detailsPage: 'An Spring Boot integrated with Angular using Okta',
      technologies: ['Angular', 'Spring Boot', 'HTML', 'CSS', 'JavaScript', 'Okta', 'Sql_Server', "Okta"]
    },
    {
      id: 2,
      category: 'DevOps',
      title: 'CI/CD Workflow',
      description: 'A CI/CD pipeline project using Jenkins to streamline the build and deployment processes. It is setup with SSH-based authentication for secure repo access and utilizes Jenkins credentials for integration. Jenkinsfiles handle build and deploy configurations to deploy to Minikube.',
      image: 'DevOps-Project.png',
      shortDescription: 'A CI/CD pipeline project using Jenkins',
      detailsPage: 'A CI/CD pipeline project using Jenkins',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'GitHub Actions', 'Junit']
    },
    {
      id: 3,
      category: 'AI Sentiment',
      title: 'AI Sentiment Service',
      description: 'AI sentiment analysis service that predict whether a movie review is positive or negative. Built using the Hugging Face library and the T5 model, this service processes a large dataset of 25,000 reviews and trained over 12 epochs.',
      image: 'Prediction-Project.png',
      shortDescription: 'AI sentiment analysis service.',
      detailsPage: 'AI sentiment analysis service',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Hugging Face', 'Flask']
    },
    {
      id: 4,
      category: 'AI Summarizer',
      title: 'AI Note Summarizer',
      description: 'An AI project with optimized hyperparameters to fine-tune the T5 transformer model for text summarization tasks. It has a comprehensive grid search strategy to identify various combinations of hyperparameters to generate high-quality summaries.',
      image: 'Text_Summarization-Project.png',
      shortDescription: 'AI project fine-tuned for text summarization',
      detailsPage: '/summarizer',
      technologies: ['Python', 'TensorFlow', 'Hugging Face', 'ROUGE', 'Pandas', 'SacreBLEU']
    },
    {
      id: 5,
      category: '3D Viewer',
      title: 'Multi-Part 3D Viewer',
      description: 'This project allows visualizing and customizing of STL files and other 3D model formats as well. Useful for loading complex 3D models that has multiple folders containing multiple 3D files. Files can be viewed independently, as a single component or as a unified component.',
      image: '3D-Viewer-Project.png',
      shortDescription: '3D file viewer to customize and assemble 3D components',
      detailsPage: '3D file viewer to customize and assemble 3D components',
      technologies: ['Three.js', 'JavaScript', 'HTML', 'CSS']
    },
    {
      id: 6,
      category: 'RPA',
      title: 'DataForm Bot',
      description: 'An RPA solution built with UiPath that automates the process of filling out web forms using customer data from an Excel file. The bot navigates to a to a local web app and populates forms with user details like name, address, email, and phone.',
      image: 'RPA-Project.png',
      shortDescription: 'An RPA solution built with UiPath',
      detailsPage: 'Robot automating web form filling using UiPath',
      technologies: ['UiPath', 'Visual Basic', 'JavaScript', 'Excel']
    },
    {
      id: 7,
      category: 'JMS',
      title: 'JMS QueueFlow Processor',
      description: 'A Spring Boot-based JMS messaging system using ActiveMQ, consisting of three microservices working together for message processing and communication. It uses subscribe-publish model to process messages asynchronously and a REST API.',
      image: 'JMS-Project.png',
      shortDescription: 'A Spring Boot-based JMS messaging system',
      detailsPage: 'A JMS messaging system using ActiveMQ',
      technologies: ['Java', 'JMS', 'ActiveMQ', 'MySQL']
    },
    {
      id: 8,
      category: 'GitHub Workflows',
      title: 'GitHub Actions & Workflows',
      description: 'An implementation of GitHub Actions and Workflows to streamline CI/CD processes directly within GitHub. Uses a workflows.yml file for tasks such as building Maven projects and notification.yml workflow that sends event-triggered notifications (push, closed, merge) to a Microsoft Teams channel.',
      image: 'GitHub_Workflows.png',
      shortDescription: 'GitHub Actions and Workflows for CI/CD processes',
      detailsPage: 'GitHub Actions and Workflows to streamline CI/CD processes',
      technologies: ['GitHub Actions', 'Docker', 'Kubernetes', 'Teams', 'GitHub Workflows']
    },
    {
      id: 9,
      category: 'Docker',
      title: 'Dockerized CI/CD Pipeline',
      description: 'A Docker-based solution for automating CI/CD processes and running integrated full-stack applications. Docker containers run on Linux Ubuntu to encapsulate both the Angular front-end and Spring Boot back-end applications.',
      image: 'Docker-Project.png',
      shortDescription: 'Docker-based CI/CD pipeline for full-stack applications',
      detailsPage: 'Docker-based CI/CD pipeline',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Linux']
    },
  ];

  filteredProjects: Project[] = [];
  protected readonly filter = filter;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.selectedCategory = ''; // Initialize with an empty category to show all projects
    this.filterProjects();
    this.selectProject(0);
  }

  ngAfterViewInit(): void {
    this.initializeCarousel();
  }

  initializeCarousel(): void {
    const carouselElement = document.querySelector('#carouselExampleIndicators');
    if (carouselElement) {
      const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carouselElement);
      carouselElement.addEventListener('slid.bs.carousel', (event: any) => {
        this.selectedProjectIndex = event.to;
      });
    }
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.filterProjects(); // Filter projects based on the selected category
    if (this.filteredProjects.length > 0) {
      this.selectProject(0); // Automatically display the first project in the category
    } else {
      this.selectedProject = null; // Clear the selected project if no projects match
    }
    this.initializeCarousel(); // Reinitialize the carousel after updating the projects
  }

  filterProjects(): void {
    if (this.selectedCategory) {
      this.filteredProjects = this.projects.filter(
        project => project.category === this.selectedCategory
      );
    } else {
      this.filteredProjects = this.projects; // Show all projects if no category is selected
    }
  }

  selectProject(index: number): void {
    this.selectedProjectIndex = index;
    this.selectedProject = this.filteredProjects[index];
  }

  openDetails(project: Project): void {
    this.router.navigate([project.detailsPage]);
  }

  getUniqueCategories(): string[] {
    return this.projects.map(p => p.category).filter((category, index, arr) => arr.indexOf(category) === index);
  }
}
