import{a as E,b as P,c as f,d as S,e as v,f as l,g as k,h as m,i as b,j as s,k as u,l as e,m as t,n as d,o as x,p as y,q as g,r as i,s as p,t as C,u as _,w,z as I}from"./chunk-GUJ3YTZZ.js";function A(o,n){if(o&1&&(e(0,"div",40),d(1,"img",41),t()),o&2){let a=n.$implicit;l(),s("src","/santiago.github.io/assets/"+a.image,v)("alt",a.name)("title",a.name)}}function M(o,n){if(o&1&&(e(0,"span",42),i(1),t()),o&2){let a=n.$implicit;l(),p(a.name)}}function F(o,n){if(o&1){let a=x();e(0,"button",43),y("click",function(){let c=f(a).index,h=g();return S(h.selectProject(c))}),i(1),t()}if(o&2){let a=n.$implicit,r=n.index,c=g();u("active",r===c.selectedProjectIndex),b("data-bs-target","#carouselExampleIndicators")("data-bs-slide-to",r),l(),C(" ",a.category," ")}}function D(o,n){if(o&1&&d(0,"li"),o&2){let a=n.index;u("active",a===0),b("data-bs-target","#carouselExampleIndicators")("data-bs-slide-to",a)}}function T(o,n){if(o&1&&(e(0,"span",42),i(1),t()),o&2){let a=n.$implicit;l(),p(a)}}function J(o,n){if(o&1){let a=x();e(0,"div",44),d(1,"img",45),e(2,"div",46)(3,"h5"),i(4),t(),e(5,"p"),i(6),t(),e(7,"div",47),m(8,T,2,1,"span",20),t(),e(9,"button",48),y("click",function(){let c=f(a).$implicit,h=g();return S(h.openDetails(c))}),i(10,"Learn More"),t()()()}if(o&2){let a=n.$implicit,r=n.index,c=g();u("active",r===0),l(),s("src","/santiago.github.io/assets/"+a.image,v)("alt",a.title+" - Preview Image"),l(3),p(a.title),l(2),p(a.description),l(2),s("ngForOf",a.technologies),l(),s("disabled",c.isLearnMoreDisabled)}}var j=class o{constructor(n){this.router=n}selectedCategory="";selectedProjectIndex=0;selectedProject=null;isLearnMoreDisabled=!1;skills=[{name:"AngularJS",image:"AngularJS.png"},{name:"Angular",image:"Angular.svg"},{name:"Spring_Boot",image:"Spring_Boot.png"},{name:"Junit",image:"Junit.png"},{name:"Docker",image:"Docker.png"},{name:"ActiveMQ",image:"ActiveMQ.png"},{name:"Jenkins",image:"Jenkins-Emblem.png"},{name:"Linux",image:"Ubuntu.png"},{name:"WinSCP",image:"WinSCP.png"},{name:"Oracle",image:"Oracle.png"},{name:"Okta",image:"Okta.png"},{name:"Sql_Server",image:"SQL.png"},{name:"Java",image:"Java.png"},{name:"JS",image:"JS.png"},{name:"Python",image:"Python.png"},{name:"HTML",image:"HTML.png"},{name:"Typescript",image:"Typescript.png"},{name:"Agile",image:"Agile.png"},{name:"Github Actions",image:"Github_Actions.svg"},{name:"GitHub Workflows",image:"GitHub_Workflows.png"},{name:"IBM_Maximo",image:"IBM_Maximo.png"},{name:"UiPath",image:"UiPath.png"},{name:"Three_JS",image:"Three_JS.png"},{name:"Pandas",image:"Pandas.png"},{name:"PyTorch",image:"PyTorch.png"},{name:"Google Bert",image:"Bert.svg"},{name:"Hugging_Face",image:"Hugging_Face.svg"},{name:"Jet_Brains",image:"Jet_Brains.png"},{name:"Copilot",image:"Copilot.png"},{name:"Pivotal Cloud Foundry",image:"PCF.png"}];projects=[{id:1,category:"Ecommerce",title:"Full Stack E-Commerce",description:"An integrated Angular 9 and Spring Boot web application. It allows users to browse, shop, and manage their accounts securely using Okta authentication. Customer information and order history are stored and managed in a MySQL DB",image:"Ecommerce-Project.png",detailsPage:"/angular",technologies:["Angular","Spring Boot","HTML","CSS","JavaScript","Okta","Sql_Server","Okta"]},{id:2,category:"DevOps",title:"CI/CD Workflow",description:"A CI/CD pipeline project using Jenkins to streamline the build and deployment processes. It is setup with SSH-based authentication for secure repo access and utilizes Jenkins credentials for integration. Jenkinsfiles handle build and deploy configurations to deploy to Minikube.",image:"DevOps-Project.png",detailsPage:"/devops",technologies:["Jenkins","Docker","Kubernetes","GitHub Actions","Junit"]},{id:3,category:"AI Sentiment",title:"AI Sentiment Service",description:"AI sentiment analysis service that predict whether a movie review is positive or negative. Built using the Hugging Face library and the T5 model, this service processes a large dataset of 25,000 reviews and trained over 12 epochs.",image:"Prediction-Project.png",detailsPage:"/ai",technologies:["Python","TensorFlow","OpenCV","Hugging Face","Flask"]},{id:4,category:"AI Summarizer",title:"AI Note Summarizer",description:"An AI project with optimized hyperparameters to fine-tune the T5 transformer model for text summarization tasks. It has a comprehensive grid search strategy to identify various combinations of hyperparameters to generate high-quality summaries.",image:"Text_Summarization-Project.png",detailsPage:"/ai",technologies:["Python","TensorFlow","OpenCV","Hugging Face","ROUGE","Pandas","SacreBLEU","NLTK"]},{id:5,category:"3D Viewer",title:"Multi-Part 3D Viewer",description:"This project allows visualizing and customizing of STL files and other 3D model formats as well. Useful for loading complex 3D models that has multiple folders containing multiple 3D files. Files can be viewed independently, as a single component or as a unified component.",image:"3D-Viewer-Project.png",detailsPage:"/three-js",technologies:["Three.js","JavaScript","HTML","CSS"]},{id:6,category:"RPA",title:"DataForm Bot",description:"An RPA solution built with UiPath that automates the process of filling out web forms using customer data from an Excel file. The bot navigates to a to a local web app and populates forms with user details like name, address, email, and phone.",image:"RPA-Project.png",detailsPage:"/rpa",technologies:["UiPath","Visual Basic","JavaScript","Excel"]},{id:7,category:"JMS",title:"JMS QueueFlow Processor",description:"A Spring Boot-based JMS messaging system using ActiveMQ, consisting of three microservices working together for message processing and communication. It uses subscribe-publish model to process messages asynchronously and a REST API.",image:"JMS-Project.png",detailsPage:"/jms",technologies:["Java","JMS","ActiveMQ","MySQL"]},{id:8,category:"GitHub Workflows",title:"GitHub Actions & Workflows",description:"An implementation of GitHub Actions and Workflows to streamline CI/CD processes directly within GitHub. Uses a workflows.yml file for tasks such as building Maven projects and notification.yml workflow that sends event-triggered notifications (push, closed, merge) to a Microsoft Teams channel.",image:"GitHub_Workflows.png",detailsPage:"/github",technologies:["GitHub Actions","Docker","Kubernetes","Teams","GitHub Workflows"]},{id:9,category:"Docker",title:"Dockerized CI/CD Pipeline",description:"A Docker-based solution for automating CI/CD processes and running integrated full-stack applications. Docker containers run on Linux Ubuntu to encapsulate both the Angular front-end and Spring Boot back-end applications.",image:"Docker-Project.png",detailsPage:"/docker",technologies:["Jenkins","Docker","Kubernetes","Linux"]}];filteredProjects=[];ngOnInit(){this.selectedCategory="",this.filterProjects(),this.selectProject(0)}ngAfterViewInit(){this.initializeCarousel()}initializeCarousel(){let n=document.querySelector("#carouselExampleIndicators");if(n){let a=bootstrap.Carousel.getOrCreateInstance(n);n.addEventListener("slid.bs.carousel",r=>{this.selectedProjectIndex=r.to})}}selectCategory(n){this.selectedCategory=n,this.filterProjects(),this.filteredProjects.length>0?this.selectProject(0):this.selectedProject=null,this.initializeCarousel()}filterProjects(){this.selectedCategory?this.filteredProjects=this.projects.filter(n=>n.category===this.selectedCategory):this.filteredProjects=this.projects}selectProject(n){this.selectedProjectIndex=n,this.selectedProject=this.filteredProjects[n]}openDetails(n){this.router.navigate([n.detailsPage])}getUniqueCategories(){return this.projects.map(n=>n.category).filter((n,a,r)=>r.indexOf(n)===a)}filter=E;static \u0275fac=function(a){return new(a||o)(k(I))};static \u0275cmp=P({type:o,selectors:[["app-home"]],standalone:!0,features:[_],decls:153,vars:5,consts:[[1,"home-container"],["role","navigation",1,"navbar"],["href","#about"],["href","#experience"],["href","#skills"],["href","#projects"],["href","#contact"],["aria-labelledby","hero-title",1,"hero"],["id","hero-title"],["id","about","aria-labelledby","about-title",1,"section"],["id","about-title"],[1,"white-box"],["id","experience","aria-labelledby","experience-title",1,"section"],["id","experience-title"],[1,"experience-item"],["id","skills","aria-labelledby","skills-title",1,"section"],["id","skills-title"],[1,"skills-grid"],["class","skill-item",4,"ngFor","ngForOf"],[1,"skills-names"],["class","pill",4,"ngFor","ngForOf"],["id","projects","aria-labelledby","projects-title",1,"projects-section"],["id","projects-title"],[1,"tabs-container"],[3,"active","click",4,"ngFor","ngForOf"],["id","carouselExampleIndicators","data-bs-ride","carousel","role","region","aria-labelledby","projects-title",1,"carousel","slide"],[1,"carousel-indicators"],[3,"active",4,"ngFor","ngForOf"],[1,"carousel-inner"],["class","carousel-item",3,"active",4,"ngFor","ngForOf"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],["id","contact","aria-labelledby","contact-title",1,"section"],["id","contact-title"],["href","mailto:s.arteaga007@outlook.com"],["href","https://linkedin.com/in/santiago","target","_blank","rel","noopener noreferrer"],[1,"footer"],[1,"skill-item"],[3,"src","alt","title"],[1,"pill"],[3,"click"],[1,"carousel-item"],[1,"d-block","w-100",3,"src","alt"],[1,"carousel-caption"],[1,"pill-box-container"],[3,"click","disabled"]],template:function(a,r){a&1&&(e(0,"div",0)(1,"header",1)(2,"nav")(3,"a",2),i(4,"About"),t(),e(5,"a",3),i(6,"Experience"),t(),e(7,"a",4),i(8,"Skills"),t(),e(9,"a",5),i(10,"Projects"),t(),e(11,"a",6),i(12,"Contact"),t()()(),e(13,"main")(14,"section",7)(15,"h1",8),i(16,"Hi, I'm Santiago Arteaga"),t(),e(17,"p"),i(18,"Full Stack Developer | Problem Solver | Innovator"),t()(),e(19,"section",9)(20,"h1",10),i(21,"About Me"),t(),e(22,"p",11),i(23,"I\u2019m a Full Stack Developer with over 4 years, specialized in backend microservices and front-end Angular development. My expertise spans designing robust systems, implementing DevOps practices, and delivering seamless user experiences. Passionate about innovation, I thrive on solving complex problems and mastering emerging technologies. With a Bachelor of Science in Computer Information Systems and currently pursuing a Master\u2019s in AI & Machine Learning, I am committed to delivering high-quality, impactful solutions that drive results."),t()(),e(24,"section",12)(25,"h1",13),i(26,"Experience"),t(),e(27,"div",14)(28,"h2"),i(29,"Full Stack Developer II"),t(),e(30,"p")(31,"strong"),i(32,"Company:"),t(),i(33," FedEx Services | "),e(34,"strong"),i(35,"Duration:"),t(),i(36," January 2023 \u2013 Present | "),e(37,"strong"),i(38,"Tenure:"),t(),i(39," 2 years"),t(),e(40,"h3"),i(41,"Colo Migration (New Application)"),t(),e(42,"ul")(43,"li"),i(44,"Migrated a new assets application to Colo, validating test environments, conducting JMS queue tests, and coordinating database provisioning without modernizing existing infrastructure."),t()(),e(45,"h3"),i(46,"Mailbox Migration Initiative"),t(),e(47,"ul")(48,"li"),i(49,"Migrated legacy mailboxes to cloud-based mailboxes by coordinating directory setups, configuring applications for file delivery, and validating data flow with external teams."),t()(),e(50,"h3"),i(51,"IBM SSO Configuration"),t(),e(52,"ul")(53,"li"),i(54,"Configured SSO for a new application integrated with IBM, resolving metadata issues and automating user transitions from local authentication to SAML."),t()(),e(55,"h3"),i(56,"Data Center Migration"),t(),e(57,"ul")(58,"li"),i(59,"Led the re-architecture and migration of 7 critical FedEx applications to a new Date Center, reducing build times by 20% and ensuring independent deployment pipelines."),t(),e(60,"li"),i(61,"Contributed to $400M in annual savings and earned the Bravo Zulu Award for leadership and contributions."),t()(),e(62,"h3"),i(63,"Mainframe Initiative"),t(),e(64,"ul")(65,"li"),i(66,"Assisted in transitioning five applications from DB2 to PureScale by documenting configurations, executing batch job migrations, and ensuring smooth post-migration operations."),t()(),e(67,"h3"),i(68,"zNative Batch Jobs"),t(),e(69,"ul")(70,"li"),i(71,"Troubleshot and ensured seamless production transitions of zNative batch jobs using One Automation and WinSCP."),t()(),e(72,"h3"),i(73,"Maximo Go Live"),t(),e(74,"ul")(75,"li"),i(76,"Coordinated the migration of 19 microservices from IBM mainframe to PCF, resolving compliance gaps and avoiding $9M in delays."),t(),e(77,"li"),i(78,"Earned the FedEx Quality Driven Management (QDSM) Award for leadership and contributions."),t()()(),e(79,"div",14)(80,"h2"),i(81,"Full Stack Developer I"),t(),e(82,"p")(83,"strong"),i(84,"Company:"),t(),i(85," FedEx Services | "),e(86,"strong"),i(87,"Duration:"),t(),i(88," January 2021 \u2013 January 2023 | "),e(89,"strong"),i(90,"Tenure:"),t(),i(91," 2 years"),t(),e(92,"h3"),i(93,"Application Modernization"),t(),e(94,"ul")(95,"li"),i(96,"Led the modernization of an AngularJS application, integrating reusable StencilJS components and developing a new Angular 9 app."),t(),e(97,"li"),i(98,"Developed secure REST APIs using Spring Boot and Okta for authentication, seamlessly integrating with the Angular application."),t(),e(99,"li"),i(100,"Provided technical expertise to offshore and onshore teams, resolving technical challenges and maintaining productivity."),t(),e(101,"li"),i(102,"Contributed a component to the FedEx component library, becoming the first Freight team to meet stringent UI/UX and coding standards."),t(),e(103,"li"),i(104,"Enhanced code quality of microservices with unit test cases, improving code coverage to 85%"),t()(),e(105,"h3"),i(106,"FedEx Project"),t(),e(107,"ul")(108,"li"),i(109,"Enhanced Spring Boot microservices to support new surcharges, boosting operational efficiency and revenue generation."),t(),e(110,"li"),i(111,"Earned the IT Hall of Fame Award for contributions to this high-impact initiative."),t()()()(),e(112,"section",15)(113,"h1",16),i(114,"Skills"),t(),e(115,"div",17),m(116,A,2,3,"div",18),t(),e(117,"div",19),m(118,M,2,1,"span",20),t()(),e(119,"section",21)(120,"h1",22),i(121,"Projects"),t(),e(122,"div",23),m(123,F,2,5,"button",24),t(),e(124,"div",25)(125,"ol",26),m(126,D,1,4,"li",27),t(),e(127,"div",28),m(128,J,11,8,"div",29),t(),e(129,"button",30),d(130,"span",31),e(131,"span",32),i(132,"Previous"),t()(),e(133,"button",33),d(134,"span",34),e(135,"span",32),i(136,"Next"),t()()()(),e(137,"section",35)(138,"h1",36),i(139,"Contact Me"),t(),e(140,"p",11),i(141,"Email: "),e(142,"a",37),i(143,"s.arteaga007@outlook.com"),t()(),e(144,"p",11),i(145,"Phone: +1 (561) 797-4813"),t(),e(146,"p",11),i(147,"LinkedIn: "),e(148,"a",38),i(149,"linkedin.com/in/santiago"),t()()()(),e(150,"footer",39)(151,"p"),i(152,"Built with Angular 19 | \xA9 2025 Santiago Arteaga"),t()()()),a&2&&(l(116),s("ngForOf",r.skills),l(2),s("ngForOf",r.skills),l(5),s("ngForOf",r.filteredProjects),l(3),s("ngForOf",r.filteredProjects),l(2),s("ngForOf",r.filteredProjects))},dependencies:[w]})};export{j as HomeComponent};
