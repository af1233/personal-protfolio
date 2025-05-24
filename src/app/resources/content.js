import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Aashiq',
    lastName:  'Farid',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'MERN Stack Developer | Shopify Expert',
    avatar:    '/images/avatar1.jpg',
    location:  'Asia/Pakistan/Lahore',
    languages: ['English', 'Urdu']
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share insights on the intersection of creativity, Shopify, and engineering.</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/af1233',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/aashiq-farid-000907207/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:aashiqfarid5555@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: "Aashiq Farid's Portfolio",
    description: "Portfolio website showcasing my work as a MERN Stack Developer and Shopify Expert. I specialize in building secure, efficient, and scalable web applications and Shopify solutions using the latest technologies.",
    headline: <>MERN Stack & Shopify Developer</>,
    subline: <>I'm Aashiq Farid, a dedicated MERN Stack Developer and Shopify App Developer currently working at Code Graphers. I have hands-on experience in building custom Shopify apps, store setups, and theme customizations along with crafting efficient web applications using MongoDB, Express.js, React.js, and Node.js.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Hi, I'm Aashiq Farid, a skilled MERN Stack Developer and Shopify Expert with a passion for creating high-performance web and e-commerce applications. Currently, I'm contributing to innovative projects at Code Graphers, where I apply modern development practices to deliver scalable and impactful Shopify and web solutions.`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I have expertise in the MERN stack and Shopify platform, focusing on developing seamless, responsive applications and customized e-commerce solutions. With experience in technologies like React.js, Node.js, Express.js, MongoDB, and Shopify APIs, I am dedicated to solving complex problems and delivering user-centric platforms.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Agora Affiliate Program Manager',
                timeframe: '2024',
                location: 'Shopify App',
                role: 'Full Stack Developer',
                achievements: [
                    <>Developed a Shopify app to import Amazon products with variants and reviews using PAAPI integration.</>,
                    <>Handled entire frontend (React.js) and backend (Node.js) development independently.</>,
                    <>Built logic for dynamic product display, plan-based restrictions, and review imports using theme app extensions.</>,
                    <>Integrated Amazon PAAPI for fetching product data and handled advanced metafield management.</>
                ],
                link: 'https://apps.shopify.com/agora-amazon-affiliate-tool',
                images: []
            },
            {
                company: 'Genie Pickup Shopify App',
                timeframe: '2024',
                location: 'Shopify App',
                role: 'Full Stack Developer',
                achievements: [
                    <>Developed features to add pickup locations in Shopify stores using custom app.</>,
                    <>Built the frontend using React.js and backend with Ruby.</>,
                    <>Integrated pickup logic within Shopify's checkout and cart flow using theme app extensions.</>,
                    <>Contributed to entire architecture and functionality independently.</>
                ],
                link: 'https://apps.shopify.com/store-pickup-by-genie-apps',
                images: []
            },
            {
                company: 'Code Graphers',
                timeframe: '01/2024 – Present',
                location: 'Lahore, Pakistan',
                role: 'MERN Stack Developer / Shopify Developer',
                achievements: [
                    <>Developed and maintained scalable web applications using React.js, Node.js, and MongoDB.</>,
                    <>Built and deployed Shopify apps using Shopify CLI and integrated with storefronts via theme app extensions.</>,
                    <>Implemented advanced Shopify features like metafields, custom sections, and Shopify Admin REST & GraphQL APIs.</>,
                    <>Led store setup and theme customization projects, optimizing UI/UX for merchants.</>,
                    <>Collaborated with cross-functional teams to deliver user-friendly solutions tailored to client needs.</>
                ],
                images: []
            },
            {
                company: 'Code Graphers (Internship)',
                timeframe: '09/2023 – 12/2023',
                location: 'Lahore, Pakistan',
                role: 'MERN Stack Developer Intern',
                achievements: [
                    <>Gained hands-on experience with the MERN stack and contributed to live projects.</>,
                    <>Learned Shopify app development workflows and assisted in storefront customization.</>,
                    <>Developed RESTful APIs and front-end components, ensuring seamless data flow and user interaction.</>,
                    <>Learned and applied agile methodologies for efficient project management.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true,
        title: 'Studies',
        institutions: [
            {
                name: 'University of Okara',
                timeframe: '10/2019 – 08/2023',
                description: <>Bachelor of Studies in Computer Science.</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical Skills',
        skills: [
            {
                title: 'Languages',
                description: <>JavaScript, TypeScript, HTML, CSS — These are the core languages I work with to create dynamic and responsive web and Shopify applications.</>,
                images: []
            },
            {
                title: 'Frameworks & Libraries',
                description: <>MongoDB, Express.js, React.js, Node.js, Next.js, Redux, Shopify CLI, Liquid, JSON Web Tokens — I use these powerful frameworks and tools to build scalable, efficient, and highly interactive apps and storefronts.</>,
                images: []
            },
            {
                title: 'Shopify Development',
                description: <>Experience building custom Shopify apps, theme app extensions, metafield management, and dynamic product displays. I also offer full Shopify store setup and responsive theme customization using Liquid and Polaris.</>,
                images: []
            },
            {
                title: 'Tools',
                description: <>GitHub, Jira, Figma, VS Code, Postman — These tools are essential for managing development workflows, collaborating with teams, and ensuring smooth version control and deployment processes.</>,
                images: []
            },
            {
                title: 'Languages Spoken',
                description: <>English (Proficient), Urdu (Fluent) — I can effectively communicate in both languages, enabling me to work with diverse teams and clients.</>,
                images: []
            },
            {
                title: 'Other Technical Skills',
                description: <>Experience in building secure authentication with JWT, developing Shopify-integrated systems, implementing form validations, and working with RESTful APIs and GraphQL. I focus on improving the performance and scalability of both apps and e-commerce stores.</>,
                images: []
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design, development, and Shopify projects by ${person.name}`
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    images: [
        { src: '/images/gallery/img-01.jpg', alt: 'image', orientation: 'vertical' },
        { src: '/images/gallery/img-02.jpg', alt: 'image', orientation: 'horizontal' },
        { src: '/images/gallery/img-03.jpg', alt: 'image', orientation: 'vertical' },
        { src: '/images/gallery/img-04.jpg', alt: 'image', orientation: 'horizontal' },
        { src: '/images/gallery/img-05.jpg', alt: 'image', orientation: 'horizontal' },
        { src: '/images/gallery/img-06.jpg', alt: 'image', orientation: 'vertical' },
        { src: '/images/gallery/img-07.jpg', alt: 'image', orientation: 'horizontal' },
        { src: '/images/gallery/img-08.jpg', alt: 'image', orientation: 'vertical' },
        { src: '/images/gallery/img-09.jpg', alt: 'image', orientation: 'horizontal' },
        { src: '/images/gallery/img-10.jpg', alt: 'image', orientation: 'horizontal' },
        { src: '/images/gallery/img-11.jpg', alt: 'image', orientation: 'vertical' },
        { src: '/images/gallery/img-12.jpg', alt: 'image', orientation: 'horizontal' },
        { src: '/images/gallery/img-13.jpg', alt: 'image', orientation: 'horizontal' },
        { src: '/images/gallery/img-14.jpg', alt: 'image', orientation: 'horizontal' },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
