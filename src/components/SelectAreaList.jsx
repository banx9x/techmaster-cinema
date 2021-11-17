import { useContext } from "react";
import {
  Accordion,
  Card,
  useAccordionButton,
  AccordionContext,
} from "react-bootstrap";
import {  BiChevronDown, BiChevronRight } from "react-icons/bi";
import styled from "styled-components";
import FilmTypeTab from "./FilmTypeTab";

const Select = styled(Card)`
  margin-bottom: 30px;
  background: unset;
  border: 0;
`;
const SelectHeader = styled.div`
  padding: 8px 20px;
  background-color: #fff;
  border: 1px solid #8c8c8d;
  border-radius: 10px !important;

  a{
    font: 400 18px SourceSansPro;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    svg{
      font-size: 28px;
    }
  }
  
`;

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <a onClick={decoratedOnClick}>
      {children}
      {isCurrentEventKey ? <BiChevronDown /> : <BiChevronRight />}
    </a>
  );
}


const SelectAreaList = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Select>
        <SelectHeader>
          <ContextAwareToggle  eventKey="0">Hà Nội</ContextAwareToggle>
        </SelectHeader>
        <Accordion.Collapse eventKey="0">
          <FilmTypeTab/>
        </Accordion.Collapse>
      </Select>

      <Select>
        <SelectHeader>
          <ContextAwareToggle eventKey="1">Đà Nẵng</ContextAwareToggle>
        </SelectHeader>
        <Accordion.Collapse eventKey="1">
          <FilmTypeTab/>
        </Accordion.Collapse>
      </Select>

      <Select>
        <SelectHeader>
          <ContextAwareToggle eventKey="2">Hà Nội</ContextAwareToggle>
        </SelectHeader>
        <Accordion.Collapse eventKey="2">
          <FilmTypeTab/>
        </Accordion.Collapse>
      </Select>

      <Select>
        <SelectHeader>
          <ContextAwareToggle eventKey="3">TP Hồ Chí Minh</ContextAwareToggle>
        </SelectHeader>
        <Accordion.Collapse eventKey="3">
          <FilmTypeTab/>
        </Accordion.Collapse>
      </Select>
    </Accordion>
  );
};
export { SelectHeader, Select, SelectAreaList };
