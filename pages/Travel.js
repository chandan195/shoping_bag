import React from "react";
import axios from "axios";
// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=26&format=json"
//   );
//   const data = await res.json();
//   // const value = data.data.data.products;
//   return {
//     props: {
//       data,
//     },
//   };
// };
export async function getStaticProps() {
  try {
    const result = await axios.get(
      "https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=26&format=json"
    );
    const data = result.data;
    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

function Travel({ data }) {
  return (
    <div>
      <h3>Travel</h3>
      <div className="col-md-3  grid-container ">
        {data.data.products.map((currEle) => {
          return (
            <div key={currEle.id} className="grid-item">
              <div className="card">
                <img src={currEle.plpimaage} />
                <p>{currEle.name}</p>
                <h5>price:{currEle.price}</h5>
                <p>
                  <button>Add to Cart</button>
                </p>
              </div>
              {/* <p>{currEle.reviews[1]}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Travel;
