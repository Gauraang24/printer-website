import { certificateData } from "../staticData/Data"

const OurCertifications = () => {



    const certificates = [...certificateData, ...certificateData,]
    return (
        <div className="w-[80%] mx-auto">

            <div className="w-max mx-auto mt-[85px]">
                <p className=" text-[35px] font-bold border-b border-black">OUR CERTIFICATION</p>
            </div>
            <div className="flex gap-10 overflow-hidden group my-[62px]  py-2" >

                <div className="flex gap-10 animate-loop-scroll group-hover:paused">
                    {certificates.map((img) => {
                        return <div key={img.id} className="bg-white border-gray-100 border rounded-2xl w-[300px] h-[300px] flex justify-center items-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ">
                            <img src={img.link} alt={img.alt} />
                        </div>
                    })}
                </div>
                <div className="flex gap-10 animate-loop-scroll group-hover:paused" aria-hidden="true">
                    {certificates.map((img) => {
                        return <div key={img.id} className="bg-white border-gray-100 border rounded-2xl w-[300px] h-[300px] flex justify-center items-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                            <img src={img.link} alt={img.alt} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default OurCertifications
