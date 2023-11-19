import React , {useState} from "react";
import { createPortal } from "react-dom";

const  IFrame = ({ children }) =>  {
    const [ref, setRef] = useState();
    const container = ref?.contentDocument?.body;
  
    return (
      <iframe title="iframe" ref={setRef}>
        {container && createPortal(children, container)}
      </iframe>
    );
  }

  export default IFrame