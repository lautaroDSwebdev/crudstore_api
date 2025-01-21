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
      view: "Tienda y  clientes",
    },
  ];

  const estilos = {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "300px",
    margin: "auto",
    padding: "5px" 
  };

  return (
    <div style={estilos}>
      {dataNav.map((e) => (
        <Link key={e.id} to={e.url}> {e.view}</Link>
      ))}
    </div>
  );
};
