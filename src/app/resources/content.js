import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Aashiq',
    lastName:  'Farid',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'MERN Stack Developer',
    avatar:    '/images/avatar1.jpg',
    location:  'Asia/Pakistan/Lahore',
    languages: ['English', 'Urdu']
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share insights on the intersection of creativity and engineering.</>
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
    description: "Portfolio website showcasing my work as a MERN Stack Developer and Blockchain Enthusiast. I specialize in building secure, efficient, and scalable web applications using the latest technologies.",
    headline: <>Mern Stack Developer</>,
    subline: <>I'm Aashiq Farid, a dedicated MERN Stack Developer currently working at Code Graphers. With a strong foundation in MongoDB, Express.js, React.js, and Node.js, I specialize in crafting efficient and user-friendly web applications. I continuously strive to improve my skills and deliver impactful solutions that address real-world challenges.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Hi, I'm Aashiq Farid, a skilled MERN Stack Developer with a passion for creating high-performance web applications. Currently, I'm contributing to innovative projects at Code Graphers, where I apply modern development practices to deliver scalable solutions.`,
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
        description: <>I have expertise in the MERN stack, focusing on developing seamless and responsive applications. With experience in technologies like React.js, Node.js, Express.js, and MongoDB, I am dedicated to solving complex problems and delivering user-centric solutions.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Code Graphers',
                timeframe: '01/2024 – Present',
                location: 'Lahore, Pakistan',
                role: 'MERN Stack Developer',
                achievements: [
                    <>Developed and maintained scalable web applications using React.js, Node.js, and MongoDB.</>,
                    <>Collaborated with cross-functional teams to deliver user-friendly solutions tailored to client needs.</>,
                    <>Implemented advanced features like authentication, payment gateways, and real-time notifications.</>,
                    <>Optimized database performance by applying best practices in data modeling and indexing.</>
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
                description: <>JavaScript, TypeScript, HTML, CSS — These are the core languages I work with to create dynamic and responsive web applications.</>,
                images: []
            },
            {
                title: 'Frameworks & Libraries',
                description: <>MongoDB, Express.js, React.js, Node.js, Next.js,  Redux, Material-UI, Ant Design, JSON Web Tokens — I use these powerful frameworks and libraries to build scalable, efficient, and highly interactive web applications.</>,
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
                description: <>Experience in building secure authentication with JWT, implementing form validations, developing responsive designs, and working with RESTful APIs. I’m always focused on improving the security and scalability of applications.</>,
                images: []
            }
        ]
    }
}



const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
