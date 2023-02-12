import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"

export default function ProductDetails() {
    const {id}=useParams()
    const { products } = useSelector((state) => state.productSlice);
    const findItem=products.find((prod)=>prod.id==id)
    return (
        <>
                {/* <!-- Start Single Product Page --> */}
                <section class="single-product mt-5 pt-5">
        <div class="single-product__contents">
            <div class="container">
                <div class="single-product__content">
                    <div class="row justify-content-between">
                        <div class="col-lg-5 order-1 order-sm-2">
                            <div class="product__cover--phone d-lg-none mb-5 d-sm-block">
                                <div class="product__main-cover">
                                    <img class="zoomable" src={findItem.mainImg} alt=""/>
                                </div>
                            </div>
                            <div class="product__desc">
                                <div class="product__price d-flex justify-content-between align-items-strat mb-2">
                                    <h2 class="fs-1 fw-bold">{findItem.name}</h2>
                                    <h5 class="fs-3 fw-bold">{findItem.price}</h5>
                                </div>
                                <button class="product__add-to-cart primary-btn w-100 my-3">
                                    Add To Cart
                                </button>
                                <div class="product__info">
                                    <p><b>Type :</b> RPG, Souls Like</p>
                                    <p><b>Category :</b> {findItem.category}</p>
                                    <p><b>Tags :</b> Pc, Xbox, Playstation</p>
                                </div>
                                <div class="product__info product__para">
                                    <h2>Describtion</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate optio unde reprehenderit, nam ipsam aut voluptatum, ducimus dicta deleniti quibusdam molestias, quam eum? In architecto at neque aut? Nisi, soluta?</p>
                                </div>
                                <div class="product__descr">
                                    <h2 class="my-3">Requirements</h2>
                                    <div class="req">
                                        <h4>Elden Ring System Requirements (Minimum)</h4>

                                        <h6>OS: Windows 10</h6>
                                        <h6>Processor: Intel Core i5 8400 or AMD Ryzen 3 3300X</h6>
                                        <h6>Memory: 12GB RAM</h6>
                                        <h6>Graphics: Nvidia GeForce 1060 3GB or AMD Radeon RX 580 4GB</h6>
                                        <h6>DirectX: 12</h6>
                                        <h6>Storage: 60GB</h6>

                                        <h4 class="mt-5">Elden Ring System Requirements (Recommended)</h4>
                                        <h6>OS: Windows 10 or Windows 11</h6>
                                        <h6>Processor: Intel Core i7 8700K or AMD Ryzen 5 3600X</h6>
                                        <h6>Memory: 16GB RAM</h6>
                                        <h6>Graphics: Nvidia GeForce 1070 8GB or AMD Radeon RX Vega 56 8GB</h6>
                                        <h6>DirectX: 12</h6>
                                        <h6>Storage: 60GB</h6>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 order-2 order-sm-1">
                            <div class="product-lg-screen product-vis">
                                <div class="product__main-cover">
                                    <img class="zoomable" src="./Assets/Images/Single product/shop-img-4-768x768.png" alt=""/>
                                </div>
                                <div class="product__covers d-flex mt-3">
                                    <div class="product__image__cover">
                                        <img class="zoomable" src="./Assets/Images/Single product/shop-backface.png" alt=""/>
                                    </div>
                                    <div class="product__image__cover">
                                        <img class="zoomable" src="./Assets/Images/Single product/xbox-cd.png" alt=""/>
                                    </div>
                                    <div class="product__image__cover">
                                        <img class="zoomable" src="./Assets/Images/Single product/premuim.png" alt=""/>
                                    </div>
                                    <div class="product__image__cover">
                                        <img class="zoomable" src="./Assets/Images/Single product/delux-edition.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Start Video Section --> */}
                            {/* <!-- End Video Section --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Single Product Page --> */}
        </>
    )
}