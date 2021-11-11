import { Tabs, Tab } from "react-bootstrap";
import styled from "styled-components";

const DateIcon = styled.div`
  display: flex;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font: 600 28px SourceSansPro;
  color: #969696;
`;

const DateText = styled.div`
  font: 600 13px SourceSansPro;
  color: #969696;
  text-align: center;
  text-transform: uppercase;
`;

const DateContent = styled.div`
  font: 600 18px SourceSansPro;
  color: #000;
  padding: 20px 0px 30px 0px;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: #7d7d7d;
`;

const getFilmDates = () => {
  const weekdays = ["chủ nhật", "Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy"];
  let date = new Date();
  let filmDates = [{ weekDay: weekdays[date.getDay()], date: new Date(date) }];

  for (let i = 1; i <= 6; i++) {
    date.setDate(date.getDate() + 1);
    let weekDay = weekdays[date.getDay()];
    filmDates.push({
      weekDay,
      date: new Date(date),
    });
  }

  return filmDates;
};

const FilmDateTabs = () => {
  let filmDates = getFilmDates();
  return (
    <Tabs
      defaultActiveKey="Hôm nay"
      id="uncontrolled-tab-example"
      className="date-list"
    >
      {filmDates.map((f, index) => (
        <Tab
          eventKey={index == 0 ? "Hôm nay" : f.weekDay}
          key={index}
          title={
            <>
              <DateIcon>{f.date.getDate()}</DateIcon>
              <DateText> {index == 0 ? "Hôm nay" : ("Thứ " + f.weekDay)}</DateText>
            </>
          }
        >
          <DateContent>
            {`Thứ ${
              f.weekDay
            } ${f.date.getDate()} tháng ${f.date.getMonth()} năm ${f.date.getFullYear()}`}
          </DateContent>
        </Tab>
      ))}
    </Tabs>
  );
};

export { FilmDateTabs, DateIcon, DateText };
