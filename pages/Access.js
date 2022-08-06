import React from 'react'
import axios from 'axios'
import Link from "next/link";
// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=5&format=json"
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
    const result = await axios.get('https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=5&format=json');
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

function Access({data}) {
  return (
    <div className='container-fluid' >
      
      <h4>Access</h4>
       <div className='col-md-3  grid-container ' >
      {data.data.products.map((currEle) => {
        return (
          <div  className='grid-item' key={currEle.id} >
            
            <div className="card">
              {/* <Link ></Link> */}
              <Link href="#">
              <img src={currEle.plpimaage} alt="product" />
              </Link>
              <h4>{currEle.name}</h4>
              <p class="price">Price :{currEle.price}</p>

              <p>
                <button>Add to Cart</button>
              </p>
            </div>
            
           
          </div>
        );
      })}
      </div>
      </div>
  )
}

export default Access