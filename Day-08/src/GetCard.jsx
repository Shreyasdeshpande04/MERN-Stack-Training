import React, { useState, useEffect } from "react";
import { getdata } from "../Services/GetApi";
import "./GetCard.css"; // Import CSS
export const GetCard = () => {
  const [data, setData] = useState([]);
  const showdata = async () => {
    const res = await getdata();
    setData(res.data);
  };
  useEffect(() => {
    showdata();
  }, []);
  return (
    <section className="card-section">
      <h1 className="card-title">Posts</h1>
      <div className="card-container">
        {data.map((curEle) => {
          const { id, title, body } = curEle;
          return (
            <div key={id} className="card">
              <p className="card-id">ID: {id}</p>
              <h2 className="card-heading">{title}</h2>
              <p className="card-body">{body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
