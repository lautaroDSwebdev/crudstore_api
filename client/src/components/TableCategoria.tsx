import { useState } from "react";
import { useMutationCategoria } from "../intercecptors";
import { SubmitHandler, useForm } from "react-hook-form";
import { CategoriaTypes } from "../types/types-categoria";

export const Tablecategoria = () => {

  const {
    GetCategoria,
    mutationPostCategoria,
    mutationDeletecategoria,
    mutationPutcategoria
  } = useMutationCategoria();

  const { data } = GetCategoria

  const [modal, setmodal] = useState(false)
  const [dataeditcategoria, setdataeditcategoria] = useState(null)
  console.log(dataeditcategoria)
  console.log(data)
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      nombreCategoria: '',
      descripcionCategoria: '',
    }
  });

  const HandleEditcategoria = (e) => {
    setdataeditcategoria(e)
    reset(e)
  }

  const Editcategoria = (e: CategoriaTypes) => {
    setmodal(true)
    HandleEditcategoria(e)
  }

  const onSubmit: SubmitHandler<CategoriaTypes> = (dataCategoria) => {
    if (dataCategoria.id_categoria) {

      mutationPutcategoria.mutate({ ...dataCategoria })
      console.log("Put exitoso")
      console.log(dataCategoria)
    } else {

      mutationPostCategoria.mutate({ ...dataCategoria })
    }
    console.log(dataCategoria)

    setmodal(false)
  }
  return (
    <>
      <button onClick={() => setmodal(!modal)} className="modal_button">abrir modal</button>
      <div className="grid">
        {
          modal &&
          <div className="modal">
            <div className="modal-content">
              <h2>{dataeditcategoria ? "Editar categoria" : "Crear categoria"}</h2>
              <svg onClick={() => setmodal(!modal)}
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "#f51919", cursor: "pointer" }} ><path d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z"></path><path d="m11 16 5-4-5-4v3.001H3v2h8z"></path></svg>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("nombreCategoria")} placeholder="nombre categoria" />
                <input type="text" {...register("descripcionCategoria")} placeholder="descripcion" />
                <button type="submit">{dataeditcategoria ? "editar categoria" : "crear categoria"}</button>
              </form>
            </div>
          </div>
        }

        <section className="section_tables">

          <table>
            <thead>
              <tr>
                <th>nombre categoria</th>
                <th>descripcion categoria</th>
                <th>opciones</th>
              </tr>
            </thead>
            <tbody >
              {
                data?.map(e => (
                  <tr key={e.id_categoria}>
                    <td>{e.nombreCategoria}</td>
                    <td>{e.descripcionCategoria}</td>
                    <td>
                      <button onClick={() => Editcategoria(e)}>editar</button>
                      <button onClick={() => mutationDeletecategoria.mutate(e.id_categoria)}>eliminar</button>
                    </td>
                  </tr>
                ))
              }
              {
                data?.length === 0 &&
                <tr className="tr_error-data">
                  <td>sin datos</td>
                  <td>sin datos</td>
                  <td>sin datos</td>
                </tr>
              }
              {
                data === undefined &&
                <tr className="tr_error-data">
                  <td>sin datos</td>
                  <td>sin datos</td>
                  <td>sin datos</td>
                </tr>
              }

            </tbody>

          </table>

        </section>

      </div>
    </>
  );
};
