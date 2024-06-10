# Blog Post Api

Comprehensive API dealing with authentication of user and CRUD operations on blogposts.

## Table of Contents

- [Project Overview](#project-overview)
- [Project Setup](#project-setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Authentication](#authentication)
  - [Sign Up](#sign-up)
  - [Log In](#log-in)
- [Blog API](#blog-api)
  - [Create Blog](#create-blog)
  - [Get All Blogs](#get-all-blogs)
  - [Get Single Blog](#get-single-blog)
  - [Update Blog](#update-blog)
  - [Delete Blog](#delete-blog)
  - [Filter Blogs](#filter-blogs)

## Project Overview

The project aims to develop a RESTful API backend for a blogging platform. This platform allows users to create, read, update, and delete blog posts. Each blog post consists of a title, content, images, and is associated with a single user (author). The API provides endpoints for user authentication, blog post management, and filtering blog posts based on title and author.

## Key Features:

- **User Authentication**: Users can sign up for a new account and log in securely using JWT authentication.
- **Blog Post Management**: Users can create, read, update, and delete their blog posts.
- **Filtering**: The API supports filtering blog posts by title and author.
- **Secure Authentication**: JWT authentication ensures secure user authentication and authorization.

## Technologies Used:

- **Node.js**: Backend server environment.
- **Express.js**: Web framework for building RESTful APIs.
- **JWT**: JSON Web Tokens for secure authentication.
- **MockAPI**: Used for mocking a backend server and storing/retrieving data during development.

## Project Structure:

- **Controllers**: Handle incoming requests, process data, and send responses.
- **Services**: Business logic layer responsible for interacting with the database.
- **Middleware**: Authentication middleware for verifying JWT tokens.
- **Models**: Define schemas for user and blog post data.
- **Routes**: Define API routes and endpoint handlers.

## Future Enhancements:

- **User Roles and Permissions**: Implement role-based access control for managing blog posts.
- **Comments and Likes**: Add functionality for users to comment on and like blog posts.
- **Search Functionality**: Implement search functionality to search for blog posts by keywords.
- **Pagination**: Add pagination support for listing blog posts.
- **DB Integration**: Use actual DB instead of a MockApi.

## Project Setup

The setup for this project is minimal and involves installing the required packages and starting the servers. Additionally, you'll need to create a `.env` file based on the provided `.env.sample` file.

### Installation

To install the required packages, run the following command in your terminal:

```bash
npm install
```
### Run Server

For Development Mode

```bash
npm run dev
```

### Environment Variables

Before starting the server, make sure to create a .env file in the root directory of the project. You can copy the contents from the .env.sample file and customize them as needed.

Here's an example of what the .env file might look like:

```makefile
Copy code
PORT=3000
JWT_SECRET=your_secret_key_here
```
Replace `your_secret_key_here` with a secure key for JWT token signing.

Ensure that the .env file is not committed to version control to keep sensitive information secure.

### Prerequisites

The database for the project is a mockup for now and can be setted up on [mockapi.io](https://mockapi.io/).
- Create a project
- Add `users` resource, refer to the models for schema.
- Add `blogs` resource, refer to the models for schema.


## Authentication

Users can sign up and login by making the following requests

### Sign Up

**Endpoint:** `POST /api/v1/auth/signup`

**Description:** Allows users to create a new account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:** 
Returns new user as response

```json
{
  "email": "user@example.com",
  "password": "password123",
  "id": "1"
}
```

### Log In

**Endpoint:** `POST /api/v1/auth/login`

**Description:** Allows users to log in to their account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "your_jwt_token"
}
```
Generally this token is sent to user as a cookie but that implementation has been skipped due to the time constraints.

## Blog API

Explain each API endpoint related to blog posts.

### Create Blog

**Endpoint:** `POST /api/v1/blogs`

**Description:** Allows users to create a new blog post.

**Request Body:**
```json
{
  "title": "Blog Title",
  "content": "Blog content goes here",
  "images": ["image1.jpg", "image2.jpg"]
}
```

**Response:**
```json
{
  "id": "blog_id",
  "title": "Blog Title",
  "content": "Blog content goes here",
  "authorId": "user_id",
  "images": "image1.jpg,image2.jpg"
}
```

### Get All Blogs

**Endpoint:** `GET /api/v1/blogs`

**Description:** Retrieves a list of all blog posts.

**Response:**
```json
[
  {
    "id": "blog_id",
    "title": "Blog Title",
    "content": "Blog content goes here",
    "authorId": "user_id",
    "images": ["image1.jpg", "image2.jpg"]
  },
  {
    "id": "blog_id",
    "title": "Blog Title",
    "content": "Blog content goes here",
    "authorId": "user_id",
    "images": "image1.jpg,image2.jpg"
  }
]
```

### Get Single Blog

**Endpoint:** `GET /api/v1/blogs/:id`

**Description:** Retrieves details of a single blog post.

**Response:**
```json
{
  "id": "blog_id",
  "title": "Blog Title",
  "content": "Blog content goes here",
  "authorId": "user_id",
  "images": "image1.jpg,image2.jpg"
}
```

### Update Blog

**Endpoint:** `PUT /api/v1/blogs/:id`

**Description:** Allows users to update an existing blog post.

**Request Body:**
```json
{
  "title": "Updated Blog Title",
  "content": "Updated blog content goes here",
  "images": ["updated_image1.jpg", "updated_image2.jpg"]
}
```

**Response:**
```json
{
  "id": "blog_id",
  "title": "Updated Blog Title",
  "content": "Updated blog content goes here",
  "authorId": "user_id",
  "images": "updated_image1.jpg,updated_image2.jpg"
}
```

### Delete Blog

**Endpoint:** `DELETE /api/blogs/:id`

**Description:** Allows users to delete an existing blog post.

**Response:**
```json
{
  "message": "Blog deleted successfully"
}
```

### Filter Blogs

**Endpoint:** `GET /api/blogs?title=keyword&author=author_id`

**Description:** Retrieves a filtered list of blog posts by title and/or author.

**Response:**
```json
[
  {
    "id": "blog_id",
    "title": "Blog Title",
    "content": "Blog content goes here",
    "authorId": "user_id",
    "images": ["image1.jpg", "image2.jpg"]
  }
]
```

