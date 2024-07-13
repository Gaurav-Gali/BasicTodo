import React from "react";
import MessageStyle from "../styles/Message.module.css";

const Message = ({ msg }) => {
    return <div className={MessageStyle.messageBox}>{msg}</div>;
};

export default Message;
