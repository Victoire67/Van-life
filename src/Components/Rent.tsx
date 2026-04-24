import { useParams } from "react-router-dom";

function Rent() {
  let { idParam } = useParams();
  const params = useParams()
  console.log(params)
  console.log("TYPE" + idParam);
  return <h1>RENTING van number : {idParam}</h1>;
}

export default Rent;
