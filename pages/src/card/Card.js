import React from "react";
// import Image from 'next/image'
function card() {
  return (
    <div>
      <div className="card" >
        {/* <Image className="card-img-top" src="/public/download.jpg" alt="Card image cap"  width={200}
      height={200} /> */}
        <div className="card-body">
          <p className="card-text bg-pink">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default card;
