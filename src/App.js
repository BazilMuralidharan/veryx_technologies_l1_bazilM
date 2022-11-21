import FormUser from "./Component/Form";
import "./styles.css";
import { useSelector } from "react-redux";
import Card from "./Component/Card";

export default function App() {
  const { metaData } = useSelector((state) => state);
  // console.log(metaData);
  return (
    <div className="App">
      <FormUser />

      <div>
        {metaData?.map((el, i) => (
          <Card name={el.name} phone={el.phone} city={el.city} key={el.name} />
        ))}
      </div>
    </div>
  );
}
