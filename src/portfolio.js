/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Santanu Adhikary",
  title: "Hi all, I'm Santanu",
  subTitle: emoji(
    "A proactive learner and team player with experience in developing efficient, automated solutions using Python, SQL, and AWS. Passionate about leveraging technology to drive data-driven decision-making and streamline operations."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ihZ3Xj8nGwMiTILSf9kRyUdVSBwURUXV/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mikan-senpai",
  linkedin: "https://www.linkedin.com/in/santanu-adhikary-dev/",
  gmail: "santanud5d80@gmail.com",
  medium: "https://medium.com/@santanud5d80",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop modular and reusable Python scripts integrated with databases"
    ),
    emoji("⚡ Optimize data processing times using AWS services"),
    emoji(
      "⚡ Automate ETL processes to enable efficient data-driven decision-making"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "pyspark",
      fontAwesomeClassname: "fas fa-fire" // Using fire icon as a placeholder
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "teradata",
      fontAwesomeClassname: "fas fa-server" // Using server icon as a placeholder
    },
    {
      skillName: "snowflake",
      fontAwesomeClassname: "fas fa-snowflake" // Using snowflake icon
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Techno Main Saltlake, Kolkata, India",
      logo: require("./assets/images/technoMainSaltlakeLogo.png"),
      subHeader: "Bachelor of Technology in Electronics and Communication Engineering",
      duration: "June 2020 - Aug. 2023",
      desc: "CGPA: 8.92",
      descBullets: [
        "Participated in various tech fests and coding competitions",
        "Completed multiple projects on data analysis and real-time data processing"
      ]
    },
    {
      schoolName: "Techno Main Polytechnic, Kolkata, India",
      logo: require("./assets/images/technoMainPolytechnicLogo.png"),
      subHeader: "Diploma in Electronics and Communication Engineering",
      duration: "May 2017 - May 2020",
      desc: "CGPA: 8.1",
      descBullets: ["Completed coursework on microcontrollers and embedded systems"]
    },
    {
      schoolName: "Lycee, Kolkata, India",
      logo: require("./assets/images/lyceeLogo.png"),
      subHeader: "Secondary Education",
      duration: "May 2016 - May 2017",
      desc: "Percentage: 81.2%",
      descBullets: ["Excelled in science and computers"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Engineering", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud Computing",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Programmer Analyst Trainee",
      company: "Cognizant Technology Solutions",
      companylogo: require("./assets/images/cognizantLogo.png"),
      date: "Apr. 2024 – Present",
      desc: "Developed and integrated modular, reusable, and parameterized Python scripts with Oracle database, ensuring compliance with Cognizant's quality and process standards.",
      descBullets: [
        "Achieved seamless integration of Python modules with HPALM for ETL Testing Automation, significantly reducing manual work by 70%"
      ]
    },
    {
      role: "Data Engineer Intern",
      company: "Cognizant Technology Solutions",
      companylogo: require("./assets/images/cognizantLogo.png"),
      date: "Dec. 2023 – Apr. 2024",
      desc: "Implemented SQL concepts in real-world scenarios using Snowflake, Teradata, and Redshift, improving data retrieval efficiency by 25%.",
      descBullets: [
        "Developed and deployed data engineering solutions utilizing AWS services, including Amazon S3 and Redshift, leading to a 30% reduction in data processing times"
      ]
    },
    {
      role: "System Analyst",
      company: "Tathya Technologies Pvt. Ltd",
      companyLogo: "./assets/images/tathyaLogo.jpg", // Add this logo to your assets
      date: "Aug 2023 - Dec 2023",
      desc: "Successful migration to VOIP through SIP Android application affecting 250+ customers" ,
      descBullets :[

        "Added a new feature, push notifications, helping 100+ employers in serving their customers",
        "Customized the interface of the Android application giving the customers an easy and seamless experience"
      ]  
      // skills: [
      //   "Linux",
      //   "Firebase",
      //   "Git",
      //   "Android",
      //   "Session Initiation Protocol (SIP)"
      // ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Companies I Have Supported in Their Tech Development , Facilitated the transition to VoIP using a SIP Android application with a seamless and user-friendly interface, benefiting 250+ customers . Introduced push notification feature, enhancing employer-customer interactions",
  projects: [
    {
      image: require("./assets/images/consam.png"),
      projectName: "Consam TelePhone",
      // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://consamtelecom.co.in/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/akdLogo.png"),
      projectName: "AKD Phone",
      // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.akdnetwork.com/akdnetwork/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications, coures-work and Some Cool Stuff that I have done !",

    achievementsCards: [
      {
        title: "Snowflake Masterclass",
        subtitle: "Completed Snowflake Masterclass certification",
        image: require("./assets/images/snowflakeLogo.png"),
        imageAlt: "Snowflake Logo",
        footerLink: [
          {
            name: "View Certification",
            url: "https://www.udemy.com/certificate/UC-7f589b2d-07bb-41b7-ba7b-fa056a3c84a0/"
          }
        ]
      },
      {
        title: "Cloud Computing on AWS",
        subtitle: "Completed certification for Cloud Computing on AWS",
        image: require("./assets/images/awsLogo.png"),
        imageAlt: "AWS Logo",
        footerLink: [
          {
            name: "View Certification",
            url: "https://www.udemy.com/certificate/UC-e2cb843e-6d20-47d9-998c-98b895483f7b/"
          }
        ]
      },
      {
        title: "IoT Summer Industrial Internship",
        subtitle: "Completed internship on Internet of Things",
        image: require("./assets/images/iotLogo.png"),
        imageAlt: "IoT Logo",
        footerLink: [
          {
            name: "View Certification",
            url: "https://drive.google.com/file/d/153JF5ViNtHT6u_BiG1mi0a8QO3IRXxPH/view?usp=sharing"
          }
        ]
      }
    ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://adhikarysantanu.hashnode.dev/aws-vpc-made-easy-build-and-secure-your-cloud-network",
      title: "AWS VPC Made Easy: Build and Secure Your Cloud Network",
      description:
        "Overview of AWS VPC and Its Importance in Cloud InfrastructureStep-by-StepGuide to Creating a VPC Using the AWS Management Console commands"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-7980721339",
  email_address: "santanud5d80@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "@Santanu20131244", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
