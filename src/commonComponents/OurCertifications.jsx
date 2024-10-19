import { certificateData } from "../staticData/Data"

const OurCertifications = () => {



    const certificates = [...certificateData, ...certificateData,]
    return (
        <div className="w-[80%] mx-auto">

            <div className="w-max mx-auto 2xl:mt-[85px] xl:mt-[60px] lg:mt-[30px] sm:mt-[25px] 2xs:mt-[20px]">
                <p className="xl:text-[35px] lg:text-[25px] md:text-[20px] font-bold border-b border-black">OUR CERTIFICATION</p>
            </div>
            <div className="flex gap-10 overflow-hidden group 2xl:my-16 xl:my-14 lg:my-12 md:my-10 sm:my-8 2xs:my-6  py-2" >

                <div className="flex gap-10 animate-loop-scroll group-hover:paused">
                    {certificates.map((img) => {
                        return <div key={img.id} className="bg-white border-gray-100 border rounded-2xl xl:w-[300px] xl:h-[300px] lg:w-[250px] lg:h-[250px] md:h-[200px] md:w-[200px] sm:w-[160px] sm:h-[160px] 2xs:w-[120px] 2xs:h-[120px] flex justify-center items-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-5">
                            <img src={img.link} alt={img.alt} />
                        </div>
                    })}
                </div>
                <div className="flex gap-10 animate-loop-scroll group-hover:paused" aria-hidden="true">
                    {certificates.map((img) => {
                        return <div key={img.id} className="bg-white border-gray-100 border rounded-2xl xl:w-[300px] xl:h-[300px] lg:w-[250px] lg:h-[250px] md:h-[200px] md:w-[200px] sm:w-[160px] sm:h-[160px] 2xs:w-[120px] 2xs:h-[120px] flex justify-center items-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-5">
                            <img src={img.link} alt={img.alt} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default OurCertifications
