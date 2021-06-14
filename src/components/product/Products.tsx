import React from 'react'
import { useCart } from '../../infoContext/CartContext'
import { useProducts } from '../../infoContext/ProductContext'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ReactPaginate from 'react-paginate'

const Products = ({selectedCategory, setPageNumber, pageNumber}: {selectedCategory: string, setPageNumber: Function, pageNumber: number}) => {

    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart()


    

    const productsPerPage = 8;
    const pagesVisited = pageNumber * productsPerPage;

    let pageCount = 0


    const displayProducts = () =>{

        const _products = (selectedCategory==="Tout les produits") ? 
                            products : 
                            products?.filter(x => x.category === selectedCategory);

        pageCount = Math.ceil(_products?.length as number / productsPerPage)

        return _products?.slice(pagesVisited, pagesVisited + productsPerPage).map((product, index) => {
            return(
                <div className="product-div" key={product.id}>
                    <div className="imgContainer">
                        <img src={product.image}/>
                    </div>

                    <div className="infosContainer">
                        <div className="product-price">
                            {product.price} MAD
                        </div>

                        <div className="product-name">
                            {product.title}
                        </div>
                    </div> 

                    <div className="addContainer">
                        <button onClick={() => setCart({type:"add",addProduct:product})}>Ajouter au panier</button>
                    </div>
                    
                </div>
            )
        })
    }

    const changePage = ({selected}: {selected: number}) => setPageNumber(selected);

    return (
        <div className="products">
            <span className="title">
                Catégorie : <span className="applied-category">{selectedCategory}</span>
            </span>
            <div className="products-display">
                {
                    displayProducts()
                }
            </div>
            <ReactPaginate
                    previousLabel={<ArrowRightAltIcon className="left" />}
                    nextLabel={<ArrowRightAltIcon />}
                    pageCount={pageCount}
                    onPageChange = {changePage}
                    containerClassName={"paginationBtns"}
                    previousLinkClassName={"previousBtn"}
                    nextLinkClassName={"nextBtn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                    pageRangeDisplayed = {1}
                    marginPagesDisplayed = {2}
                />
        </div>
    )
}

export default Products
