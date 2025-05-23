// import { useState } from "react";
import { useState } from "react";
import "./style.css"
import { useMutationsProds, useMutationCategoria } from "../intercecptors";
import { SubmitHandler, useForm } from "react-hook-form";
import { PaginationProd } from "../types/type-productos";
import { color_ropa, defValuesProducts, marca_prod } from "../mock";
import { useQuery } from "@tanstack/react-query";
import { getProductos } from "../use-cases";
import { PaginationComponent } from "../reusable";
export const TableProductos = (
) => {

    const {
        mutationDeleteProd,
        mutationPostProductos,
        mutationPutProductos } = useMutationsProds();
    const { GetCategoria } = useMutationCategoria()
    const { data: dataCategoria } = GetCategoria



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
    const GetProds = useQuery({
        queryKey: ["data_producto", page, size],
        queryFn: () => getProductos({ page, size })

    });
    const { data: dataProds } = GetProds

    console.log(dataProds)
    const [modal, setmodal] = useState(false)

    const [dataeditprod, setdataeditprod] = useState(null)
    const stock_number = Array.from({ length: 41 }, (_, i) => ({
        id: i,
        value: i
    }));


    const talle_number = Array.from({ length: 70 }, (_, i) => ({
        id: i,
        value: i
    }));


    const { register, handleSubmit, reset } = useForm(defValuesProducts);

    const HandleEditVenta = (e) => {
        setdataeditprod(e)
        reset({
            ...e,
            categoria_prod: (e as PaginationProd).content.map(e => e.categoria?.id_categoria),
        })
    }

    const EditProd = (e: PaginationProd) => {
        setmodal(true)
        HandleEditVenta(e)
    }

    const onSubmit: SubmitHandler = (dataProd) => {
        if (dataProd.id_producto) {
            mutationPutProductos.mutate(dataProd)
            console.log("data editada")
            console.log(dataProd)
        } else {
            console.log({
                ...dataProd,
                categoria_prod: { id_categoria: dataProd?.categoria_prod.id_categoria },
            })
            mutationPostProductos.mutate({
                ...dataProd,
                categoria_prod: { id_categoria: dataProd?.categoria_prod.id_categoria },
            })
        }

        setmodal(false)
    }


    return (
        <>
            <button onClick={() => setmodal(!modal)} className="modal_button">abrir modal</button>
            {
                modal &&
                <div className="modal">
                    <div className="modal-content">
                        <h2>{dataeditprod ? "Editar producto" : "Crear producto"}</h2>
                        <svg onClick={() => setmodal(!modal)}
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "#f51919", cursor: "pointer" }} ><path d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z"></path><path d="m11 16 5-4-5-4v3.001H3v2h8z"></path></svg>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <select {...register("marca")} name="marca" id="marca">
                                {
                                    marca_prod.map(e => (
                                        <option key={e.marca} value={e.marca}>marca ropa: {e.marca}</option>
                                    ))
                                }
                            </select>
                            <input type="number" {...register("precio", { valueAsNumber: true })} placeholder="precio" />
                            <select {...register("numberoTalle")} name="numberoTalle" id="talle">
                                {
                                    talle_number.map(e => (
                                        <option key={e.id} value={e.value}>talle de ropa: {e.value}</option>
                                    ))
                                }
                            </select>
                            <select {...register("stock")} name="stock" id="stock">
                                {
                                    stock_number.map(e => (
                                        <option key={e.id} value={e.value}>stock de ropa: {e.value}</option>
                                    ))
                                }
                            </select>
                            <select {...register("color")} name="color" id="color">
                                {
                                    color_ropa.map(e => (
                                        <option key={e.id} value={e.color}>color ropa: {e.color}</option>
                                    ))
                                }
                            </select>
                            <select {...register("categoria_prod.id_categoria", { valueAsNumber: true })}  >

                                {
                                    dataCategoria === undefined &&
                                    <option >Sin categorias, crea una</option>
                                }
                                {
                                    dataCategoria === null &&
                                    <option >Sin categorias, crea una</option>
                                }
                                {
                                    dataCategoria && dataCategoria.map(e => (
                                        <option key={e.id_categoria} value={e.id_categoria}>categoria: {e.nombre}</option>
                                    ))
                                }
                            </select>

                            <button type="submit">{dataeditprod ? "editar producto" : "crear producto"}</button>
                        </form>
                    </div>
                </div>
            }
            <div className="section_tables">
                <table>
                    <thead>
                        <tr>
                            <th>marca</th>
                            <th>costo</th>
                            <th>stock</th>
                            <th>Categoria </th>
                            <th>opciones</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            dataProds?.content.map(e => (
                                <tr key={e.id_producto}>
                                    <td>{e.marca}</td>
                                    <td>{e.precio}</td>
                                    <td>{e.stock}</td>
                                    <td>{e.categoria ? e.categoria?.nombreCategoria : "crear-relacionar categoria"}</td>
                                    <td>
                                        <button onClick={() => EditProd(e)}>Editar</button>
                                        <button onClick={() => mutationDeleteProd.mutate(e.id_producto)}>eliminar</button>
                                    </td>
                                </tr>
                            ))
                        }
                        {
                            dataProds?.content.length === 0 || dataProds?.content === undefined &&
                            <tr className="tr_error-data" >
                                <td>sin datos</td>
                                <td>sin datos</td>
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
        </>
    );
};
