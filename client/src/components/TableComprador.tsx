import { useState } from "react";
import { useMutationsComprador } from "../intercecptors";
import { } from "../types/type-pedido";
import { SubmitHandler, useForm } from "react-hook-form";
import { CompradorTypesPaged } from "../types";
import { PaginationComponent } from "../reusable";
import { useQuery } from "@tanstack/react-query";
import { getCompadorPaged } from "../use-cases";
export const TableComprador = () => {



  const {
    mutationDeleteCompador,
    mutationPostCompador,
    mutationPutCompador
  } = useMutationsComprador()


  const [page, setpage] = useState(0)
  const [size, setsizeDatapage] = useState(5)

  const ClickNextPage = () => {
      setpage(page + 1)
  }
  const ClickBackPage = () => {
      if (page > 0) {
          setpage(page - 1)
      }
      return null
  }
  const ClickMoreSizeDataPage = () => {
      setsizeDatapage(size + 1)
  }
  const ClickLessSizeDataPage = () => {
      if (size >= 2) {
          setsizeDatapage(size - 1)
      }
      return null
  }

  const GetCompradorquery = useQuery({
    queryKey: ["data_comprador",page, size],
    queryFn:()=> getCompadorPaged({page, size}),
});


  const { data } = GetCompradorquery
  const [modal, setmodal] = useState(false)
  const [dataeditcliente, setdataeditcliente] = useState(null)
  console.log(data)



  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      idComprador: null,
      nombreComprador: '',
      apellidoComprador: '',
      dniComprador: null,
      numTarjeta: null,
    }
  });

  const HandleEditCliente = (e) => {
    setdataeditcliente(e)
    reset(e)
    setmodal(true)
  }

 
  const onSubmit: SubmitHandler<CompradorTypesPaged> = (data) => {
    if (data.content.map(e => e.idComprador)) {
      mutationPutCompador.mutate(data)
      console.log("Put exitoso")
      console.log(data)
    } else {
      mutationPostCompador.mutate(data)
      console.log(data)
    }
    console.log(data)

    setmodal(false)
  }
  return (
    <>
      <button onClick={() => setmodal(!modal)} className="modal_button">abrir modal</button>
      <div className="">
        {
          modal &&
          <div className="modal">
            <div className="modal-content">
              <h2>{dataeditcliente ? "Editar comprador" : "Crear comprador"}</h2>
              <svg onClick={() => setmodal(!modal)}
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "#f51919", cursor: "pointer" }} ><path d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z"></path><path d="m11 16 5-4-5-4v3.001H3v2h8z"></path></svg>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* <input type="hidden" {...register("idComprador")} placeholder="nombre comprador" /> */}
                <input type="text" {...register("nombreComprador")} placeholder="nombre comprador" />
                <input type="text" {...register("apellidoComprador")} placeholder="apellido comprador" />
                <input type="number" {...register("dniComprador", { valueAsNumber: true })} placeholder="dni comprador" />
                <input type="number" {...register("numTarjeta", { valueAsNumber: true })} placeholder="numero de tarjeta" />
                <button type="submit">{dataeditcliente ? "editar comprador" : "crear comprador"}</button>
              </form>
            </div>
          </div>
        }
        <section className="section_tables">

          <table>
            <thead>
              <tr>
                <th>nombre</th>
                <th>apellido</th>
                <th>dni</th>
                <th>num tarjeta</th>
                <th>opciones</th>
              </tr>
            </thead>
            <tbody >
              {
                data?.content.map(e => (
                  <tr key={e.idComprador}>
                    <td> {e.nombreComprador}</td>
                    <td> {e.apellidoComprador}</td>
                    <td> {e.dniComprador}</td>
                    <td> {e.numTarjeta}</td>
                    <td>
                      <button onClick={() => HandleEditCliente(e)}>editar</button>
                      <button onClick={() => mutationDeleteCompador.mutate(e.idComprador)}>eliminar</button>
                    </td>
                  </tr>
                ))
              }
              {
                data?.content.length === 0 &&
                <tr className="tr_error-data">
                  <td>sin datos</td>
                  <td>sin datos</td>
                  <td>sin datos</td>
                </tr>
              }
              {
                data?.content === undefined &&
                <tr className="tr_error-data">
                  <td>sin datos</td>
                  <td>sin datos</td>
                  <td>sin datos</td>
                </tr>
              }

            </tbody>

          </table>

        <PaginationComponent
          ClickBackPage={ClickBackPage}
          ClickNextPage={ClickNextPage}
          ClickMoreSizeDataPage={ClickMoreSizeDataPage}
          ClickLessSizeDataPage={ClickLessSizeDataPage}
          page={page}
          size={size}
        />
        </section>
      </div>
    </>
  );
};
