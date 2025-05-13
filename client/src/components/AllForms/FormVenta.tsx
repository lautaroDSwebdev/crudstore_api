// import { ArrayTienda } from '../../types/TypesTiendaBackend';
// import { SubmitHandler } from 'react-hook-form';
// import { useMutationsVentas } from '../../intercecptors';
// import { useContext } from 'react';
// import { ContextProvider } from '../../context/ContextProvider';

// // const { } = useContext(ContextProvider)

// export const FormVenta = ({ register, handleSubmit }) => {

//     const { mutationPostVentas, mutationPutVentas } = useMutationsVentas();

//     const onSubmit: SubmitHandler<ArrayTienda> = (dataVenta) => {
//         if (dataVenta.codigo_venta) {
//             mutationPutVentas.mutate(dataVenta)
//             console.log(dataVenta.codigo_venta)
//             console.log("data editada")
//         } else {
//             mutationPostVentas.mutate(dataVenta)
//             console.log("data creada")
//             console.log(dataVenta)

//         }
//     }
    

//     return (
//         <div>
//             <h2 className="">Formulario de Ve</h2>
//             <div className="form-container">
//                 <div className="div_form">
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <section>
//                             <h2>Venta</h2>
//                             <div className="form-group">
//                                 <input type="date"  {...register("fecha_venta")} />
//                             </div>
//                             <div className="form-group">
//                                 <input type="text" placeholder="total precio" {...register("total")} />
//                             </div>
//                         </section>
//                         <section>
//                             <input type='submit'></input>
//                         </section>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }
