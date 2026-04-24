import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function VanDetails(rentAt) {
    console.log(rentAt)
  const [van, setVan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getData = async function () {
      try {
        let vanData = await fetch(`/api/vans/${id}`);
        vanData = await vanData.json();
        setVan(vanData.vans);
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
          <Link to={`/rent/${van.id}`}>
            <button className="link-button">Rent this van</button>
          </Link>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
export default VanDetails;
