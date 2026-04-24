import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Vans() {
  const [vans, setVans] = useState([]);
  console.log(vans);
  useEffect(() => {
    fetch("/api/vans")
      .then((x) => {
        return x.json();
      })
      .then((x) => {
        setVans(x.vans);
      });
  }, []);
  const vanElements = vans.map((van) => (
    <div key={van.id} className="w-sm rounded-sm gap-4">
      <Link
        to={`/vans/${van.id}`}
        aria-label={` View details for ${van.name} , priced ${van.price}`}
      >
        <img src={van.imageUrl} />
        <div className="van-info flex place-content-between fount-bold text-2xl">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <button
          className={`van-type ${van.type} selected bg-amber-500 px-8 py-4 rounded-sm`}
        >
          {van.type}
        </button>
      </Link>
    </div>
  ));
  return <div className="grid grid-cols-2">{...vanElements}</div>;
}
export default Vans;
