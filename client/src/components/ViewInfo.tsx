import { MutationREST } from "../intercecptors";

export const ViewInfo = () => {

  const { GetVentasquery, mutationDeleteVenta } = MutationREST();

  const estilos = {
    boxShadow: "1px 2px 5px 1px #b6aeae83",
    borderRadius: "10px",
    padding: "5px",
  };
  console.log(GetVentasquery.data)
  return (
    <div>
      {GetVentasquery.isLoading && <h2>Cargando...</h2>}
      {GetVentasquery.isError && <h2>Hubo un error</h2>}
      <h2>Lista de Ventas</h2>
      <div className="sales-container grid">
        {GetVentasquery.data?.map((e) => (
          <section className="sales-list" key={e.codigo_venta}>
            <div className="sale-card">
              <h2>Codigo Venta #{e.codigo_venta}</h2>
              <button onClick={() => mutationDeleteVenta.mutate(e.id)}>Eiminar venta</button>
              <p>
                <strong>Fecha:</strong> {e.fecha_venta}
              </p>
              <p>
                <strong>Total:</strong> $6556565
              </p>
              <h3>Productos</h3>
              <ul>
                {e.lista_prod.length > 0 ? (
                  e.lista_prod.map((e) => (
                    <ul key={e.codigo_producto}>
                      <li
                        style={{
                          display: "flex",
                          flexFlow: "row wrap",
                          maxWidth: "600px",
                          gap: "5px",
                          background: "#e8dfdf5e",
                          borderRadius: "10px",
                          padding: "5px",
                        }}
                      >
                        <p style={estilos}>
                          Producto: <b>{e.nombre}</b>
                        </p>
                        <p style={estilos}>
                          Marca: <b>{e.marca}</b>
                        </p>
                        <p style={estilos}>
                          Precio: <b>${e.costo}</b>
                        </p>
                        <p style={estilos}>
                          Stock: <b>{e.stock}</b>
                        </p>
                      </li>
                    </ul>
                  ))
                ) : (
                  <p>No hay productos</p>
                )}
              </ul>
              <h3>Cliente</h3>
              {e.unCliente ? (
                <ul>
                  <p>
                    Nombre: <b>{e.unCliente?.nombre}</b>{" "}
                  </p>
                  <p>
                    Apellido: <b>{e.unCliente?.apellido}</b>{" "}
                  </p>
                  <p>
                    Edad: <b>{e.unCliente?.edad}</b>{" "}
                  </p>
                  <p>
                    DNI: <b>{e.unCliente?.dni}</b>{" "}
                  </p>
                </ul>
              ) : (
                <p>No hay cliente asociado</p>
              )}
            </div>

            {!e.lista_prod && (
              <ul>
                <h3>Productos</h3>
                <p>No hay productos asociados.</p>
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};
