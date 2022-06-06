import React, { useEffect, useState } from "react";
import axios from "axios"
import Product from "./Product/Product";

const Products = () => {
  const [data, setData] = useState([])

  useEffect(()=> {
    axios({
      url: "http://localhost:8080/products",
      method: "GET"
    })
    .then((res)=> {
      setData(res.data)
    })
    .catch((err)=>{})
  },[])

  return <div>
      <div className="grid">
        {data.map((d)=>(
          <div key={d.id}><Product product={d} /></div>
        ))}
      </div>
    </div>;
};

export default Products;
