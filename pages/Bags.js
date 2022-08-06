import React from "react";
import axios from "axios";
import Link from "next/link";
import styles from "../styles/Home.module.css";
// import Image from "next/image";
// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=10&format=json"
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
      "https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=10&format=json"
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

const Bags = ({ data }) => {
  // console.log(data);
  // console.log(data.data.products);
  return (
    <div>
      <div>Bags</div>
      <div className="col-md-3  grid-container ">
        {data.data.products.map((currEle) => {
          return (
            <div key={currEle.id} className="grid-item">
              {/* <div className="card"> */}
              <div className={styles.card2}>
                <Link href="#">
                <img src={currEle.plpimaage} alt="product" />
                </Link>
                
                <h5>{currEle.name}</h5>
                {/* <h2> price:{currEle.price}</h2> */}

                {/* <p> */}
                <button className={styles.button1}>BUY NOW</button>
                {/* </p> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bags;
