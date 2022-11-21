import FormUser from "./Component/Form";
import "./styles.css";
import { useSelector } from "react-redux";
import Card from "./Component/Card";
import styled from "styled-components";

const CardContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
`;

export default function App() {
  const { metaData } = useSelector((state) => state);
  // console.log(metaData);
  return (
    <div className="App">
      <FormUser />

      <CardContainer>
        {metaData?.map((el, i) => (
          <Card name={el.name} phone={el.phone} city={el.city} key={el.name} />
        ))}
      </CardContainer>
    </div>
  );
}
