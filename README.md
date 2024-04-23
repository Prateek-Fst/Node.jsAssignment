# Book Management System

This project is a simple book management system implemented using Node.js, Express, and MongoDB.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/book-management-system.git
cd book-management-system
npm install
```
Set up environment variables:
1. Create a .env file in the root directory.
2. Define the following environment variables in the .env file:
   ```bash
   MONGODB_URI=your_mongodb_uri
   PORT=3000
   npm start
     ```
   ## API Endpoints

GET /books: Retrieve all books.
POST /books: Create a new book.
DELETE /books/:id: Delete a book by ID.
PUT /books/:id: Update a book by ID.
GET /books/search?title=title&maxage=maxage&semester=semester: Search books by title, maximum age, and semester.
