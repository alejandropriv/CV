var data = ""
loadLanguageEN()
//loadLanguageDE()
//loadLanguageES()

loadData()

function loadLanguageDE(){
  console.log("Loading German language data...");
  data = 
  {
    "contactPresentation": "Devops Engineer",

    "SK100": {
      "title": "Kenntnisse",
      "training": {
        "Kubernetes": 85,
        "Helm Charts": 75,
        "ArgoCD": 70,
        //"DroneCI": 70,
        "AWS": 65,
        "Grafana": 50,
        "Prometheus": 50,
        "SealedSecrets": 85,
        "CI - Teamcity": 70,
        "Jenkins": 80,
        "Ansible": 50,
        "bash": 70,
        //"Powershell": 50,
        //"Git": 100,
        "Python": 80,
        "Javascript": 80,
        //"C++ & OpenCV": 65,
        //"Swift": 85,
        //"Android": 70,
        //"PHP": 60,
        //"Selenium": 70,

      } 
    },



    "CT100": {
      "title": "Ausbildung",
      "certifications": {
        "2023 - CKA: Certified Kubernetes administrator": "images/certs/cka.png",
        "2022 - AWS: Cloud Practitioner": "",
        "2022 - Azure: Fundamentals": "",
      } 
    },

    "CC100": {
      "certifications": {
        "2011 - ISTQB: Foundation level": "",
        "2009 - CISCO Networking: CCNA": "",
        "2007 - Server Configuration": "",
      } 
    },


    "SKL100": {
        "title": "Sprachen",
        "languages": {
          "Deutsch": 70,
          "Englisch": 90,
          "Spanisch": 100,
        } 
      },
    

    "WETitle": "Berufserfahrung",
    "WE": 
    [
      {
        "WETitle": "Devops Engineer  -  Evana AG",
        "WETime": "2024 März - aktuell",
        "WEDescription": "kubernetes cluster aufbauen und verwaltung, ArgoCD, Azure",
        "WEEnable": "true"
      },
      {
        "WETitle": "Devops Engineer  -  Schumann Gmbh",
        "WETime": "2023 Jun - 2024 Feb",
        "WEDescription": "Bau von Jenkins-Pipelines, erstellung von Ansible-Playbooks, Sicherheit von Docker-Images, automatisierung von Prozessen, Gitlab CI, wartungen von AWS Projekte",
        "WEEnable": "true"
      },
      {
        "WETitle": "CTO  -  Mercury Cash",
        "WETime": "2022 Jul - 2023 Apr",
        "WEDescription": "Wiederaufbau der IT-Abteilung und strategische Planung<br> <strong>Verwaltung der Abteilung:</strong>- Projektplanung und Erstellung von Leistungsmetriken.<br> - Festlegung interner Sicherheitsrichtlinien und Umgang mit Sicherheitsnachweisen <br> - Festlegung von Verfahren für die Einstellung von Ressourcen<br> <strong>Migration in die Cloud:</strong> - Migration der Digital Ocean-Plattform zu AWS <br> - Ersetzen von Kernteilen des Systems durch neue Microservices-orientierte <br><span class='spacer1'>&nbsp;</span> Implementierungen. <br> <strong>Personalwesen:</strong> - Umstrukturierung der IT-Abteilung und Aufbau eines stabilen Teams. <br> <strong>Anbieter:</strong> - Überprüfung der bestehenden IT-Dienstleister, Neuverhandlung der bestehenden Verträge",
        "WEEnable": "true"
           
      },
      {
        "WETitle": "Senior Fullstack Entwickler  -  Ad & Vision",
        "WETime":  "2021 Feb - 2022 Mai",
        "WEDescription": "Technische Leitung und DevOps für Webentwicklungsprojekte Webentwicklung<br><strong>Web:</strong> - Planung und Entwicklung strategischer Webprojekte für Kunden wie Ferrero<br> - Entwicklung interner Verwaltungstools<br> <strong>DevOps:</strong> - Planung der Cloud-Infrastruktur mit Ionos, AWS und onPremises<br> - Aufbau von CI/CD-Pipelines für mehrere Projekte.",      
        "WEEnable": "true"

      },      
      {
        "WETitle": "Senior Software Ingenieur  -  cm3p GmbH",
        "WETime": "2017 Feb - 2021 Jan",
        "WEDescription": "Technische Leitung und Programmierung des SDK für Messgeräte von Leica Geosystems<br> <strong>Android:</strong> - Verbindung, Senden und Empfangen von Daten von Messgeräten über Bluetooth und Wifi-Netzwerke. <br> - Aktualisierung der App von Bihl+Wiedemann auf die neuesten Android SDK<br> <strong>iOS:</strong> - SDK-Implementierung und Client-Support. <br> - Aktualisierung der App von Bihl+Wiedemann auf die neuesten iOS SDK-Versionen<br> <strong>Swift:</strong> - Plattformübergreifendes, auf Computer Vision basierendes Automatisierungs-framework. iOS Vision Library, Vapor-Backend, OpenCV.",      
        "WEEnable": "true"

      }, 
      {
        "WETitle": "divider",
        "WETime": "",
        "WEHeight": "100",
        "WEEnable": "true"
    
      }, 
      {
        "WETitle": "Software automatisierung  -  Choucair Testing S.A",
        "WETime": "2013 Apr - 2014 Jan",
        "WEDescription": "Entwicklung und Einsatz von Testautomatizierungframework in Java und Selenium, Anforderungsanalyse, Testfälle und Testplanung",      
        "WEEnable": "false"

      }, 

      {
        "WETitle": "Service Desk Analyst  -  Schlumberger",
        "WETime": "2012 Apr - 2013 Apr",
        "WEDescription": "Allgemeine IT-Unterstützung, Behebung von Netzwerkproblemen",
        "WEEnable": "false"
      
      },
      {
        "WETitle": "Software Tester  -  IBM Tochterunternehmen",
        "WETime": "2010 Jan - 2011 Aug",
        "WEDescription": "Dynamische und statische Softwaretests, schreiben und planen von Testfällen",
        "WEEnable": "false"
     
      }

    ],

    "CTitleGeneral": "Verträge",

    "C": [
      {
        "CTitle": "Freiberuflich",
        "CTime": "2016 Mai - 2016 Dez",
        "CSubtitle": "Web-Designer / Entwickler",
        "CDescription": "- Java - backend<br> - Web-Page entwicklung<br>",
        "CEnable": "false",
        
   
      },
      {
        "CTitle": "cm3p Gmbh",
        "CTime": "2015 Oct - 2016 Apr",
        "CSubtitle": "App entwicklung - Android und iOS",
        "CDescription": "Entwicklung einer App zum Bildvergleich unter Verwendung von SIFT und SURF, proprietären Algorithmen, C++, openCV",
        "CEnable": "true"     
      
      },
      {
        "CTitle": "Hochschule Mannheim",
        "CTime": "2015 Feb - 2015 Jun",
        "CSubtitle": "Steinbeis - Hiwi, Laborassistent",
        "CDescription": "Digitale Bildverarbeitung, C++, OpenCV",
        "CEnable": "true"
      
      },
      {
        "CTitle": "Freiberuflich",
        "CTime": "2011 Okt - 2012 Mai",
        "CSubtitle": "Software Entwicklung",
        "CDescription": "<i>Webrageous.com:</i> - PHP, jquery scripts<br><i>Software Sales and Development:</i>- PHP, jquery scripts, Testen von Websites, Drupal.<br><i>Andere:</i> - Testen von Anwendungen und Einrichten eines CDN",
        "CEnable": "false"
      
      },
      {
        "CTitle": "Pontificia Universidad Javeriana",
        "CTime": "2006 Jun - 2006 Okt",
        "CSubtitle": "Web - Entwicklung",
        "CDescription": "- Entwicklung von Software-Tools für das XI Symposium in Bildverarbeitung, <br><span class='spacer1'>&nbsp;</span> Signals und Artificial Vision<br> - Web Programming in PHP and MYSQL, Openconf",
        "CEnable": "false"
      
      }
    ],

    "STitleGeneral": "Ausbildung",

    "S": [
      {
        "STitle": "Hochschule Mannheim",
        "STime": "2014 - 2016",
        "SSubtitle": "Master in InformationsTechnik",
        "SDescription": "- Artificial Vision<br>- Embedded Systems<br>- Biomedical<br>Thesis: Integration von OpenCV in die Smartphone-Plattformen, IPhone, IPad und Android",
        "SEnable": "true"
      
      },
      {
        "STitle": "EUDE Business School",
        "STime": "2015 - 2016",
        "SSubtitle": "M.B.A",
        "SDescription": "Master in Business Administration, M.B.A",
        "SEnable": "true"
      
      },
      {
        "STitle": "Pontificia Universidad Javeriana",
        "STime": "2004 - 2010",
        "SSubtitle": "Elektronikingenieur",
        "SDescription": "- Digitale Signale und Bildverarbeitung<br> - Computerwissenschaften<br> Diplomarbeit: Echtzeit-Algorithmus zur Fahrzeugzählung auf der Grundlage von interessante Streifen.<br> - C++ mit der OpenCV-Bibliothek<br> - http://repository.javeriana.edu.co/handle/10554/7034",
        "SEnable": "true"
      
      },

      
    ],
    
  }

  console.log(data)

}

function loadLanguageEN(){
  console.log("Loading English language data...");
  data = 
  {
    "contactPresentation": "Devops Engineer",

    "SK100": {
      "title": "Technologies",
      "training": {
        "Kubernetes": 90,
        "ArgoCD": 80,
        "Helm Charts": 80,
        "Azure": 80,
        "AWS": 70,
        "Terraform":80,
        //"DroneCI": 70,
        "Grafana": 70,
        "Prometheus": 60,
        "SealedSecrets": 95,
        "External secrets": 80,
        //"CI - Teamcity": 70,
        //"Jenkins": 80,
        //"Ansible": 50,
        "Bash": 70,
        //"Powershell": 50,
        "Git": 100,
        "Go": 60,
        "Python": 80,
        // "Javascript": 80,
        //"C++ & OpenCV": 65,
        //"Swift": 85,
        //"Android": 70,
        //"PHP": 60,
        //"Selenium": 70,

      } 
    },

    "Divider": {

      "div1": 1,
      "div2": 2

    },

    "CT100": {
      "title": "Training",
      "certifications": {
        "2023 - CKA: Certified Kubernetes administrator": "images/certs/cka.png",
        "2022 - AWS: Cloud Practitioner": "",
        "2022 - Azure: Fundamentals": "",
      } 
    },

    "CC100": {
      "certifications": {
        "2011 - ISTQB: Foundation level": "",
        "2009 - CISCO Networking: CCNA": "",
        "2007 - Server Configuration": "",
      } 
    },


    "SKL100": {
      "title": "Languages",
      "languages": {
        "English": 90,
        "German": 70,
        "Spanish": 100,
      } 
    },

    "WETitle": "Work Experience",
    "WE": [
      {
        "WETitle": "Devops Engineer  -  Evana AG",
        "WETime": "2024 March - current",
        "WEDescription": "Management and maintenance of kubernetes cluster, ArgoCD, Azure",
        "WEEnable": "true"
      },
      {
        "WETitle": "Devops Engineer  -  Schumann Gmbh",
        "WETime": "2023 Jun - 2024 Feb",
        "WEDescription": "Construction of Jenkins-Pipelines, Ansible-Playbooks, Docker-Images security, Automation of processes",
        "WEEnable": "true"
      },
      

      {
        "WETitle": "CTO  -  Mercury Cash",
        "WETime": "2022 Jul - 2023 May",
        "WEDescription": "Reconstruction of the IT department, stabilization of the production environment and strategic planning.<br> <strong>Department Management:</strong> - Project planning and creation of performance metrics.<br>- Establish internal security policies, security credential handling and document management<br>- Establish procedures for hiring resources<br> <strong>Cloud migration:</strong> - Migration of the Digital Ocean platform to AWS  <br> - Replacing core parts of the system with new microservices oriented implementations. <br><strong>HR:</strong> - Restructuring of the IT department and creation of a stable team of 6 members.<br><strong>Vendors:</strong> - Review of existing IT service providers, renegotiation of existing contracts <br>",      
        "WEEnable": "true"

      },
      {
        "WETitle": "Senior Fullstack Developer  -  Ad & Vision",
        "WETime": "2021 Feb - 2022 May",
        "WEDescription": "Technical lead and DevOps for web development projects<br><strong>Web:</strong> - Planning, development and deployment of strategic web projects for clients such as Ferrero <br> - Development of internal management tools<br> <strong>DevOps:</strong> - Cloud infrastructure planning using Ionos, AWS and onPremises<br>- Construction of CI/CD pipelines for multiple projects<br>",
        "WEEnable": "true"
      },
      {
        "WETitle": "Senior Software Engineer  -  cm3p Gmbh",
        "WETime": "2017 Feb - 2021 Jan",
        "WEDescription": "Technical lead and programming of SDK for measurement devices of Leica Geosystems<br><strong>Android:</strong> - Connect, send and receive data from measurement devices, using Bluetooth and Wifi networks.<br><strong>iOS:</strong> - Finish the implementation of the SDK and support the client during the implementation phase.<br>- Update legacy app to improve the functionality and comply with the latest requirements of Android/iOS SDK<br><strong>Swift:</strong> - Cross-platform computer-vision based automation framework based on iOS Vision Library  and Vapor back-end.<br><strong>Computer Vision:</strong> OpenCV, iOS Vision Library",
        "WEEnable": "true"
      },
      // {
      //   "WETitle": "Software Automation Engineer  -  Choucair Testing S.A",
      //   "WETime": "2013 Apr - 2014 Jan",
      //   "WEDescription": "- Develop and use of Test Automation Framework in Java and VB .NET<br>- Selenium and Silk Test<br>- Requirements Analysis ",
      //   "WEEnable": "true"
      
      // },
      {
        "WETitle": "Service Desk Analyst  -  Schlumberger",
        "WETime": "2012 Apr - 2013 Apr",
        "WEDescription": "- General IT Support, Network troubleshooting",
        "WEEnable": "false"
      
      },
      {
        "WETitle": "Software Tester  -  IBM Subsidiary",
        "WETime": "2010 Jan - 2011 Aug",
        "WEDescription": "- Dynamic and static software tests<br>- Test Case writing and planning",
        "WEEnable": "false"
      
      },
      {
        "WETitle": "divider",
        "WEHeight": 30,
        "WEEnable": "true"
      },
    ],

    "CTitleGeneral": "Contracts",

    "C": [
      {
        "CTitle": "Freelance",
        "CTime": "2016 May - 2016 Dec",
        "CSubtitle": "Web-Designer / Development",
        "CDescription": "- Java - backend<br> - Web-Page Development<br>",
        "CEnable": "false"
      
      },
      {
        "CTitle": "cm3p Gmbh",
        "CTime": "2015 Oct - 2016 Apr",
        "CSubtitle": "<strong>Master Thesis: Integration from OpenCV in the Smartphone platforms, IPhone, IPad and Android</strong>",
        "CDescription": "<strong>C++, OpenCV:</strong> Designed an image comparison app using SIFT and SURF, proprietary algorithms ",
        "CEnable": "true"
      
      },
      {
        "CTitle": "Hochschule Mannheim",
        "CTime": "2015 Feb - 2015 Jun",
        "CSubtitle": "<strong>Steinbeis - Hiwi, Lab Assistant</strong>",
        "CDescription": "<strong>C++, OpenCV: </strong>Digital image processing.",
        "CEnable": "true"
      
      },
      {
        "CTitle": "Freelance",
        "CTime": "2011 Oct - 2012 May",
        "CSubtitle": "<strong>Software Developer</strong>",
        "CDescription": "<strong>Webrageous.com</strong><br>- PHP, jquery scripts<br><strong>Software Sales and Development</strong><br>- PHP, jquery scripts, Websites testing, Drupal, Wordpress.<br><strong>Others</strong><br>- Testing Applications and set-up of Content Delivery Network ",
        "CEnable": "false"
      
      },
      {
        "CTitle": "Pontificia Universidad Javeriana",
        "CTime": "2006 Jun - 2006 Oct",
        "CSubtitle": "<strong>Web - Development</strong>",
        "CDescription": "- Software tools development for the XI Symposium in Image Processing, <br>Signals and Artificial Vision<br>- Web Programming in PHP and MYSQL, Openconf ",
        "CEnable": "false"
      
      }
    ],
    "STitleGeneral": "Education",

    "S": [
      {
        "STitle": "Hochschule Mannheim",
        "STime": "2014 - 2016",
        "SSubtitle": "Master in InformationsTechnik",
        "SDescription": "- Artificial Vision<br>- Embedded Systems<br>- Biomedical<br>Thesis: Integration from OpenCV on Smartphone-platforms, IPhone, IPad and Android",
        "SEnable": "true"
      
      },
      {
        "STitle": "EUDE Business School",
        "STime": "2015 - 2016",
        "SSubtitle": "M.B.A",
        "SDescription": "Master in Business Administration, M.B.A",
        "SEnable": "true"
      
      },
      {
        "STitle": "Pontificia Universidad Javeriana",
        "STime": "2004 - 2010",
        "SSubtitle": "Electronic engineering",
        "SDescription": "- Digital signal and image processing<br> - Computer science<br> Thesis: Real time algorithm for vehicle counting based on interest stripes.<br> - C++ with openCV<br> - http://repository.javeriana.edu.co/handle/10554/7034",
        "SEnable": "true"
      
      },

      
    ],

    
  }

  console.log(data)

}

function loadLanguageES(){

  data = 
  {
    "contactPresentation": "Ingeniero Devops",
    "WETitle": "Experiencia laboral",

    "CT100": {
      "title": "Certificaciones",
      "certifications": {
        "2023 - CKA: Certified Kubernetes administrator": "images/certs/cka.png",
        "2022 - AWS: Cloud Practitioner": "images/certs/AWS-cloud-practitioner.png",
        "2022 - Azure: Fundamentals": "images/certs/AZURE-cloud-practitioner.png",
      } 
    },

    "CC100": {
      "certifications": {
        "2011 - ISTQB: Foundation level": "",
        "2009 - CISCO Networking: CCNA": "",
        "2007 - Server Configuration": "",
      } 
    },

    "SKL100": {
      "title": "Idiomas",
      "languages": {
        "Aleman": 70,
        "Ingles": 90,
        "Español": 100,
      } 
    },

    "WE": [
      {
        "WETitle": "CTO  -  Mercury Cash",
        "WETime": "2022 Jul - Actual",
        "WEDescription": "Reconstrucción  del departamento de informática, estabilización del entorno de producción y planificación estratégica<br> <strong>Gestión de departamento:</strong> - Planificación de proyectos y creación de métricas de rendimiento <br>- Establecer las políticas de seguridad interna, manejo de credenciales de seguridad y gestión de documentos<br>- Establecer los procedimientos para la contratación de recursos<br><strong>Migración a la nube:</strong> -  Migración de la plataforma de Digital Ocean a AWS <br>- Sustitución de partes centrales del sistema por nuevas implementaciones orientadas a microservicios  <br><strong>RH:</strong> - Reestructuración del departamento de TI y creación de un equipo estable de 6 miembros<br><strong>Proveedores:</strong> - Revisión de los proveedores de servicios TI existentes, renegociación de contratos existentes"      
      },
      {
        "WETitle": "Desarrollador Fullstack Senior  -  Ad & Vision",
        "WETime": "2017 Feb - 2022 May",
        "WEDescription": "Technical lead y DevOps para proyectos de desarrollo web<br><strong>Web:</strong> - Planificación, desarrollo y despliegue de proyectos web estratégicos para clientes como Ferrero <br> - Desarrollo de herramientas de gestión interna<br><strong>DevOps:</strong> - Planificación de la infraestructura cloud usando Ionos, AWS y onPremises<br>- Construcción de pipelines CI/CD para múltiples proyectos<br>"      
      },
      {
        "WETitle": "Ingeniero Software Senior  -  cm3p GmbH",
        "WETime": "2017 Feb - 2021 Ene",
        "WEDescription": "Technical lead y programación de SDK para dispositivos de medición de Leica Geosystems<br><strong>Android:</strong> - Conexión, envío y recepción de datos desde dispositivos de medición, utilizando redes Bluetooth y Wifi. <br> <strong>iOS:</strong> - Implementación del SDK y soporte al cliente durante la fase de implementación. <br> - Actualización de la aplicación heredada a las últimas versiones del SDK de Android/iOS.<br> <strong>Swift:</strong> - Framework de automatización multiplataforma basado en visión por computador basado en iOS Vision Library y Vapor back-end. <strong>Visión por computador:</strong> OpenCV, iOS Vision Library."      
      },  
      {
        "WETitle": "Ingeniero Automatizador de Software  -  Choucair Testing S.A",
        "WETime": "2013 Abr - 2014 Ene",
        "WEDescription": "Desarrollo y uso de Test Automation Framework en Java, VB .NET y Selenium<br>- Análisis de requisitos, casos de prueba y planificación de pruebas."      
      },
      {
        "WETitle": "Analista Service Desk  -  Schlumberger",
        "WETime": "2012 Abr - 2013 Abr",
        "WEDescription": "- Apoyo informático general, solución de problemas de red"      
      },
      {
        "WETitle": "Software Tester  -  Subsidiaria IBM",
        "WETime": "2010 Jan - 2011 Aug",
        "WEDescription": "- Pruebas de software dinámicas y estáticas<br>- Redacción y planificación de casos de prueba"      
      }
      
    ],

    "CTitleGeneral": "Contratos",

    "C": [
      {
        "CTitle": "Freelance",
        "CTime": "2016 May - 2016 Dec",
        "CSubtitle": "Web - Diseño / Desarrollo",
        "CDescription": "- Java - backend<br> - Desarrollo Web<br>"      
      }
    ]
    
  }

  console.log(data)

}


function loadData(){

  document.querySelector("#skills").innerText = data.SK100.title

  Object.keys(data.SK100.training).forEach(element => {
    li = setli("SK100-UL", element)
    li.classList.add("skill-percentage");

    addCss(".section-wrapper #"+setID(element)+"::before {\
      width: "+data.SK100.training[element]+"%;\
      animation: skill_1 0.6s ease;\
    }")

  });


  document.querySelector("#training").innerText = data.CT100.title


  var ul = document.getElementById("CT100-UL");
  var li = document.createElement("li");

  Object.keys(data.CT100.certifications).forEach(element => {


    let img = document.createElement('img');
    img.src = data.CT100.certifications[element];
    img.height = 60
    img.style.margin = "10px 0px 10px 10px"
    li.appendChild(img);


  });
  ul.appendChild(li);


  Object.keys(data.CT100.certifications).forEach(element => {
    li = setli("CT100-UL", element)

  });

  Object.keys(data.CC100.certifications).forEach(element => {
    li = setli("CT100-UL", element)

  });



  document.querySelector("#SKL100").innerText = data.SKL100.title
  Object.keys(data.SKL100.languages).forEach(element => {
    li = setli("SKL100-UL", element)
    li.classList.add("skill-percentage");

    addCss(".section-wrapper #"+element+"::before {\
      width: "+data.SKL100.languages[element]+"%;\
      animation: skill_1 0.6s ease;\
    }")

  });



  document.querySelector("#contactPresentation > p > span").innerText = data.contactPresentation

  document.querySelector("#WETitleGeneral").innerText = data.WETitle
 


  data.WE.forEach(element => {

    if(element.WEEnable == "true"){
    
      if(element.WETitle == "divider"){
        addHTML( document.querySelector("#experience"),
          '<div class="'+element.WETitle+'" style="height: '+element.WEHeight+'px"></div>'
        )
        
      } else{
        addHTML( document.querySelector("#experience"),
          '<div id="xxx" class="job-wrapper clearfix page-break-inside">\
            <div class="company-wrapper clearfix">\
            <div id="WETitle" class="experience-title">'+element.WETitle+'</div>\
            <div id="WETime" class="time dateformat">'+element.WETime+'</div>\
          </div>\
          <div class="job-wrapper clearfix">\
            <div id="WEDescription" class="company-description">'+element.WEDescription+'</div>\
          </div>\
        </div>\
        ')
      }
    }

  });


  document.querySelector("#CTitleGeneral").innerText = data.CTitleGeneral

  data.C.forEach(element => {

    if(element.CEnable == "true"){
    
      if(element.CTitle == "divider"){
        addHTML( document.querySelector("#experience"),
          '<div class="'+element.CTitle+'" style="height: '+element.CHeight+'"></div>'
        )
        
      } else{

        addHTML( document.querySelector("#contracts"),
          '<div id="yyy" class="job-wrapper clearfix">\
            <div class="company-wrapper clearfix">\
              <div id="CTitle" class="experience-title">'+element.CTitle+'</div>\
              <div id="CTime" class="time dateformat">'+element.CTime+'</div>\
            </div>\
            <div class="job-wrapper clearfix">\
              <div id="CSubtitle" class="sub-title">'+element.CSubtitle+'</div>\
              <div id="CDescription" class="company-description">\
                '+element.CDescription+'\
            </div>\
          </div>\
        </div>')
      }
    }

  });


  document.querySelector("#STitleGeneral").innerText = data.STitleGeneral

  data.S.forEach(element => {

    if(element.SEnable == "true"){
    
      if(element.WETitle == "divider"){
        addHTML( document.querySelector("#experience"),
          '<div class="'+element.STitle+'" style="height: '+element.SHeight+'"></div>'
        )
        
      } else{

        addHTML( document.querySelector("#studies"),
          '<div id="ssss" class="job-wrapper clearfix">\
          <div class="company-wrapper clearfix">\
            <div id="STitle" class="experience-title">'+element.STitle+' </div>\
            <div id="STime" class="time dateformat">'+element.STime+'</div>\
          </div>\
          <div class="job-wrapper clearfix">\
            <div id="SSubtitle" class="sub-title">'+element.SSubtitle+'</div>\
            <div id="SDescription" class="company-description">\
              '+element.SDescription+'\
            </div>\
          </div>\
          </div>');
      }
    }

  });

}

function setDividers(data){
  // data.Divider.forEach(div => {

  //   document.getElementById(div);
  // })
}



function setli(ulname, element) {
  var ul = document.getElementById(ulname);
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(element));
  li.setAttribute("id", setID(element)); 
  ul.appendChild(li);

  return li
}

function setID(id){
  id=id.split(' ').filter(e => e.trim().length).join('_')
  return id
}



function addCss(cssCode) {
  var styleElement = document.createElement("style");
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = cssCode;
  } else {
    styleElement.appendChild(document.createTextNode(cssCode));
  }
  document.getElementsByTagName("head")[0].appendChild(styleElement);
}

function addHTML(rootElement, htmlCode){

  rootElement.innerHTML += htmlCode

}


