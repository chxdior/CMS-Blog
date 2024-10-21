
# CMS Blog

## Description
CMS Blog is a CMS-style blog site where developers can publish articles, blog posts, and their thoughts and opinions on tech-related topics. Users can sign up, create, edit, and delete their posts, and comment on other developers' posts. This application follows the MVC paradigm, utilizing Handlebars.js for templating, Sequelize as the ORM, and express-session for authentication.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)


## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>

2. Navigate to the project directory:

cd cmsblog

3. Install the necessary packages:

npm install

4. Set up the environment variables:

Create a .env file in the root directory and add the following:

DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
SESSION_SECRET=your_secret_key
PORT=3001
NODE_ENV=development

5. Create the database and tables:

npx sequelize-cli db:create
npx sequelize-cli db:migrate

6. Start the application:

npm start

## Usage
Visit the homepage to view existing blog posts.
Sign up or log in to create, edit, or delete your own blog posts.
Comment on other users' posts after signing in.

## Features
User authentication with sign-up, login, and logout.
Ability to create, edit, delete blog posts.
Ability to comment on blog posts.
Responsive design for desktop and mobile devices.
Technologies Used
Backend: Node.js, Express.js, Sequelize, PostgreSQL
Frontend: HTML, CSS, JavaScript, Handlebars.js
Authentication: express-session, bcrypt
