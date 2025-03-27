import React from 'react';
import { ClipLoader } from 'react-spinners';
import './Loading.css'; 

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <ClipLoader size={60} color={"#ffcc00"} />
        <p className="loading-text">Yükleniyor...</p>
      </div>
    </div>
  );
};

export default Loading;
