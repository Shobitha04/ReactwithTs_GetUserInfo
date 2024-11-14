import axios from "axios";
import { useState, FC, useEffect } from "react";
import { UserListProps } from "../UserList.types"; 
import '../styles.css';
import { FaEnvelope } from 'react-icons/fa';


const UsersListComponent: FC = () => {
  const [user, setUser] = useState<UserListProps | null>(null);  // Single user state
  const [loading, setLoading] = useState<boolean>(false);

  // Function to fetch a single user
  const fetchUser = async () => {
    setLoading(true); // Start loading state
    try {
      const response = await axios.get("https://randomuser.me/api/");  // Only fetch one user

      // Check if the response and response.data.results are valid
      if (response && response.data && Array.isArray(response.data.results)) {
        setUser(response.data.results[0]); // Update the state with the first user from the response
      } else {
        console.error("Invalid user data format", response);
        setUser(null);  // Fallback if the response is not valid
      }
    } catch (error) {
      console.error("Error fetching user", error);
      setUser(null);  // Fallback if there is an error
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  // Fetch initial user on component mount
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="user-list-container">
      <h2>Random User</h2>
      <button onClick={fetchUser} disabled={loading}>
        {loading ? "Loading..." : "Fetch New User"}
      </button>
      {loading ? (
        <div className="loading-indicator">Loading...</div>
      ) : (
        <div className="user-card">
          {user ? (
            <>
              <p>
                {user.name.title} {user.name.first} {user.name.last}
              </p>
              <div className="email-container">
                <FaEnvelope size={20} style={{ marginRight: '8px' }} />  {/* Email icon */}
                <span>{user.email}</span>
              </div>
              <p>Username: {user.login.username}</p>
            </>
          ) : (
            <p>No user data available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UsersListComponent;
