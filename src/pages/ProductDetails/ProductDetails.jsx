
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const params = useParams()
    return (
        <section className='bg-[#f7f7f7]'>
            <div className='h-screen flex justify-center items-center'>

                <p className='font-bold text-3xl'>

                    Welcome to product page {params.productId}
                </p>
            </div>
        </section>
    )
}

export default ProductDetails
