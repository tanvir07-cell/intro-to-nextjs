import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="text-pink-500">This is the todos layout</h1>

      {children}
    </div>
  );
};

export default layout;
