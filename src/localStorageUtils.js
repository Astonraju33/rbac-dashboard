const LOCAL_STORAGE_KEYS = {
    USERS: "rbac_users",
    ROLES: "rbac_roles",
  };
  
  // Initialize with default data if not present
  export const initializeData = () => {
    if (!localStorage.getItem(LOCAL_STORAGE_KEYS.USERS)) {
      const defaultUsers = [
        { id: 1, name: "John Doe", role: "Admin", status: "Active" },
        { id: 2, name: "Jane Smith", role: "User", status: "Inactive" },
      ];
      localStorage.setItem(LOCAL_STORAGE_KEYS.USERS, JSON.stringify(defaultUsers));
    }
  
    if (!localStorage.getItem(LOCAL_STORAGE_KEYS.ROLES)) {
      const defaultRoles = [
        { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
        { id: 2, name: "User", permissions: ["Read"] },
      ];
      localStorage.setItem(LOCAL_STORAGE_KEYS.ROLES, JSON.stringify(defaultRoles));
    }
  };
  
  export const getLocalStorageData = (key) => {
    return JSON.parse(localStorage.getItem(key)) || [];
  };
  
  export const setLocalStorageData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  