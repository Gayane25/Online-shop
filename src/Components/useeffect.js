import React, { useState, useEffect } from 'react';

export default function Dataeffect() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = fetch('https://harvardartmuseums.org/browse')
      .then(response => response.json())
      .then(data =>
        setData(
          data.records.map(
            ({
              id,
              signed: name,
              title,
              totaluniquepageviews: price,
              primaryimageurl: image,
            }) => {
              return {
                id,
                signed: name,
                title,
                totaluniquepageviews: price,
                primaryimageurl: image,
              };
            }
          )
        )
      );
  }, []);
  console.log(data);
  return (
    <div>
      {data.map(
        ({
          id,
          signed: name,
          title,
          totaluniquepageviews: price,
          primaryimageurl: image,
        }) => {
          return (
            <>
              <div key={id}>
                <h2>{name}</h2>
                <h3>{title}</h3>
                <span>{price}</span>
                <img src={image} />
              </div>
            </>
          );
        }
      )}
    </div>
  );
}
