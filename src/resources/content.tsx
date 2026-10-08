import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Prosenjit",
  lastName: "Paul",
  name: `Prosenjit Paul (aka Ps Prosen)`,
  role: "AI System Builder",
  avatar: "/images/avatar.jpg",
  email: "psprosen.dev@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/PsProsen-Dev",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/psprosen-dev",
    essential: true,
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/PsProsenDev",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} — AI System Builder`,
  description: `Portfolio of Prosenjit Paul (aka Ps Prosen), AI System Builder from Maynaguri, West Bengal — founder of We Digital Mitra, an AI-powered digital marketing and automation agency.`,
  headline: <>I did not learn AI in a classroom. I learned it by building a company that runs without me.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Selected work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I'm {person.firstName} — an {person.role.toLowerCase()} from Maynaguri, West Bengal, and
      founder of <Text as="span" size="xl" weight="strong">We Digital Mitra</Text>: a 1-human,
      100% AI-operated agency building websites, lead-gen pipelines, and automation for local
      businesses across North Bengal.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Maynaguri, West Bengal`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a self-taught {person.role.toLowerCase()} from Maynaguri, West Bengal,
        and the founder of <strong>We Digital Mitra</strong> — an AI-powered digital marketing and
        automation agency that runs as "1 human, 100% AI-operated," serving local businesses across
        8 districts of North Bengal (NH-31 / Dooars corridor).
        <br /><br />
        He builds agentic automation systems, local LLM deployments, and CLI tools — and ships
        client work end to end: business websites, lead-gen pipelines, WhatsApp automation. He is
        positioning toward <strong>Agentic Systems Architect</strong>: someone who designs the
        systems in which AI agents do reliable, verifiable work.
        <br /><br />
        Credentials: Anthropic Claude 101 certified; approved for Anthropic's Cyber Verification
        Program. GitHub: @PsProsen-Dev.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "We Digital Mitra",
        timeframe: "2024 — Present",
        role: "Founder · AI System Builder",
        achievements: [
          <>
            Run a 1-human, 100% AI-operated agency serving local businesses across 8 districts of
            North Bengal — web development, lead-gen pipelines, and WhatsApp automation.
          </>,
          <>
            Shipped a complete digital presence for India Hotel & Restaurant Cum Bar (Maynaguri):
            business website with a ~170-item menu, Google Business Profile, social setup, and
            business email.
          </>,
          <>
            Build multi-agent automation systems, Google Maps + Sheets lead-gen pipelines, and CLI
            tools in Python, Rust, and Node.js.
          </>,
        ],
        images: [],
      },
      {
        company: "Independent gigs",
        timeframe: "Until 2026",
        role: "Retail & digital services",
        achievements: [
          <>
            Ran a mobile accessories shop and worked as a CSC (Common Service Centre) operator —
            both closed to focus on the agency full-time.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Self-taught",
        description: <>No formal degree — learned by building: Next.js, TypeScript, Python, Rust, AI agent systems, and agency operations.</>,
      },
      {
        name: "Class 12 — West Bengal Board",
        description: <>Arts stream, Bengali medium.</>,
      },
      {
        name: "Anthropic",
        description: <>Claude 101 certified; approved for the Cyber Verification Program.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Agentic automation",
        description: (
          <>Multi-agent swarms, lead-gen pipelines (Google Maps + Sheets + Claude), WhatsApp automation, and paper-trade-safe trading bots.</>
        ),
        tags: [
          {
            name: "Python",
          },
          {
            name: "Rust",
          },
          {
            name: "Node.js",
            icon: "javascript",
          },
        ],
        images: [],
      },
      {
        title: "Web development",
        description: (
          <>Production Next.js 15 sites with TypeScript, Tailwind CSS, and shadcn/ui — from agency websites to client business sites.</>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "TypeScript",
            icon: "javascript",
          },
          {
            name: "Tailwind CSS",
          },
          {
            name: "shadcn/ui",
          },
        ],
        images: [],
      },
      {
        title: "Data & trading systems",
        description: (
          <>P&L dashboards, data-visualization sites, and Pine Script → webhook automation pipelines (in design/build).</>
        ),
        tags: [
          {
            name: "Shoonya API",
          },
          {
            name: "Pine Script",
          },
          {
            name: "GitHub Actions",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Selected projects by ${person.name}: client work, trading systems, data visualization, and agentic automation.`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
