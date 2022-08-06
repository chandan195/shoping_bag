import React from 'react'
import axios from "axios"
import Link from 'next/dist/client/link';
export async function getStaticProps() {
  try {
    const result = await axios.get('https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json');
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
// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json"
//   );
//   const data = await res.json();
//   // const value = data.data.data.products;
//   return {
//     props: {
//       data,
//     },
//   };
// };

function jewelory( {data}) {
  // console.log(data.data.products);
  return (
    <div>
    {/* <h4>jewelory</h4> */}
    <div className='col-md-3  grid-container ' >
    {data.data.products.map((currEle) => {
        return(
          <div key={currEle.id} className='grid-item'>
             <div className="card">
              <Link href="#">
            <img src={currEle.plpimaage} />
            </Link>
          <p>{currEle.name}</p>
          <h5> price:{currEle.price}</h5>
          
          {/* <p>{currEle.reviews[1]}</p> */}
          </div>
        </div>
        );
       
      })}
      </div>
      </div>
  )
}

export default jewelory