// Projects

// const projects = [
//     {
//         name: 'PROJECT ONE',
//         type: 'WEB DESIGN',
//         pos: 'start',
//         image:  'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=2370&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , 
//     },
//     {
//         name: 'PROJECT 2',
//         type: 'GRAPHIC DESIGN',
//         pos: 'mid',
//         image: 'https://images.unsplash.com/reserve/aOcWqRTfQ12uwr3wWevA_14401305508_804b300054_o.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2952&q=80' 
//     },
//     {
//         name: 'PROJECT 3',
//         type: 'TYPE DESIGN',
//         pos: 'end',
//         image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'    },
//     {
//         name: 'PROJECT 4',
//         type: 'WEB DESIGN',
//         pos: 'mid',
//         image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2564&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
//     },
//     {
//         name: 'PROJECT 5',
//         type: 'WEB DESIGN',
//         pos: 'end',
//         image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
//     },
//     {
//         name: 'PROJECT 6',
//         type: 'GRAPHIC DESIGN',
//         pos: 'mid',
//         image: 'https://images.unsplash.com/photo-1561998338-13ad7883b20f?auto=format&fit=crop&q=80&w=2487&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
//     },
//     {
//         name: 'PROJECT 7',
//         type: 'WEB DESIGN',
//         pos: 'start',
//         image: 'https://images.unsplash.com/photo-1454117096348-e4abbeba002c?auto=format&fit=crop&q=80&w=2602&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
//     },
//     {
//         name: 'PROJECT 8',
//         type: 'TYPE DESIGN',
//         pos: 'end',
//         image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
//     },

// ]

// const createProjects = () => {
//     projects.forEach(project => {
//         let panel = document.createElement('div');
//         panel.classList.add('project', `${project.pos}`);

//         let imageContainer = document.createElement('div');
//         imageContainer.className = `image__container`;

//         let image = document.createElement('img');
//         image.classList.add('project__image');
//         image.src = project.image;

//         let projectDetails = document.createElement('div');
//         projectDetails.classList.add('project__details');

//         let projectTitle = document.createElement('p');
//         projectTitle.innerText = project.name;

//         let projectType = document.createElement('p');
//         projectType.innerText = project.type;

//         projectDetails.append(projectTitle, projectType)

//         imageContainer.appendChild(image);
//         panel.append(imageContainer, projectDetails);

//         document.querySelector('.projects__slider').appendChild(panel);
//     })

// }

const projects = [
    {
        name: 'Vainqueur Clothing',
        type: 'E-Commerce',
        pos: 'start',
        image: 'https://akxshhans.github.io/Vainqueur-try/nikk%20and%20girl.jpg',
        link: 'https://akxshhans.github.io/Vainqueur-try/'
    },
    {
        name: 'Photography',
        type: 'WEB DESIGN',
        pos: 'mid',
        image: 'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: 'https://akxshhans.github.io/Photography---Infinite/'
    },
    {
        name: 'Apple Headphones Re-designed',
        type: 'UI/UX DESIGN',
        pos: 'end',
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTR3?wid=890&hei=890&fmt=jpeg&qlt=90&.v=1687660671097',
        link: 'https://akxshhans.github.io/Appleredesigned/'
    },
    {
        name: 'MODERN PORTFOLIO',
        type: 'PORTFOLIO',
        pos: 'mid',
        image: 'https://akashwebdevagency.vercel.app/Akxsh%20Vainqueur%20ceour%20(1).png',
        link: 'https://akashwebdevagency.vercel.app/'
    },
    {
        name: 'Harnish Clothing',
        type: 'WEB DESIGN',
        pos: 'end',
        image: 'https://images.unsplash.com/photo-1584969405346-5230ae2bc4fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D',
        link: 'https://akxshhans.github.io/Harnish-Cloths/index.html'
    },
    {
        name: 'Sneakers',
        type: 'E COMMERCE',
        pos: 'mid',
        image: 'https://images.unsplash.com/photo-1511499008188-de491bbbae98?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNuZWFrZXJzfGVufDB8fDB8fHww',
        link: 'https://akxshhans.github.io/Sneakers/'
    },
    {
        name: 'Hans Freres',
        type: 'WEB DESIGN',
        pos: 'start',
        image: 'https://images.unsplash.com/photo-1721614462689-9f61b9349541?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: 'https://akxshhans.github.io/Hans-freres/'
    },
    {
        name: 'Photogrpahy Site',
        type: 'TYPE DESIGN',
        pos: 'end',
        image: 'https://images.unsplash.com/photo-1548502499-ef49e8cf98d4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: 'https://akxshhans.github.io/Premium-Template-akash/'
    }
];

const createProjects = () => {
    projects.forEach(project => {
        let panel = document.createElement('div');
        panel.classList.add('project', `${project.pos}`);

        let link = document.createElement('a');
        link.href = project.link;
        link.target = '_blank'; // Open in a new tab

        let imageContainer = document.createElement('div');
        imageContainer.className = `image__container`;

        let image = document.createElement('img');
        image.classList.add('project__image');
        image.src = project.image;

        let projectDetails = document.createElement('div');
        projectDetails.classList.add('project__details');

        let projectTitle = document.createElement('p');
        projectTitle.innerText = project.name;

        let projectType = document.createElement('p');
        projectType.innerText = project.type;

        projectDetails.append(projectTitle, projectType);

        imageContainer.appendChild(image);
        link.appendChild(imageContainer);
        panel.append(link, projectDetails);

        document.querySelector('.projects__slider').appendChild(panel);
    });
}

createProjects();




// Blog posts

const blogPosts = [
    {
        title: '@vainqueuragency ',
        time: 'INSTAGRAM',
        image: 'https://images.unsplash.com/photo-1633113247735-45a969eb9266?q=80&w=1537&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: '@vainqueuragency1',
        time: 'TWITTER',
        image: 'https://images.unsplash.com/photo-1705904506582-6552c35a2dc4?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    {
        title: 'info@vainqueuragency.com',
        time: 'EMAIL',
        image: 'https://plus.unsplash.com/premium_photo-1682309526815-efe5d6225117?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    }
]

const createBlogposts = () => {
    blogPosts.forEach(post => {
        let blogPostSection = document.createElement('div');
        blogPostSection.classList.add('blog__post');

        let postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.href = 'https://www.google.com';

        let imageContainer = document.createElement('div');
        imageContainer.classList.add('post__image__container');

        let image = document.createElement('img');
        image.classList.add('blog__post__img');
        image.src = post.image;


        let postDetails = document.createElement('div');
        postDetails.classList.add('post__details');

        let postTitle = document.createElement('p');
        postTitle.innerText = post.title;

        let postTime = document.createElement('p');
        postTime.innerText = post.time;

        imageContainer.appendChild(image);
        postDetails.append(postTitle, postTime);
        postDiv.append(imageContainer, postDetails)
        blogPostSection.appendChild(postDiv);

        document.getElementById('blog').appendChild(blogPostSection)

    })
}



export {
    createProjects,
    createBlogposts
}


