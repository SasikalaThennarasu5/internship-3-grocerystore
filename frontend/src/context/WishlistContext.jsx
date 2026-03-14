import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/axios";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {

  const token = localStorage.getItem("access");

  if (!token) return; // do not call API if user not logged in

  api.get("wishlist/")
    .then(res => {

      if (Array.isArray(res.data)) {
        setWishlist(res.data);
      } 
      else if (Array.isArray(res.data.results)) {
        setWishlist(res.data.results);
      } 
      else {
        setWishlist([]);
      }

    })
    .catch(err => console.log(err));

}, []);

  const toggleWishlist = async (product) => {

  try {

    const exists = wishlist.find(
      item => item.product === product.id
    );

    if (exists) {

      await api.delete(`/wishlist/remove/${product.id}/`);

      setWishlist(
        wishlist.filter(item => item.product !== product.id)
      );

    } else {

      await api.post("/wishlist/add/", {
  product: product.id
});

      setWishlist([
        ...wishlist,
        { product: product.id }
      ]);

    }

  } catch (error) {

    console.log("Wishlist Error:", error.response?.data || error);

  }

};

  return (

    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount: wishlist.length,
        toggleWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>

  );

};

export const useWishlist = () => useContext(WishlistContext);