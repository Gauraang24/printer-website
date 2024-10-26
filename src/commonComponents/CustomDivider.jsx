import React from 'react';
import { Divider } from "antd";

export const CustomDivider = ({ title }) => {
    return (
        <div>
            <Divider
                className="2xl:py-[55px] xl:py-[50px] md:py-[45px] sm:py-[40px] xs:py-[35px] py-[30px]"
                style={{
                    borderColor: "#000",
                }}
            >
                <p className="2xl:text-[35px] xl:text-[30px] md:text-[25px] sm:text-[20px] text-[18px] font-bold">
                    {title}
                </p>
            </Divider>
        </div>
    );
};
