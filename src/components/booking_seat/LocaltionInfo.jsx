import styled from "styled-components";

const LocaltionInfo = styled.div`
    height: 100%;
    box-sizing: border-box;
    padding: 0 0 0 20px;
    width: 25%;
`;
const Table = styled.table``;
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
const ThCategory = styled.th`
    font-family: SourceSansPro;
    font-size: 20px;
    font-weight: 400;
    text-align: left;
    color: #5e5b5b;
    box-sizing: border-box;
    margin-bottom: 10px;
`;
const ThCategoryInfo = styled.th`
    font-family: SourceSansPro;
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    box-sizing: border-box;
    padding: 0 0 0px 20px;
    margin-bottom: 10px;
`;
export default () => {
    return (
        <LocaltionInfo>
            <Table>
                <Tbody>
                    <Tr>
                        <ThCategory>Rạp:</ThCategory>
                        <ThCategoryInfo>Vinema Thanh Xuân</ThCategoryInfo>
                    </Tr>
                    <Tr>
                        <ThCategory>Suất chiếu:</ThCategory>
                        <ThCategoryInfo>
                            19:00 - 21:08 <br /> 16/10/2021
                        </ThCategoryInfo>
                    </Tr>
                    <Tr>
                        <ThCategory>Phòng chiếu:</ThCategory>
                        <ThCategoryInfo>Phòng 2</ThCategoryInfo>
                    </Tr>
                    <Tr>
                        <ThCategory>Vé:</ThCategory>
                        <ThCategoryInfo>F8, F12, F9</ThCategoryInfo>
                    </Tr>
                </Tbody>
            </Table>
        </LocaltionInfo>
    );
};
