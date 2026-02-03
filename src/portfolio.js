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
  username: "Krishna Sai Mullangi",
  title: "Hi, I'm Krishna",
  subTitle: "WordPress Developer with 5+ years of experience specializing in content-focused WordPress development, Gutenberg editor, accessibility compliance, and SEO optimization. Passionate about crafting user-centered web experiences with strong information architecture and visual hierarchy.",
  resumeLink:
    "https://drive.google.com/file/d/1gD92WzV9NpwJLAiwKpSGhsfqBHGZojmk/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/krishna212",
  linkedin: "https://www.linkedin.com/in/krishna-sai-mullangi-47199b173/",
  gmail: "krishnasai.mullangi@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "WordPress Expertise",
  subTitle: "Creating high performance WordPress websites with focus on accessibility, SEO, and exceptional user experience. Expert in modern WordPress development practices and tools.",
  skills: [
    emoji("⚡ WordPress Development: Gutenberg editor, custom block development, ACF, Elementor, theme customization, and plugin development"),
    emoji("⚡ Front-End Excellence: CSS3, responsive design, custom styling, visual hierarchy, and cross-browser compatibility"),
    emoji("⚡ Best Practices: WCAG accessibility compliance, SEO optimization, information architecture, content modeling, and taxonomy management")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "WordPress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Gutenberg",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "ACF",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "Elementor",
      fontAwesomeClassname: "fas fa-pen-nib"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "SEO",
      fontAwesomeClassname: "fas fa-search"
    },
    {
      skillName: "Accessibility",
      fontAwesomeClassname: "fas fa-universal-access"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "California State University, Long Beach",
      logo: require("./assets/images/csulb.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2022 - December 2023",
      desc: "GPA: 3.70",
      desc2: "Coursework: Advanced Analysis of Algorithms, Artificial Intelligence, Pattern Recognition"
    },
    {
      schoolName: "SRM University, Chennai, India",
      logo: require("./assets/images/srm.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "August 2016 - May 2020",
      desc: "GPA: 8.12",
      desc2: "Coursework: Data Structures, Algorithms Design and Analysis, Database Management Systems, Computer System Architecture, Operating Systems, Data Science, Web Design, Software Engineering Principles"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "WordPress & Gutenberg", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "CSS & Responsive Design",
      progressPercentage: "90%"
    },
    {
      Stack: "ACF & Custom Block Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Accessibility & SEO Optimization",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false  // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior WordPress Developer",
      company: "County of Los Angeles",
      companylogo: require("./assets/images/lacounty.png"),
      date: "Mar 2024 - Present",
      descBullets: [
        "Maintain WordPress site serving 1M+ monthly visitors, improving content clarity and user flows for adoption/licensing services.",
        "Enhanced Animal Search plugin UX with responsive design, advanced filters, and detailed profile layouts.",
        "Improved accessibility compliance from 60 to 95+ using SiteImprove and WCAG 2.1 guidelines.",
        {text: "Live: ", link: "https://animalcare.lacounty.gov", linkText: "animalcare.lacounty.gov"}
      ]
    },
    {
      role: "WordPress Developer",
      company: "Texas Pride Trailers",
      companylogo: require("./assets/images/texaspridetrailers.png"),
      date: "Feb 2024 - Feb 2025",
      descBullets: [
        "Built 3 WordPress/WooCommerce sites (100K+ monthly visitors) using Elementor and Figma designs.",
        "Designed self-service quote system replacing phone-based requests, improving user experience and conversion.",
        "Optimized page speed and SEO, achieving WCAG 2.1 AA accessibility compliance across all sites.",
        {text: "Live: ", links: [{url: "https://texaspridetrailers.com", text: "texaspridetrailers.com"}, {url: "https://inventory.braysmotor.com/", text: "inventory.braysmotor.com"}, {url: "https://www.braysmotor.com/drive", text: "braysmotor.com/drive"}]}
      ]
    },
    {
      role: "Software Developer",
      company: "California State University, Long Beach",
      companylogo: require("./assets/images/csulb.png"),
      date: "Aug 2022 - May 2023",
      descBullets: [
        "Redesigned student portal serving 40K+ students using React and WordPress custom themes.",
        "Collaborated with marketing and accessibility teams on mobile-responsive, user-centered design.",
        "Conducted accessibility testing with Axe DevTools, Lighthouse, and NVDA screen reader."
      ]
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
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
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

const contactInfo = {
  title: emoji("Let's connect!"),
  subtitle:
    "I'm always open to interesting projects and opportunities. Feel free to reach out!",
  number: "+1 (562) 578-9182",
  email_address: "krishnasai.mullangi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
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
  isHireable
};
