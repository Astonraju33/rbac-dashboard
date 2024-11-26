
## **Features**

### **User Management**
- Add new users with name, role, and status.
- Edit user details directly through a modal dialog.
- Delete users with a single click.

### **Role Management**
- Create and manage roles.
- Assign roles to users.
- Simple UI for role-based configurations.

### **Dynamic Permissions (Future Scope)**
- Add customizable permissions to roles.

---

## **Technologies Used**
- **React.js**: For building the UI components.
- **Material-UI (MUI)**: For modern and responsive design.
- **localStorage**: For storing user and role data persistently in the browser.

---

## **Setup Instructions**

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd rbac-dashboard
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   npm start
   ```

4. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## **How to Use**

1. **User Management**:
   - Add a new user by filling out the form at the top of the page.
   - Edit existing users by clicking the edit icon in the user list.
   - Delete a user using the trash icon.

2. **Role Management**:
   - Add a new role using the form on the Role Management page.
   - Assign roles to users in the User Management page.

---

## **Project Structure**

```
rbac-dashboard/
├── src/
│   ├── components/
│   │   ├── Layout.js         # Main dashboard layout
│   │   ├── UserManagement.js # User management component
│   │   ├── RoleManagement.js # Role management component
│   ├── theme.js              # MUI custom theme
│   ├── App.js                # Main app component
│   ├── index.js              # Entry point
├── public/
├── package.json
├── README.md
```


