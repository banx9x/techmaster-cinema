import styled from "styled-components";

const LocaltionInfo = styled.div`
    box-sizing: border-box;
    padding: 0 0 0 20px;
    margin-bottom: auto;
    margin-top: auto;
    max-width: 25%;
`;
const Table = styled.table`
    width: 100%;
    height: 100%;
`;
const Tr = styled.tr`
    box-sizing: border-box;
    margin-bottom: 10px;
    padding-bottom: 10px;
    /* display: flex; */
    justify-content: flex-start;
    align-items: flex-start;
`;
const Tbody = styled.tbody`
    vertical-align: top;
`;
const TdCategory = styled.td`
    font-family: SourceSansPro;
    font-size: 20px;
    font-weight: 400;
    text-align: left;
    color: #5e5b5b;
    box-sizing: border-box;
    margin-bottom: 10px;
`;
const TdCategoryInfo = styled.td`
    font-family: SourceSansPro;
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    box-sizing: border-box;
    padding: 0 0 0px 20px;
    margin-bottom: 10px;
`;
export { Table, Tr, Tbody, TdCategory, TdCategoryInfo };
export default () => {
    return (
        <LocaltionInfo>
            <Table>
                <Tbody>
                    <Tr>
                        <TdCategory>Rạp:</TdCategory>
                        <TdCategoryInfo>Vinema Thanh Xuân</TdCategoryInfo>
                    </Tr>
                    <Tr>
                        <TdCategory>Suất chiếu:</TdCategory>
                        <TdCategoryInfo>
                            19:00 - 21:08 <br /> 16/10/2021
                        </TdCategoryInfo>
                    </Tr>
                    <Tr>
                        <TdCategory>Phòng chiếu:</TdCategory>
                        <TdCategoryInfo>Phòng 2</TdCategoryInfo>
                    </Tr>
                    <Tr>
                        <TdCategory>Vé:</TdCategory>
                        <TdCategoryInfo>F8, F12, F9</TdCategoryInfo>
                    </Tr>
                </Tbody>
            </Table>
        </LocaltionInfo>
    );
};
