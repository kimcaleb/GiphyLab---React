import React from "react";


export default ({results}) => {
    if (results.length != 0) {
        return <h1>Hello</h1>
    }
    else {
      return( 
        <div class="container">
            <div class="row">
                <div class="column">.column</div>
                <div class="column">.column</div>
                <div class="column">.column</div>
            </div>
        </div>
      );
    }
}