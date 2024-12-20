# Role_Base_Auth
Role-Based Authentication System 🌐🔐 This application is designed to manage access control based on user roles. It includes three types of users: Admin, Sub-admin, and User. Each role has unique permissions and capabilities. 🚀'

# Roles and Capabilities:
✅ 1. Admin 🧑‍💼:
* View & Manage All Users: The admin has full control over the users and sub-admins.
* Create Accounts: Admin can create login IDs for Sub-admins and Users.
* Delete Accounts: Admin can delete the accounts of Sub-admins and Users.
* Access All Data: View and manage all user and sub-admin data.
  
✅ 2. Sub-admin 👨‍💼:
* Create User Accounts: Sub-admin can create login IDs for Users.
* View User Data: Sub-admin can view Users they have created and their data.
* Delete User Accounts: Sub-admin can delete the user accounts they created.
* Limited Access: Cannot manage other sub-admins or admin accounts.
  
✅ 3. User 👤:
* View Personal Info: Users can view specific details like their account created by info.
* Home Page Access: Access to the home page with basic information.
* No Management Permissions: Users cannot manage other accounts or see sensitive data.

# Technology Stack 💻🔧:
✅ Frontend: Angular 15 🌟

✅ Components, routing, and services for building the user interface.
Role-based navigation and forms for creating and managing accounts.
Bootstrap for responsive design and modern UI components. 🖥️
✅ Backend: JSON Server 🗃️

# A simple mock backend for managing users, sub-admins, and admin accounts.
Stores user data and roles in a JSON file. 📄
No complex database needed—ideal for mockups and prototypes.

# Security: 🔐
* Basic authentication mechanisms for managing roles.
* Can later integrate JWT (JSON Web Tokens) or simple token-based authentication for session management.

✅ Getting Started 🚀
* Clone the repo from GitHub to your local machine.
* Install Dependencies:
* Run npm install to install all required packages.

✅ Run the App:
* Use ng serve to run the Angular app.
* Start JSON Server with json-server --watch db.json to simulate the backend.

✅Future Enhancements 🌱
* JWT Authentication: Secure your app with JSON Web Tokens.
* Role-Based Guards: Implement advanced route guards for better access control.
