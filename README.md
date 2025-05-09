







# 🦬  Buffalo – Minisite Template

This project is a Next.js-based web application for managing various promotions and competitions. It uses a flexible theming system that allows easy customization based on different configurations.

## Features
- Age gate to ensure users are 18 or older
- Multiple promotional pages with content customization based on the theme
- Simple routing structure for easy navigation
- Responsive design that works across various devices

## Getting Started

To reuse this build for your own project, follow the steps below:

### Prerequisites

Before running this project locally, ensure that you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes bundled with Node.js)
- A Neon DB instance for PostgreSQL (or any database service like Supabase) for database connectivity



### Cloning the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/buffalo-trace.git
cd buffalo-trace
```

###  Necessary dependencies

```bas
npm install
```


### Setting Up Environment Variables
Create a .env.local file in the root of the project and add your environment variables:
```bas

```


### Running the Application Locally

```bas
npm run dev
```

### Deployment to [Vercel](https://vercel.com)

To deploy this app to Vercel:
	1.	Create an account on Vercel.
	2.	Link your GitHub repository to Vercel.
	3.	Vercel will automatically detect the project settings and deploy it.

Make sure to set up your environment variables in Vercel as well, by going to your project settings and adding the required keys under the Environment Variables section.

### Customizing the Build

You can customize the build based on your theme and project configuration:


1. Update the siteConfig object for each theme in the `pages/_app.js` file. For example:
```bas
const config = sites[host] || sites.default;
```

2.	Modify the text, images, and other UI components to fit your project’s branding. The content for each page is stored in the respective theme’s section of the config file.

3.	Add new routes or modify existing ones to support additional features.


### Database Configuration

The application uses a PostgreSQL database for storing user entries and other data.
1.	Set up your PostgreSQL database on [Neon](neon.tech) or [Supabase](https://supabase.com).
2.	Connect your database to the project by configuring the `POSTGRES_URL` in the `.env.local` file.

Additional Customization
-	You can easily add new pages or components to the project by creating new files in the pages or components directories.
-	To add more themes, simply extend the copyByTheme object in the relevant page files and add corresponding text content.

Project Structure

```bash
root/
├── components/
│   ├── AgeGate.js       # Modal component for age verification
│   ├── Dropdown.js      # Reusable dropdown component for form fields
│   ├── Footer.js        # Footer with branding and "Drink Responsibly" messaging
│   └── TextInput.js     # Reusable text input component for form fields
├── config/
│   └── sites.js     	 # Theme(s) configuration (e.g., startDate, endDate, etc.
├── pages/
│   ├── api/
│   │   └── enter.js     # API route handling form submissions
│   ├── _app.js          # Custom App to load global styles, handle Age Gate, and route Holding page
│   ├── holding.js       # Holding page displaying "We're not quite open yet" with a countdown/date
│   ├── index.js         # Landing page with promotion details and a "Continue" button
│   ├── entry.js         # Entry form page that conditionally renders fields based on version
│   ├── goodluck.js      # Confirmation page after a successful entry submission
│   ├── closed.js        # Page displayed when the promotion is closed
│   └── terms.js         # Terms & Conditions page
├── styles/
│   └── globals.css      # Global CSS styles for resets, typography, forms, buttons, and modals
├── .env.local           # Environment variables (e.g., NEXT_PUBLIC_FORM_VERSION, NEXT_PUBLIC_START_DATE)
├── package.json         # Project configuration and dependencies
└── README.md            # Project overview and instructions

```
Each file plays a specific role:
-	`components/`: Contains reusable UI elements that ensure consistency across pages.
-	`config/sites.js`: Define the new theme with specific configuration.
-	`pages/`: Houses the Next.js pages including API routes and different view screens.
-	`styles/main.css`: Provides a basic style reset and common styling rules to be applied throughout the project.
-	`.env.local`: Allows configuration of variables such as form version and promotion start date without hardcoding in your code.


### Troubleshooting
- If you encounter issues during deployment, check the logs on Vercel and ensure that all environment variables are set correctly.
- If you see Database connection failed errors, ensure that your PostgreSQL database credentials are correct and that your server is running.
- For any React hydration errors, make sure your server-side rendering and client-side rendering are consistent.