import React from "react";


export default ({results}) => {
    if(results.length ==0) return <h1>Hello</h1>
    return (
        <div>
            {results.map((result,index) => {
                return <img key={index} src={result.images.original.url} alt="Not Available" />
            })}
        </div>
    );
}