import React from "react";
const flower = {
    name: 'Tulip',
    theme: {
      color: 'red'
    }
  };
export default function Content() {
    return (
      <div style={flower.theme}>
        <h1>About {flower.name}</h1>
        <img 
          src="https://www.farmergracy.co.uk/cdn/shop/files/tulip-couleur-cardinal-00.jpg?v=1688635639" 
          alt="Tulip" 
          className="photo" 
        />
        <ul>
          <li>There are also some beautiful examples of seasonal flowers in Nepal, which can be enjoyed throughout the year.</li>
          <li>The tulip was seen as a symbol of abundance and indulgence</li>
        </ul>
      </div>
    );
  }