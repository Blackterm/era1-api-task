# ERA1 Project

**ERA1** is a platform where users can participate in events, leave comments, and view event details. This project aims to provide a dynamic experience by simplifying event management and user interaction.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js
- **Databases**: MySQL (User Data), MongoDB (Event Data)
- **Containerization**: Docker
- **Operating System**: Linux

## Project Overview

ERA1 allows users to engage with events in various ways, such as joining events, commenting, and exploring event details. It’s designed to offer a seamless and scalable user experience while handling large amounts of dynamic event data.

## Frontend (React.js)

The frontend of ERA1 is built with **React.js**, offering a responsive, modern user interface that interacts smoothly with the backend API.

- **React.js** is used for its component-based architecture, providing a reusable, maintainable, and dynamic UI.
- It communicates with the backend API (Node.js) to fetch event data, handle user interactions, and display real-time event updates.

## Database Selections and Data Structures

### MySQL (User Data)

- **Data Stored**:
  - User identity information, account details, session management, etc.
- **Reason for Choosing MySQL**:
  - MySQL is ideal for relational data that requires structured queries and relationships.
  - It provides ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring data consistency.
  - High performance for user-based query operations.

### MongoDB (Event Data)

- **Data Stored**:
  - Event details (name, description, date, location, etc.), user comments, participation information, etc.
- **Reason for Choosing MongoDB**:
  - MongoDB is suited for dynamic data with evolving structures, like event-related information.
  - It is schema-less, providing flexibility for large and changing data sets.
  - MongoDB offers scalability for handling large volumes of event and user-generated data.

## Architecture and Clean Code Principles

The project follows **Clean Architecture** principles to ensure that the code is modular, maintainable, and testable. This architecture improves the project’s long-term scalability and ease of maintenance, especially as the project grows.

## Docker Usage

- **Containerization**: The application is containerized using **Docker** to ensure consistency across development, testing, and production environments. Docker improves the portability, scalability, and manageability of the application.
- **Operating System**: The application is deployed and runs on a **Linux** environment, selected for its stability and performance.

## Impact of Database Choices

- **MySQL** is used for managing relational user data, ensuring consistency and structured relationships between data points.
- **MongoDB** is chosen for event data due to its flexibility in handling large, dynamic datasets and its ability to scale horizontally.
- The combination of these two databases provides an efficient and scalable solution for the ERA1 platform.

## Frontend Repository

For the frontend part of the ERA1 project, visit the [React.js repository](https://github.com/Blackterm/era1).

# Docker setup for linux ubuntu

-Install Docker Requirements.

`sudo apt install -y apt-transport-https ca-certificates curl software-properties-common`

-Add Docker Repository. To add Docker's official repository to your system.

`echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee/etc/apt/sources.list.d/docker.list > /dev/null`

-Update and install Docker packages.

`sudo apt update`
`sudo apt install -y docker-ce docker-ce-cli containerd.io`

#Deploying API service to Docker

-First, we access the API service file. Then, we enter the following codes into the terminal and our API service is ready.

`docker-compose build`
`docker-compose up -d`
