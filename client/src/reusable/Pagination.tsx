
import "./pagination.css"
interface Pages {
    ClickBackPage: () => void
    ClickNextPage: () => void
    ClickLessSizeDataPage?: () => void
    ClickMoreSizeDataPage?: () => void
    page: number
    size: number
}


export const PaginationComponent = ({ page, size, ClickBackPage, ClickNextPage, ClickLessSizeDataPage, ClickMoreSizeDataPage }: Pages) => {


    return (
        <section className="pagination">
            {
                page === 0 ?
                    <button disabled>Retroceder Pagina</button>
                    :
                    <button onClick={ClickBackPage}>Retroceder Pagina</button>
            }
            <p>Pagina actual ({page})</p>
            <button onClick={ClickNextPage}>Siguiente Pagina</button>
            {
                size === 1 ?
                    <button disabled>Menos data</button>
                    :
                    <button onClick={ClickLessSizeDataPage}>Menos data</button>
            }
            <p>Cantidad productos: ({size})</p>
            <button onClick={ClickMoreSizeDataPage}>Mas data</button>
        </section>
    )
}
