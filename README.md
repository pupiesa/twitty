# Twitty - A Twitter-Like App

Twitty is a practice project for building a Twitter-like social media application using Next.js, Prisma, and MongoDB. This project explores modern full-stack development techniques, including authentication, database interactions, and real-time updates.

## Technologies Used

- **Next.js** - A React framework for server-side rendering and static site generation.
- **Prisma** - An ORM for interacting with the MongoDB database.
- **MongoDB** - A NoSQL database for storing user data, posts, and interactions.
- **Tailwind CSS** - For styling and responsive design.
- **NextAuth.js** - For authentication and user session management.

## Features

- Sign in with Google authentication
- Create and post tweets
- View profile pages
- Click on a post to view its details
- Responsive UI with Tailwind CSS

## Installation & Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/pupiesa/twitty.git
   cd twitty
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and configure the following:

   ```sh
   DATABASE_URL=mongodb+srv://your-mongodb-url
   NEXTAUTH_SECRET=your-secret-key
   NEXTAUTH_URL=http://localhost:3000
   ```

4. Run database migrations:

   ```sh
   npx prisma migrate dev --name init
   ```

5. Start the development server:
   ```sh
   npm run dev
   ```
   The application will be available at `http://localhost:3000`

## Contributing

Feel free to fork this project and submit pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.
