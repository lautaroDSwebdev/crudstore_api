import { Link } from "react-router-dom";

export const Nav = () => {
  let dataNav = [
    {
      id: 1,
      url: "/",
      view: "Home",
    },
    {
      id: 2,
      url: "/data",
      view: "Ventas ",
    },
    {
      id: 3,
      url: "/cliente",
      view: "Clientes",
    },
    {
      id: 4,
      url: "/prods",
      view: "Productos",
    },
  ];

 

  return (
    <div className="nav_styles" >
      {dataNav.map((e) => (
        <Link key={e.id} to={e.url}> {e.view}</Link>
      ))}
    </div>
  );
};
