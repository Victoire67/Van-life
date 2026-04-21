import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function VanDetails() {
  const [van, setVan] = useState(null);
  const params = useParams();
  useEffect(() => {
    const getData = async function () {
      try {
        let vanData = await fetch(`/api/vans/${params.id}`);
        vanData = await vanData.json();
        setVan(vanData.vans);
        console.log(vanData);
      } catch (err) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
export default VanDetails;
