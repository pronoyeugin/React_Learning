import React, { useState } from 'react'; 
import faqData from './Data'; 
import Faq from './Faq';
import Style from './faqs.module.css';

const Faqs = () => {
 
  const [faqs, setFaqs] = useState(faqData); 

  return (
    <main className={Style["faq-container"]}>
      <section className={Style["faq-section"]}>
        <h1 className={Style["faq-heading"]}>FAQS</h1>
        <div className={Style["faq-list"]}>
          {faqs.map((faq) => ( 
            <Faq key={faq.id} {...faq} /> 
          ))}
        </div>
      </section>
    </main>
  );
};

export default Faqs;