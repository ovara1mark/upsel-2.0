import React from "react";
import { ContactForm } from "../../molecule";

export const ContactUs = () => {
  return (
    <section>
      <div>
        <div>Request a consultation</div>
        <div>
          What service(s) are you interested in?{" "}
          <span>(you can select multiple ones)</span>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};
