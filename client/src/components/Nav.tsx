import { Link } from "react-router-dom";

export const Nav = () => {
  let dataNav = [
   
    {
      id: 0,
      url: "/venta",
      view: "Ventas ",
    },
    {
      id: 1,
      url: "/cliente",
      view: "Clientes",
    },
    {
      id: 2,
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
