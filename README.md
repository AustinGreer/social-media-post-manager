# Social Media Post Manager

Welcome! This challenge is designed to evaluate your React skills, your ability to handle conditional rendering, state management, reusable components, and making decisions that impact the user experience (UX) and user interface (UI). You’ll be building a social media post manager that supports different types of posts, which will allow you to work with forms, API interactions, and data validation.

**Note on Bonus Features**: You are not expected to do all the bonus tasks. Think of them as optional ways to showcase your skills. This challenge isn’t about how much you can do; it’s about what you choose to include and how effectively you implement it. We want to see your decision-making process as you determine which features enhance the UX/UI and demonstrate your coding abilities.

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- MockAPI account set up with a “posts” resource.

### Project Setup

We’ll use **Next.js** as the setup framework. While Next.js has features for server-side rendering, you won’t need to use them here. We’re only using Next.js for its easy project setup and bundling capabilities.

#### Step 1: Initialize the Project - DONE

1. Run the following command in your terminal to create the project:
   - `npx create-next-app@latest social-media-post-manager`
2. Choose **JavaScript** as the language (you can select TypeScript if you’re comfortable with it).
3. Once setup is complete, navigate into the project directory:
   - `cd social-media-post-manager`

#### Step 2: Start the Development Server

To start the project locally, run:

- `npm run dev`
  Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

#### Step 3: Install Axios - DONE

For handling API requests, install Axios:

- `npm install axios`

---

## Mock API Setup with MockAPI

We’ll use [MockAPI](https://mockapi.io/) for a RESTful API with full CRUD capabilities, persistence, and custom fields.

#### Setting Up MockAPI

1. **Sign Up for MockAPI**:

   - Go to https://mockapi.io/ and sign up for a free account.

2. **Create a New Project**:

   - Click **Create New Project** and name it (e.g., "Social Media Post Manager").

3. **Create a “Posts” Resource**:

   - In your project, click **Add a Resource** to create a new endpoint called `posts`.
   - Define the following fields in the resource:
     - **id**: auto-generated by MockAPI
     - **title**: string
     - **body**: string
     - **type**: string (indicating post type - `Text`, `Image`, or `Video`)
     - **imageUrl**: string (for Image post type)
     - **videoUrl**: string (for Video post type)

4. **Get the Base URL**:
   - Rename the file `rename_me_to.env` to `.env` (note, never commit this file, it contains secrets)
   - Copy your project’s base URL from MockAPI, which will look like `https://YOUR_PROJECT_ID.mockapi.io/api/v1`, and place it inside your .env file as `NEXT_PUBLIC_MOCK_API_URL`

#### Setting Up Axios to Use MockAPI

1. In your React app, create an `api.js` file to configure Axios with the base URL:

````js
import axios from 'axios';
 const api = axios.create({ baseURL: 'https://YOUR_PROJECT_ID.mockapi.io/api/v1', });
 export default api;
 ```

1. Example Request with Axios:

 - Here’s a sample request for fetching all posts:

   ```javascript
   import api from "./api";

   const fetchPosts = async () => {
     try {
       const response = await api.get("/posts");
       console.log(response.data);
     } catch (error) {
       console.error("Error fetching posts:", error);
     }
   };
````

---

## Functionality and Requirements

#### Post Types

The app will support three types of posts, each with unique requirements:

1. **Text Post** - Contains `title` and `body`.
2. **Image Post** - Contains `title`, `body`, and an `imageUrl`.
3. **Video Post** - Contains `title`, `body`, and a `videoUrl`.

Add basic validation:

- **Image URL Validation**: Ensure `imageUrl` ends with common image extensions (e.g., `.jpg`, `.png`).
- **Video URL Validation**: Ensure `videoUrl` links to a video (e.g., `.mp4`, `.mov`, or YouTube).

---

#### Screens

1. **Home Screen**:

- Display all posts fetched from MockAPI, showing `title`, type, and a label or thumbnail based on post type.
- Include a search bar to filter posts by title.
- Reusable Components: Use components like `PostList` and `PostItem` to display posts and individual post previews.

2. **Post Detail Screen**:

- Display the full details of each post based on type:
  - **Text Post**: Show `title` and `body`.
  - **Image Post**: Show `title`, `body`, and an image (using `imageUrl`).
  - **Video Post**: Show `title`, `body`, and an embedded video (using `videoUrl`).
- Include “Edit” and “Delete” options for each post.

3. **Create/Edit Post Screen**:

- Add a dropdown for selecting post type (Text, Image, Video).
- Show conditional fields based on type:
  - **Text Post**: `title` and `body`.
  - **Image Post**: `title`, `body`, and `imageUrl`.
  - **Video Post**: `title`, `body`, and `videoUrl`.
- Validate each field based on the selected type.

---

#### Core Requirements (Bare Minimum)

1. **Display Posts with Types**:

- Fetch posts from `GET /posts` and display them on the Home screen.
- Use reusable components (`PostList`, `PostItem`) to show post previews and details.
- Implement a search bar to filter posts by title.

2. **Create/Edit/Delete Posts**:

- Use a form that conditionally renders fields based on post type.
- Submit new posts to MockAPI via `POST /posts` and update existing posts via `PUT /posts/:id`.
- Include field validation based on post type.
- Delete posts via `DELETE /posts/:id`.

3. **Reusable Components**:

- Create and reuse components to keep the app modular and maintainable.

---

## Bonus Features (Optional – Choose Wisely)

We want to see what you think will best showcase your skills. Choose wisely; focus on quality over quantity.

1. **Deploy to GitHub Pages**:

- Deploy the app to GitHub Pages and configure automatic deployment on push to `master`.

2. **Enhanced Filtering and Sorting**:

- Add filters to display specific post types or sort by length of title/body.

3. **Data Transformation Challenge**:

- Use transformations to show stats like the total counts for each post type and average word count.

4. **Advanced URL Validation**:

- Use regex for robust URL validation in `imageUrl` and `videoUrl`.

5. **Responsive Design**:

- Style with SASS/LESS and make the app mobile-friendly.

6. **Fancy UI**

- Make the UI really nice and clean!

---

## Guidelines and Expectations

1. **Core Features**: Your primary task is to complete the core requirements with a focus on well-structured, reusable code. Avoid hacks and ensure each component and feature has a clear purpose.

2. **Making Choices**: You are free to choose from the bonus features based on what you feel will best showcase your skills. We’re not interested in sheer volume of features but rather in seeing thoughtful decisions, effective UX/UI enhancements, and your problem-solving approach.

3. **Code Quality and Usability**: We want to see readable, maintainable code that demonstrates how you handle real-world app requirements, as well as attention to UX/UI considerations.

4. **UI And Presentation**: I am not expecting you to spend significant time finetuning the styles of your components. A nice and clean UI is definitely important, but as long as you are following basic principles (8pt rule, padding and margins, open sans font, etc, I do not really care what you make this look like). If you want to show off your styling skills and go all out on the UI, feel free to do so! If you feel that is a strong suit of yours then please highlight it as much as possible. As a general rule though, the point of this is to gauge your javascript and decision making abilities. You are also free to use Material UI or Bootstrap, or whatever you want.

---

## Troubleshooting Tips

- **CORS Issues**: Sometimes MockAPI might cause CORS issues; if this happens, try refreshing or clearing your browser cache. Alternatively, use a CORS extension.
- **API Requests Failing**: Double-check your `baseURL` in the Axios setup and ensure you’re using the correct endpoint paths.
- **Conditional Rendering Issues**: Ensure each post type renders the appropriate fields by using conditional logic (e.g., render `imageUrl` field only for Image posts).
- **GitHub Pages Deployment Issues**: If your app isn’t displaying properly on GitHub Pages, ensure you’ve configured the `next.config.js` for static export:
- `module.exports = { output: 'export' };`

---

## Submission

Push your project to GitHub and provide a deployed link to GitHub Pages. Share notes on your approach, decisions, and areas you’d expand with more time.

Good luck, and enjoy the challenge! Please reach out if you get stuck on anything. Nothing in here is intended to trick you or cause issues with running/building the project. It is hopefully set up and configured in a way that allows you to hit the ground running and start making immediate progress.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
