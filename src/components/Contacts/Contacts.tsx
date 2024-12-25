import React from "react";
import { ContactInfoProps } from "./Contacts.props";

function Contacts({ icon, href, text }: ContactInfoProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-2">
      {icon}
      <a href={href} className="text-black-500 hover:underline">
        {text}
      </a>
    </div>
  );
}

export default Contacts;
