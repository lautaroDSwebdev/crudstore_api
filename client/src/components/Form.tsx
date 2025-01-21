import { MutationREST } from "../intercecptors";
// import { Api_tienda, ListaProd } from "../types/types";
// import { FormClient } from "./fromClient";
import "./style.css";
export const Form = () => {

  const { mutationPostVentas } = MutationREST();

  async function EnvioFormulario(e: any) {

    e.preventDefault();


    const formDataVenta = new window.FormData(e.target);
    // Esto es lo que ingresa desde el formulario de los datos de la venta
    // Esto es lo que ingresa desde el formulario de los datos del producto
    const lista_prod = [
      {
        codigo_producto: formDataVenta.get("prod_codigo"),
        nombre: formDataVenta.get("nombre_prod"),
        marca: formDataVenta.get("marca"),
        costo: formDataVenta.get("costo_prod"),
        stock: parseInt(formDataVenta.get("stock") as string, 10),
      }
    ]
   
    const DataApi = {
      codigo_venta: formDataVenta.get("codigo_venta"),
      fecha_venta: formDataVenta.get("fecha_venta"),
      total: formDataVenta.get("total"),
      lista_prod: [
        ...lista_prod,
      ],
      unCliente: {
        id_cliente: formDataVenta.get("id_cliente"),
        nombre: formDataVenta.get("nombre"),
        apellido: formDataVenta.get("apellido"),
        edad: formDataVenta.get("edad"),
        dni: formDataVenta.get("dni"),
      }
    }
    console.log("Esto es lo que devuelve el formulario")
    console.log(DataApi);

    try {
      // acá llamo a la funcion con reactQuery para obtener lo ingresado
      const createVenta = await mutationPostVentas.mutate(...DataApi);
      console.log(createVenta);
      // Actualizar la lista de productos de la venta
      // y se unifica con lo ingresado en la data de productos
      // const productosConVenta = lista_prod.map((producto) => ({
      //   ...producto,
      //   codigo_venta: createVenta.codigo_venta, // Usamos el ID de la venta registrada
      // }));

      // await mutationPostProd.mutate(productosConVenta);
      // console.log(productosConVenta);
      // Enviar la venta actualizada
      // acá le volvemos a enviar lo mismo pero actualizado
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h2 className="">Formulario de Venta</h2>
      <div className="form-container">
        <div className="div_form">
          <i>Datos del Venta</i>
          {/* Venta */}
          <form onSubmit={EnvioFormulario}>
            <section>
              <i>Venta</i>
              <div className="form-group">
                <label htmlFor="codigo_venta">Código de Venta</label>
                <input type="text" id="codigo_venta" name="codigo_venta" required />
              </div>
              <div className="form-group">
                <label htmlFor="fecha_venta">Fecha de Venta</label>
                <input type="date" id="fecha_venta" name="fecha_venta" required />
              </div>
              <div className="form-group">
                <label htmlFor="total">Total</label>
                <input type="text" step="0.01" id="total" name="total" required />
              </div>
            </section>


            {/* Sección para Datos del Producto */}
            <section>
              <i>Datos del Producto</i>
              <div className="form-group">
                <label htmlFor="prod_codigo">Código Producto</label>
                <input type="text" id="prod_codigo" name="prod_codigo" />
              </div>
              <div className="form-group">
                <label htmlFor="nombre_prod">Nombre Producto</label>
                <input type="text" id="nombre_prod" name="nombre_prod" />
              </div>
              <div className="form-group">
                <label htmlFor="marca">Nombre Marca</label>
                <input type="text" id="marca" name="marca" />
              </div>
              <div className="form-group">
                <label htmlFor="costo_prod">Costo Producto</label>
                <input type="text" id="costo_prod" name="costo_prod" />
              </div>
              <div className="form-group">
                <label htmlFor="stock">Cifra Stock</label>
                <input type="text" id="stock" name="stock" />
              </div>

            </section>
            <section>
              {/* cliente */}
              <i>Cliente</i>
              <div className="form-group">
                <label htmlFor="id_cliente">Id cliente</label>
                <input type="text" id="id_cliente" name="id_cliente" />
              </div>
              <div className="form-group">
                <label htmlFor="nombre">nombre</label>
                <input type="text" id="nombre" name="nombre" />
              </div>
              <div className="form-group">
                <label htmlFor="apellido">apellido</label>
                <input type="text" id="apellido" name="apellido" />
              </div>
              <div className="form-group">
                <label htmlFor="edad">edad</label>
                <input type="text" id="edad" name="edad" />
              </div>
              <div className="form-group">
                <label htmlFor="dni">dni</label>
                <input type="text" id="dni" name="dni" />
              </div>

            </section>
            <button type='submit'>Enviar cliente</button>
          </form>
        </div>

      </div>
    </>
  );
};
