import { Link } from "react-router-dom";

export const NavBar = () => {
  const dataNav = [
   
    {
      id: 0,
      url: "/categoria",
      view: "categoria",
    },
    {
      id: 1,
      url: "/comprador",
      view: "comprador",
    },
    {
      id: 2,
      url: "/pedido",
      view: "pedido",
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