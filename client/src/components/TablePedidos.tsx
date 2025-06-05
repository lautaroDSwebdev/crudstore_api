import React, { useState } from "react";
import { useMutationPedidos, useMutationsComprador, useMutationsProds } from "../intercecptors";
import { CompradorTypesPaged, PaginationPedido, PaginationProd } from "../types/index";
// import Select from 'react-select'
// import { ServiceEntityMapper } from "../mappers/ProdMapper";
// import Multiselect from 'multiselect-react-dropdown';


import { SubmitHandler, useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { getPedido } from "../use-cases";
import { PaginationComponent } from "../reusable";
import axios from "axios";
import { api_general } from "../api";
import { ProductEntityMapper } from "../mappers/ProdMapper";
import Select from "react-select/base";
import { MultiSelect } from "@mantine/core";
export const TablePedidos = () => {

  const {
    mutationDeletePedidos,
    mutationPostPedidos,
    mutationPutPedidos
  } = useMutationPedidos();

  const { data: dataComprador } = useQuery({
    queryKey: ["data_comprador"],
    queryFn: async () => {
      const { data } = await axios.get<CompradorTypesPaged>(`${api_general}/comprador`);
      return data;
    },
  });

  const { data: dataProd } = useQuery({
    queryKey: ["data_prod"],
    queryFn: async () => {
      const { data } = await axios.get<PaginationProd>(`${api_general}/prod`);
      return data;
    },
  });


  // console.log(dataProd?.content)
  const prod_mapper_data = ProductEntityMapper.mapArray(dataProd?.content)
  // console.log(prod_mapper_data)

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

  const GetPedido = useQuery({
    queryKey: ["data_pedido", page, size],
    queryFn: () => getPedido({ page, size }),
  });

  const { data: dataPedido, isLoading } = GetPedido

  // console.log(dataPedido)

  const [modal, setmodal] = useState(false)
  const [dataeditPedido, setdataeditPedido] = useState(null)

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      fechaPedido: "",
      locacionTienda: "",
      listProds: null,
      compradorRelacion: "",
      seniaPagada: false
    }
  });

  const HandleEditPedido = (e) => {
    if (e) {
      setmodal(true)
      setdataeditPedido(e)
      reset({
        ...e,
        fechaPedido: (e as PaginationPedido).content.map(e => e.fechaPedido),
        compradorRelacion: (e as CompradorTypesPaged).content.map(e => e.idComprador),
        locacionTienda: (e as PaginationPedido).content.map(e => e.locacionTienda)
      })

    }
  }


  const onSubmit: SubmitHandler<PaginationPedido> = (data) => {

    const dataPostProd = data.content.map(e => e.listProds?.map((e) => ({
      ["content.id_producto"]: Number(e)
    })))

    const dataPostComprador = data.content.map(e => e.compradorRelacion
      ? { idComprador: Number(data.content.map(e => e.compradorRelacion)) }
      : null)

      const payload = {
        ...data,
        compradorRelacion: dataPostComprador,
        lisrProds: dataPostProd
      }
      console.log(payload)
    // if (data.content.map(e => e.idPedido)) {

    //   console.log("Put exitoso")
    //   console.log("Lo que retorna el edit")
    //   console.log({
    //     ...data
    //   })
    //   mutationPutPedidos.mutate({
    //     ...data,
    //     listProds: (data as Productos[]).map(e => e.id_producto),
    //     compradorRelacion: (data as Comprador).idComprador
    //   })
    // } else {
    //   mutationPostPedidos.mutate({
    //     ...data
    //     // listProds: (data as Productos[]).map(e => e.id_producto),
    //   })
    // }

    setmodal(false)
  }

  const [select, setselect] = useState(null)
  const paises = [
    { code: "AR", name: "República Argentina" },
    { code: "MX", name: "Estados Unidos Mexicanos" },
    { code: "CO", name: "República de Colombia" },
    { code: "PE", name: "República del Perú" },
    { code: "CL", name: "República de Chile" }
  ]

  return (
    <>
      <button onClick={() => setmodal(!modal)} className="modal_button">abrir modal</button>
      <div className="grid">
        {
          modal &&
          <div className="modal">
            <div className="modal-content">
              <h2>{dataeditPedido ? "Editar Pedido" : "Crear Pedido"}</h2>
              <svg onClick={() => setmodal(!modal)}
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "#f51919", cursor: "pointer" }} ><path d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z"></path><path d="m11 16 5-4-5-4v3.001H3v2h8z"></path></svg>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="fecha">fecha pedido</label>
                <input type="date" {...register("fechaPedido")} id="fecha" placeholder="fecha Pedido" />
                <div className="div_label">
                  <label htmlFor="seña">seña pagada</label>
                  <input className="checkbox" type="checkbox" id="seña" {...register("seniaPagada")} placeholder="seña pagada" />
                </div>
                <label htmlFor="pais">selecciona el pais</label>
                <select {...register("locacionTienda")} id="pais">
                  <option value="">seleccionar pais</option>
                  {
                    paises.map(e => (
                      <option key={e.name} value={e.name}>{e.name}</option>
                    ))
                  }
                </select>

                <label htmlFor="comprador_pedido">Comprador del pedido</label>
                <select {...register("compradorRelacion", { valueAsNumber: true })} name="compradorRelacion" id="">
                  {
                    dataComprador &&
                    dataComprador.content.map(e => (
                      <option key={e.idComprador} value={Number(e.idComprador)}>
                        {e.nombreComprador} {e.apellidoComprador}
                      </option>

                    ))
                  }
                  {
                    !dataComprador &&
                    <option value="">- haz un comprador-</option>
                  }
                </select>
                {/* ProductEntityMapper.mapArray(dataProd?.content) */}
                <select {...register("listProds", { valueAsNumber: true })} multiple id="">
                  {
                    dataProd?.content.map(e => (
                      <option key={e.id_producto} value={e.id_producto}>{e.marca}</option>
                    ))
                  }
                </select>
                <button type="submit">{dataeditPedido ? "editar Pedido" : "crear Pedido"}</button>
              </form>
            </div>
          </div>
        }
        <div className="section_tables">

          <table>
            <thead>
              <tr>
                <th>fecha del pedido</th>
                <th>seña Pagada</th>
                <th>comprador del pedido</th>
                <th>productos comprados</th>
                <th>opciones</th>
              </tr>
            </thead>
            <tbody >
              {
                dataPedido?.content.map(e => (
                  <tr key={e.idPedido}>
                    <td>{e.fechaPedido}</td>
                    <td>{e.seniaPagada ? "pagada" : "falta pagar"}</td>
                    <td>{e.listProds.length < 1 && "no hay productos"}</td>
                    <td>{!e.listProds ? "sin datos" : e.listProds.length}</td>
                    <td>
                      <button onClick={() => HandleEditPedido(e)}>editar</button>
                      <button onClick={() => mutationDeletePedidos.mutate(e.idPedido)}>eliminar</button>
                      <button>ver detalles</button>
                    </td>
                  </tr>
                ))
              }
              {
                isLoading &&
                <tr>
                  <td>cargando..</td>
                  <td>cargando..</td>
                  <td>cargando..</td>
                </tr>
              }
              {
                dataPedido?.content.length === 0 &&
                <tr className="tr_error-data">
                  <td>sin datos</td>
                  <td>sin datos</td>
                  <td>sin datos</td>
                </tr>
              }
              {
                dataPedido?.content === undefined &&
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
        </div>

      </div>
    </>
  );
};
