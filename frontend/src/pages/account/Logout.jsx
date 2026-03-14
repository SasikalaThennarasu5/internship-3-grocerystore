import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {

  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  useEffect(() => {

    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    
    setUser(null);
    navigate("/login");

  }, [navigate]);

  return <p>Logging out...</p>;
}

export default Logout;