import { useContext } from "react";
import {
  Accordion,
  AccordionContext,
  Card,
  useAccordionButton,
} from "react-bootstrap";
import { BiChevronRight, BiChevronDown } from "react-icons/bi";
import styled from "styled-components";
import { Select, SelectHeader } from "./SelectAreaList";

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


const SelectCinemList = () => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Select>
          <SelectHeader>
            <ContextAwareToggle eventKey="0">
              Vinema Trần Duy Hưng
            </ContextAwareToggle>
          </SelectHeader>
          <Accordion.Collapse eventKey="0">
            <Card.Body></Card.Body>
          </Accordion.Collapse>
        </Select>

        <Select>
          <SelectHeader>
            <ContextAwareToggle eventKey="1">Vinema Cổ Nhuế</ContextAwareToggle>
          </SelectHeader>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Select>

        <Select>
          <SelectHeader>
            <ContextAwareToggle eventKey="2">Vinema Đào Tấn</ContextAwareToggle>
          </SelectHeader>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Select>

        <Select>
          <SelectHeader>
            <ContextAwareToggle eventKey="3">Vinema Cổ Nhuế</ContextAwareToggle>
          </SelectHeader>
          <Accordion.Collapse eventKey="3">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Select>
      </Accordion>
    </>
  );
};
export default SelectCinemList;
