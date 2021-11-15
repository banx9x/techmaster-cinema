import styled from "styled-components";
import { Table, Tr, Tbody, TdCategory, TdCategoryInfo } from "./LocaltionInfo";

const PriceInfo = styled.div`
    box-sizing: border-box;
    padding: 0 0 0 20px;
    width: 25%;
    margin-bottom: auto;
`;
const TotalSpan = styled.span`
    font-size: 24px;
    color: #d32521;
`;

export default () => {
    return (
        <PriceInfo>
            <Table>
                <Tbody>
                    <Tr>
                        <TdCategory>Giá vé:</TdCategory>
                        <TdCategoryInfo>120.000 VND</TdCategoryInfo>
                    </Tr>
                    <Tr>
                        <TdCategory>Combo</TdCategory>
                        <TdCategoryInfo>0</TdCategoryInfo>
                    </Tr>
                    <Tr>
                        <TdCategory>Tổng</TdCategory>
                        <TdCategoryInfo>
                            <TotalSpan>120.000 VND</TotalSpan>
                        </TdCategoryInfo>
                    </Tr>
                </Tbody>
            </Table>
        </PriceInfo>
    );
};
