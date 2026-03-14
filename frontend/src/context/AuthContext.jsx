import { createContext, useState, useEffect } from "react";
import api from "../api/axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {

  const token = localStorage.getItem("access");

  if (!token) {
    setLoading(false);
    return;
  }

  api.get("account/profile/")
    .then(res => {
      setUser(res.data);
    })
    .catch(() => {
      setUser(null);
    })
    .finally(() => {
      setLoading(false);
    });

}, []);

return (

<AuthContext.Provider value={{ user, setUser, loading }}>

{children}

</AuthContext.Provider>

);

}