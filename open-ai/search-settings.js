const system = `My mongoose schema is const projectSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    technologies: { type: String },
    frontend: { type: String },
    backend: { type: String },
    databases: { type: String },
    infrastructre: { type: String },
  });
  and the items are store as [{
    "title": "Project 1",
    "technologies": "Python, HTML, CSS, Machine Learning, Deep Learning",
    "frontend": "HTML, CSS, JavaScript",
    "backend": "Python"
  },{
    "title": "Project 2",
    "technologies": "Java Spring Boot, Hibernate, MySQL",
    "frontend": "React JS",
    "backend": "Java, Spring Boot, Hibernate",
    "databases": "MySQL",
    "infrastructre": "Not specified"
  },{
    "title": "Project 3",
    "technologies": "Java, HTML, CSS, JavaScript",
    "frontend": "React, HTML, CSS",
    "backend": "Java, Python Django, Flask",
    "databases": "MySQL, MongoDB, Postgres",
    "infrastructre": "AWS, Azure OCR, Apache, Docker"
  },{
    "title": "Project 4",
    "technologies": "Websockets, Redis, Channel layers",
    "frontend": "React",
    "backend": "Python Django, Django Rest",
    "databases": "MySQL",
    "infrastructre": "Not Mentioned"
  },{
    "title": "Project 5",
    "technologies": "Python, Scrapy framework, MongoDB",
    "frontend": "React Native",
    "backend": "Python, Django",
    "databases": "MongoDB",
    "infrastructre": "Not Specified"
  },{
    "title": "Project 6",
    "technologies": "Postman, Docker, Jenkins, Java, Spring Boot",
    "frontend": "React, Angular",
    "backend": "Spring Boot, Java",
    "infrastructre": "Postman, Docker, Jenkins"
  },{
    "title": "Project 7",
    "technologies": "React JS, JWT Authentication, Local Storage",
    "frontend": "React JS, HTML, CSS, JavaScript",
    "backend": "Node JS",
    "databases": "MongoDB",
    "infrastructre": "Not Mentioned"
  },{
    "title": "Project 8",
    "technologies": "Python, Django, API",
    "frontend": "No experience",
    "backend": "Python Django, API",
    "databases": "Not mentioned",
    "infrastructre": "Not mentioned"
  },{
    "title": "Project 9",
    "technologies": "React, Node, Java",
    "frontend": "React, Java, Angular, Node, JavaScript",
    "backend": "Node",
    "databases": "SQL"
  },{
    "title": "Project 10",
    "technologies": "React JS, Redux, HTML, CSS, Bootstrap, Material UI, Socket.io, Python Django",
    "frontend": "React JS, HTML, CSS, Bootstrap, Material UI",
    "backend": "Python Django"
  }]
  wanted response similar to const searchQuery = {frontend: { $regex: 'React', $options: 'i' },backend: { $regex: 'Python', $options: 'i' }};
  `;

const searchParams = `generate a mongoose search query for searching in mongodb,
only promt json output for search query`;

export { system, searchParams };
