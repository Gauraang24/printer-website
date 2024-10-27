import { certificateData } from "../staticData/Data"
import { mtlg, mylg } from "../utils/constant"
import HeadingFont from "./Texts/HeadingFont"

const OurCertifications = () => {



    const certificates = [...certificateData, ...certificateData,]
    return (
        <div className="w-[80%] mx-auto">

            <div className={`w-max mx-auto ${mtlg}`}>
                <HeadingFont text={'OUR CERTIFICATION'} className={'border-b border-black font-bold'} />
            </div>
            <div className={`flex gap-10 overflow-hidden group ${mylg}`} >

                <div className="flex gap-10 animate-loop-scroll pb-2 group-hover:paused">
                    {certificates.map((img) => {
                        return <div key={img.id} className="bg-white border-gray-100 border rounded-2xl xl:w-[300px] xl:h-[300px] lg:w-[250px] lg:h-[250px] md:h-[200px] md:w-[200px] sm:w-[160px] sm:h-[160px] 2xs:w-[120px] 2xs:h-[120px] flex justify-center items-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-5">
                            <img src={img.link} alt={img.alt} />
                        </div>
                    })}
                </div>
                <div className="flex gap-10 animate-loop-scroll pb-2 group-hover:paused" aria-hidden="true">
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
