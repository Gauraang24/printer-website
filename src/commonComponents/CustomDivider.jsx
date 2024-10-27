
import { Divider } from "antd";
import { fontlg, pylg } from "../utils/constant";

export const CustomDivider = ({ title }) => {
    return (
        <div>
            <Divider
                className={`${pylg} !my-0`}
                style={{
                    borderColor: "#000",
                }}
            >
                <p className={`${fontlg} font-bold`}>
                    {title}
                </p>
            </Divider>
        </div>
    );
};
