import styled from "styled-components";
import { TdCategory, TdCategoryInfo, Tr } from "../booking_seat/LocaltionInfo";

const SumTable = styled.table`
    .td {
        height: 40px;
    }
    .large {
        color: #d32521;
        font-weight: 600;
    }
`;

export default () => {
    return (
        <SumTable>
            <tbody>
                <Tr>
                    <TdCategory style={{ width: "50%" }}>Giá trị đơn hàng:</TdCategory>
                    <TdCategoryInfo>120.000 VNĐ</TdCategoryInfo>
                </Tr>
                <Tr>
                    <TdCategory style={{ width: "40%" }}>Khuyến Mãi:</TdCategory>
                    <TdCategoryInfo>0 VNĐ</TdCategoryInfo>
                </Tr>
                <Tr>
                    <TdCategory style={{ width: "40%" }} className="large">
                        TỔNG GIÁ TRỊ THANH TOÁN:
                    </TdCategory>
                    <TdCategoryInfo className="large">120.000 VNĐ</TdCategoryInfo>
                </Tr>
            </tbody>
        </SumTable>
    );
};
