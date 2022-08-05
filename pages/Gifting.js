import React from 'react'
import axios from "axios";
// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=6&format=json"
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
    const result = await axios.get('https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=68&format=json');
    const data = result.data;
    return {
        props: {
            data: data
        }
    }
} catch (error) {
    console.log(error);
}
}

function Gifting({data}) {
  return (
    <div>
    {/* <div>Gifting hello</div> */}
    <div className='col-md-3  grid-container ' >
    {data.data.products.map((currEle) => {
        return (
          <div key={currEle.id} className='grid-item'>
            <div className="card">
              <img src={currEle.plpimaage} alt="product" />
              <h1>{currEle.name}</h1>
              <p class="price"> price:{currEle.price}</p>

              <p>
                <button>Add to Cart</button>
              </p>
            </div>

            {/* <p>{currEle.name}</p>
          <h1>{currEle.price}</h1>
          <img src={currEle.plpimaage} /> */}
          </div>
        );
      })}
    </div>
    </div>
  )
}

export default Gifting