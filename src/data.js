// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaLink,
  FaJava,
} from "react-icons/fa";
import { SiJavascript, SiStyledcomponents, SiRedux, SiCsharp, SiPython, SiCplusplus } from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";
import Hold from "./images/hold.png";
import Cats from "./images/cats.png";
import Team from "./images/team.png";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "graydevon";

// Blog link icon (imported above)
export const Blog = <FaLink />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Im a Full Stack Software Developer with 1+ years' background in creating and advancing technology solutions to enhance productivity. Several successful projects under my belt, and I'd say my portfolio better introduces me than my words do. Passionate coder, very patient, and good colleague to work with.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <FaBootstrap className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <SiCplusplus className="display-4" />,
    name: "C++",
  },
  {
    id: 7,
    skill: <SiPython className="display-4" />,
    name: "Python",
  },
  {
    id: 8,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <FaJava className="display-4" />,
    name: "Java",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["hold-me-accountable", "Team-Profile-Generator", "Get-Facts-and-Find-Cats"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
     name: "hold-me-accountable",
    image: Hold,
  },
  {
    name: "Team-Profile-Generator", 
    image: Team,
  },
  {
    name: "Get-Facts-and-Find-Cats",
    image: Cats,
  }
];


/* Contact
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mpzewlqg";
