# SHL Assessment

## Project Description

The objective of this project was to design and develop an end-to-end application that showcases information extracted from various projects. The application allows users to explore project details and perform searches. Key requirements included:

1. Loading project details from a provided file containing data from 100 sample projects.
2. Building backend APIs to serve this data to the frontend.
3. Creating a user interface that presents project information in a gallery view or as tiles.
4. Implementing a project detail view for in-depth exploration.
5. Developing a search functionality to locate specific projects based on attributes.
6. Optionally, enhancing search capabilities with GPT-3.5/4 for multi-attribute queries.
7. Optionally, ensuring the application is responsive for different screen sizes, including mobile.

## Technologies Used

### Frontend:

- **React.js**: Employed React.js for frontend development to leverage its component-based architecture and efficient rendering.
- **Context API**: Utilized the Context API for state management, enabling seamless data sharing between components.
- **CSS Styling**: Crafted a visually appealing and user-friendly UI without relying on external CSS or UI libraries.

### Backend:

- **Node.js and Express.js**: Chose Node.js and Express.js for the backend to efficiently handle API requests and provide a robust server.
- **MongoDB**: Utilized MongoDB as the database for storing and retrieving project information.

### Search Functionality:

- **OpenAI API**: Incorporated the OpenAI API to enable free-form query searches, allowing users to find projects using natural language queries.

## Project Approach

### Data Loading and Backend Development

The project initiated with the loading of project details from the provided file into a MongoDB database. This involved data parsing and structuring for optimal retrieval.

For the backend, we established RESTful APIs using Node.js and Express.js. These APIs provided endpoints for data retrieval, project details, and search functionality.

### Frontend Development

On the frontend, React.js and Context API were employed to construct an interactive and responsive user interface. The UI was thoughtfully designed to meet project requirements without relying on external CSS or UI libraries.

### Search Functionality

To empower users to search for projects, the OpenAI API was integrated. This enabled free-form queries, permitting users to find projects based on various attributes, including technology stacks.

### Responsiveness

The application was meticulously designed to be responsive, adapting seamlessly to various screen sizes, including mobile devices. Extensive testing ensured compatibility with different devices and orientations.

### Optional Smart Search

As an optional feature, a smart search capability was introduced, employing GPT-3.5/4. This functionality allowed users to perform multi-attribute searches, enhancing the search experience.

## High-Level Sketches

The following high-level sketches provide an overview of the application's user interface, showcasing the custom UI design:

1. **Displaying All Projects**: ![project home](https://raw.githubusercontent.com/srijan450/images/main/shl-assessment-fullstack-1.png)

2. **Detailed Project Information**: ![Project Details](https://raw.githubusercontent.com/srijan450/images/main/shl-assessment-fullstack-2.png)

3. **Free-Form Query Search Result**: ![Free form search result](https://raw.githubusercontent.com/srijan450/images/main/shl-assessment-fullstack-5.png)

4. **Quick Filter Facility**: ![Quick Filters](https://raw.githubusercontent.com/srijan450/images/main/shl-assessment-fullstack-3.png)

5. **Quick Filter Search**: ![Quick Filter Search Result](https://raw.githubusercontent.com/srijan450/images/main/shl-assessment-fullstack-4.png)

## Conclusion

In conclusion, this project successfully delivered on its objectives of creating an end-to-end application for presenting project information. By utilizing React.js, Node.js, MongoDB, and integrating the OpenAI API, we created a feature-rich application that aligns with specified requirements.

The optional smart search feature elevates the user experience by providing advanced search capabilities. The application's responsiveness ensures accessibility across diverse devices.

It is noteworthy that no external CSS, JavaScript frameworks, or UI libraries were employed in the development of this application. The custom UI design underscores the proficiency in crafting visually appealing and intuitive interfaces.

**Links:**

- Frontend Repository: [Frontend Repo Link](https://github.com/srijan450/shl-assessment/tree/master)
- Backend Repository: [Backend Repo Link](https://github.com/srijan450/shl-assessment/tree/server)
- Live Application: [Live App Link](https://srijan450.github.io/shl-assessment/)

A short video demonstrating the application's functionality has been recorded and can be viewed [here](https://drive.google.com/file/d/17lNXQprIU5198aH2L09NUSc6Wb-wr34D/view).

With this project completion I look forward for a positive reply.
