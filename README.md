Project Title: Qencode Authentication System

Overview:

The Qencode Authentication System is a React-based web application designed to handle user authentication processes, including login, password reset, and account creation functionalities. This documentation provides an overview of the application, detailed setup instructions, and a guide to its core features.

Features:

-User Login: Secure login functionality with email validation and password requirements.

-Password Reset: Allows users to reset their password if forgotten, through a step-by-step email verification process.

Prerequisites:

Before you begin, ensure you have the following installed on your system:

-Node.js (version 12.x or higher recommended)
-npm (comes with Node.js)

Installation:

To set up the project locally, follow these steps:

1. Clone the repository to your local machine:

git clone https://your-repository-url.git
cd your-project-directory

2. Install the required dependencies:

npm install

3. Start the development server:

npm start

4. Open http://localhost:3000 to view the application in your browser.

Usage:

The application consists of three main routes:

1. Login ("/"): The default route where users can log in to their existing account using their email and password.
    https://main--qencodeauth.netlify.app/

2. Forgot Password ("/forgotpassword"): Users can navigate to this page if they need to reset their password. A valid email address is required to receive the password reset instructions.
    https://main--qencodeauth.netlify.app/#/forgotpassword

3. Reset Password ("/resetpassword"): Accessible through a link sent to the user's email as part of the password reset instructions. Due to security reasons, this step must be accessed directly via the link provided in the email and cannot be navigated to from within the application by button. For demonstration only pls proceed: 
    https://main--qencodeauth.netlify.app/#/resetpassword

Navigational Flow:

-From the Login page, users can click on the "Forgot your password?" link to navigate to the Forgot Password page.
-After submitting their email for a password reset, users will receive an email with a link to the Reset Password page where they can set a new password.