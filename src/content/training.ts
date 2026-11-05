/**
 * Student training programs, run by Krudex Global in collaboration with
 * NovaSkill Hub. Single source for /training, the path finder, the contact
 * form's program prefill and the Course structured data.
 *
 * Format, dates and fees are shared on enquiry, so they are not listed here.
 */

export type ProgramId = 'aiml' | 'java' | 'python';

export interface ProgramModule {
  title: string;
  topics: string;
}

export interface Program {
  id: ProgramId;
  /** Full name, e.g. in headings and structured data. */
  title: string;
  /** Short name for tabs and chips. */
  shortTitle: string;
  tagline: string;
  description: string;
  /** Who the program suits. */
  forWho: string;
  modules: ProgramModule[];
  stack: string[];
  capstone: string;
}

export const PROGRAMS: Program[] = [
  {
    id: 'aiml',
    title: 'AI & Machine Learning',
    shortTitle: 'AI / ML',
    tagline: 'From Python and data to models you can deploy.',
    description:
      'Learn how data becomes working AI: clean and explore data, train machine learning and deep learning models, build with large language models, and ship a model behind an API.',
    forWho: 'Students who enjoy maths, data and problem solving, and want to build AI features.',
    modules: [
      { title: 'Python for data', topics: 'Python, NumPy, pandas, data cleaning and visualisation' },
      { title: 'Maths for machine learning', topics: 'Linear algebra, probability and statistics, explained through code' },
      { title: 'Machine learning', topics: 'Regression, classification, clustering and model evaluation with scikit-learn' },
      { title: 'Deep learning', topics: 'Neural networks, computer vision and training with TensorFlow and PyTorch' },
      { title: 'NLP & generative AI', topics: 'Text processing, LLMs, prompt engineering and RAG with LangChain' },
      { title: 'Deploying models', topics: 'Serving models with FastAPI, Git workflows and cloud deployment' },
    ],
    stack: ['Python', 'NumPy', 'pandas', 'scikit-learn', 'TensorFlow', 'PyTorch', 'LangChain', 'FastAPI'],
    capstone: 'Build and deploy an AI application end to end, such as a document Q&A assistant or an image classifier.',
  },
  {
    id: 'java',
    title: 'Java Full Stack',
    shortTitle: 'Java Full Stack',
    tagline: 'Core Java, Spring Boot and React, the stack behind enterprise apps.',
    description:
      'Learn to build complete web applications the way enterprise teams do: object-oriented Java, Spring Boot REST APIs, relational databases and a React front end, deployed to the cloud.',
    forWho: 'Students aiming for software roles at product companies, banks and large enterprises.',
    modules: [
      { title: 'Core Java & OOP', topics: 'Syntax, object-oriented design, collections, exceptions, streams and lambdas' },
      { title: 'Databases', topics: 'SQL, MySQL and PostgreSQL, JDBC, JPA and Hibernate' },
      { title: 'Spring Boot back end', topics: 'REST APIs, Spring Data JPA, Spring Security and JWT authentication' },
      { title: 'Front end', topics: 'HTML, CSS, JavaScript and React' },
      { title: 'Testing & tools', topics: 'Git and GitHub, Maven and unit testing with JUnit' },
      { title: 'Deployment', topics: 'Docker basics and deploying a full-stack app to the cloud' },
    ],
    stack: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'React', 'JUnit', 'Maven', 'Docker'],
    capstone: 'Build a full-stack application with a React front end, a Spring Boot API and a database, and deploy it.',
  },
  {
    id: 'python',
    title: 'Python Full Stack',
    shortTitle: 'Python Full Stack',
    tagline: 'Python, Django and React, from first line to live app.',
    description:
      'Learn to build and ship complete web applications with Python: Django and FastAPI back ends, PostgreSQL databases and a React front end, deployed to the cloud.',
    forWho: 'Beginners and students who want to build web products quickly, end to end.',
    modules: [
      { title: 'Python foundations', topics: 'Syntax, data structures, functions, OOP and modules' },
      { title: 'Front end', topics: 'HTML, CSS, JavaScript and React' },
      { title: 'Django back end', topics: 'Models, views, the admin and REST APIs with Django REST Framework' },
      { title: 'Databases', topics: 'SQL, PostgreSQL and working with an ORM' },
      { title: 'APIs with FastAPI', topics: 'Fast, typed APIs, authentication with JWT and testing with pytest' },
      { title: 'Deployment', topics: 'Git and GitHub, Docker basics and deploying to the cloud' },
    ],
    stack: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'React', 'pytest', 'Git', 'Docker'],
    capstone: 'Build a full-stack web application with a React front end, a Django or FastAPI back end and a database, and deploy it.',
  },
];

export function getProgram(id: string | null | undefined): Program | undefined {
  return PROGRAMS.find((p) => p.id === id);
}

/** Enquiry link that preselects training and names the program. */
export function programEnquiryHref(id?: ProgramId) {
  return id ? `/contact?interest=training&program=${id}` : '/contact?interest=training';
}
