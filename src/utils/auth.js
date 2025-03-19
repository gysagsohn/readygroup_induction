const PASSWORD = "12345678"; 

// Check if the user is authenticated
export const isAuthenticated = () => {
  return localStorage.getItem("authenticated") === "true";
};

// Authenticate the user
export const authenticateUser = (password) => {
  if (password === PASSWORD) {
    localStorage.setItem("authenticated", "true");
    return true;
  }
  return false;
};

// Logout function
export const logoutUser = () => {
  localStorage.removeItem("authenticated");
};
