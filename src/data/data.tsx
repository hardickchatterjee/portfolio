import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
//import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
//import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
//import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
//import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
//import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
//import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Hardick Portfolio',
  description: "Welcome to my portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Hardick Chatterjee.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an international MS graduate student with experience in <strong className="text-stone-100">Full Stack Software Development</strong>, currently studying
        at <strong className="text-stone-100">Arizona State University.</strong>
      </p>
    
    </>
  ),
  actions: [
    {
      href: 'https://pdfhost.io/v/p9yRZI57X_Hardick_Resume_Handhske',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,  
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hi, I'm a software developer specializing in the FinTech industry. With 4 years of experience in developing banking solutions, I'm proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js) and have intermediate knowledge of AWS. I also enjoy coding in Java. Currently pursuing my Masters in Information Technology, I'm dedicated to staying up-to-date with the latest technologies. I'm known for my strong work ethic, attention to detail, and passion for delivering user-centric solutions. Let's collaborate and drive positive change through technology.`,
  aboutItems: [
    {label: 'Location', text: 'Tempe, AZ', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Study', text: 'Arizona State University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Temenos', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 9,
      },
      {
        name: 'Bengali',
        level: 10,
      },
    ],
  },
  {
    name: 'Languages',
    skills: [
      {
        name: 'C++',
        level: 7,
      },
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'Javascript',
        level: 8,
      },
      {
        name: 'Node.js',
        level: 6,
      },
      
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Next.js',
        level: 6,
      },
      {
        name: 'MongoDB',
        level: 8,
      },
      
    ],
  },
  {
    name: 'Tools and Version Control',
    skills: [
      {
        name: 'Visual Studio Code',
        level: 9,
      },
      {
        name: 'Eclipse',
        level: 9,
      },
      {
        name: 'Git',
        level: 8,
      },
      {
        name: 'Jenkins',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Web Streaming Application',
    description: 'This is a clone of the online streaming platform Hulu using ReactJS, Tailwind CSS and production with NextJS with server side rendering. Movies were taken from the api endpoint The Movie Database (TMDB).',
    url: 'https://hulu-3sfh-git-main-hardickchatterjee.vercel.app',
    image: porfolioImage2,
  },
  {
    title: 'Electronic based queuing system using fingerprint sensor',
    description: 'Developed an electronic based queuing system which takes the input of an user’s fingerprint and then generates him a queue number. This project is basically used to reduce the physical work in queue management systems. ',
    url: '',
    image: porfolioImage3,
  },
  {
    title: 'University Website',
    description: 'Developed University Website and a student login portal which is an user friendly website that allows student to get information about their engineering or business schools, apply for their UG or PG branch, choose their own exam slots, venue and timing, make payment for registration using a secured payment gateway by Razorpay. The website also contains general information about the university, gallery of photos and videos of cultural events, and also a parent login for each respective students.',
    url: '',
    image: porfolioImage4,
  },
  {
    title: 'Fedwire Payments',
    description: 'As part of the Payments team in Temenos, developed the framework for Fedwire Funds Service which is a real time gross settlement system owned and operated by the Federal Reserve Banks along with Business Analysts and Senior Software Engineers.',
    url: '',
    image: porfolioImage8,
  },  
  {
    title: 'Game Application',
    description: 'Developed a Game Application using Unity Engine 5. This included designing the basic game i.e. movement of user, input keys, designing the background world , action of the world, designing the main character and enemies, designing the power-ups etc. ',
    url: '',
    image: porfolioImage10,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2022-2024',
    location: 'Arizona State University',
    title: 'MS Information Technology',
    content: <p>CGPA: 3.95/4</p> },
  {
    date: '2014-2018',
    location: 'Vellore Institute of Technology',
    title: 'B.Tech Computer Science',
    content: <p>CGPA: 8.18/10</p>  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2018 - June 2022',
    location: 'Temenos',
    title: 'Software Engineer',
    content: (
      <p>
        I played a crucial role in the development of banking software for numerous international banks, utilizing my technical expertise in SQL, Java, JavaScript, and ReactJS. I diligently crafted clean and efficient code in accordance with given specifications, proficiently addressed software issues, and diligently upgraded existing systems while also resolving bugs in various payment channels. Additionally, I took charge of spearheading the development of enhancements for Fedwire payments, SWIFT, and ACH payments, which yielded an outstanding 21% increase in performance. Through my design and implementation efforts, I successfully managed multiple projects and significantly contributed to the expansion of the company's client base, ultimately generating a noteworthy 2.9% increase in revenue.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Shwetha Nayak',
      text: 'Hardick is a person I can rely on for the kind of passion and honesty he puts in his work. I had closely worked with him since he joined. He is a proactive, enthusiastic and a fast learner. He always tries to optimize his time and learn from his mistakes. In short span of time he became an important contributor to the unit. I would recommend him to anybody and certain that he will add value to any organisation he works for.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Gaurav Nagpal',
      text: 'Hardick is an absolute delight to work with. He has strong analytical skills and a great appetite for learning new skills and taking on challenges. He grew very rapidly at Temenos from being a software developer to driving and managing projects, from start to end. His commitment to work is outstanding. Thanks to his eye for details, he would surely be a designers most wanted developer. He is definitely a great addition to any dev team. I wish him all the best in his future endeavors.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Please do not hesitate to reach out to me.',
  items: [
    {
      type: ContactType.Email,
      text: 'hchatte1@asu.edu',
      href: 'mailto:hchatte1@asu.edu',
    },
    {
      type: ContactType.Location,
      text: 'Tempe, Arizona',
      href: 'https://www.google.ca/maps/place/Tempe,+AZ/@33.3920385,-112.0105021,12z/data=!3m1!4b1!4m6!3m5!1s0x872b0898a6aa80e3:0xa2dd4aad392cb41f!8m2!3d33.4255104!4d-111.9400054!16zL20vMHFwc24?entry=ttu',
    },
    {
      type: ContactType.Github,
      text: 'hardickchatterjee',
      href: 'https://github.com/hardickchatterjee',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/hardickchatterjee'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/hardick-chatterjee/'},
];
