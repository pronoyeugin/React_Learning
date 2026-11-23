import React, { useState } from 'react';
import Style from './faqs.module.css';
import { FiPlus, FiMinus } from 'react-icons/fi';

const Faq = ({id, title, desc}) => {

    const [toggle, setToggle] = useState(false);

  return (
   <>
    <article>
        <div className={Style["faq-header"]}>
            <h4 className={Style["faq-title"]}>{title}</h4>
             <button className={Style["faq-btn"]} onClick={() => {setToggle(!toggle)}}  >
                {toggle ? <FiMinus /> : <FiPlus />}
             </button>
        </div>
        
           {toggle && (
            <div className={Style["faq-body"]}>
                <p className={Style["faq-desc"]}>{desc}</p>
            </div>
           )},

    </article>
   </>
  )
}

export default Faq;
