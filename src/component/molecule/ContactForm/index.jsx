import React from "react";

export const ContactForm = () => {
  return (
    <div>
      <div>
        <label className="block">Name</label>
        <input
          clas
          type="text"
          placeholder="Enter your name"
          name="name"
          //   value={fullName}
          //   onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
    </div>
  );
};
