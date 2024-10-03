import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDetails = () => {
    const params = useParams();
    return (
        <section className="bg-[#f7f7f7]">

            <div className="w-[80%] mx-auto flex gap-1">


                <div className="w-1/2 h-[500px] flex          border-2 border-red-500">
                    <div className="flex flex-col justify-between">
                        <div className="w-[150px] h-[150px]">
                            <img src="/images/productPage/CWC_M2.png" alt="" className="" />
                        </div>
                        <div className="w-[150px] h-[150px]">
                            <img src="/images/productPage/CWC_M2.png" alt="" className="" />
                        </div>
                        <div className="w-[150px] h-[150px]">
                            <img src="/images/productPage/CWC_M3.png" alt="" className="" />
                        </div>
                    </div>
                    <div>
                        <div className="w-[500px] h-[500px]">

                            <img src="/images/productPage/CWC_M4.png" alt="" />
                        </div>
                    </div>
                </div>


                <div className="w-1/2 h-[500px] border-2 border-red-500">

                    <p className="font-bold text-3xl">
                        Welcome to product page {params.productId}
                    </p>
                </div>
            </div>

        </section>
    );
};

export default ProductDetails;
