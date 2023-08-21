import React from "react";

export const ContactForm = () => {
  return (
    <div>
      <form>
        <div>
          <div className="checkboxes c1">
            <input
              className="w-0"
              type="checkbox"
              name="checkboxes"
              id="product-design"
            />
            <label
              htmlFor="product-design"
              className="bg-upsel-white px-[26px] py-[11px] rounded-full  "
            >
              Product Design
            </label>
          </div>
        </div>
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
      </form>
    </div>
  );
};
