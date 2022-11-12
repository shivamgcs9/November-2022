import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
          repellat?
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i class="sidebarIcon fa-brands fa-square-facebook"></i>
          <i class="sidebarIcon fa-brands fa-square-instagram"></i>
          <i class="sidebarIcon fa-brands fa-square-twitter"></i>
          <i class="sidebarIcon fa-brands fa-square-pinterest"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
