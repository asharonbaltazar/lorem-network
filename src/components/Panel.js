import React from "react";

const Panel = () => {
  return (
    <div className="flex justify-between items-center bg-blue-900 lg:sticky lg:top-0 lg:z-10">
      <div>
        <h1 className="text-2xl text-white p-2">Lorem Network</h1>
      </div>
      <button className="text-xl text-white p-2">
        <i className="fas fa-cog"></i>
      </button>
    </div>
  );
};

export default Panel;
