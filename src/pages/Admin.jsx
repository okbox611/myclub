import { useAuth } from "../contexts/AuthContext";

export default function Admin() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Admin Panel</h1>
      <p>Welcome {user?.username}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}