
import { Divider } from "antd";
import { fontlg, pylg } from "../utils/constant";

export const CustomDivider = ({ title }) => {
    return (
        <div>
            <Divider
                className={`${pylg}`}
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
