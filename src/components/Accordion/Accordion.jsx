import React from 'react';
import { useRef, useState } from 'react';
import data from './AccordionData';
import './Accordion.css';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


const AccordionItem = (props) => {
 const {question, answer, isOpen, onClick} = props;
 const contentHeight = useRef();
    return(
        <div className='wrapper'>
          <button aria-expanded="true/false" className={`question-container ${isOpen ? 'active' : ''}`} onClick={onClick} >
            <h2 className='question-content sm:text-2xl md:text-3xl lg:p-5'>{question}</h2>
            <IoIosArrowForward />
          </button>

          <div ref={contentHeight} className='answer-container' style={
            isOpen 
            ? { height: contentHeight.current.scrollHeight }
            : { height: '0px'}
          }>
            <p className='answer-content text-center'>{answer}</p>
          </div>
        </div>
    )
}

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }
  return (
    <div className='container flex flex-col max-w-full'>
      <h1 className="hidden sm:hidden md:block md:text-center text-center lg:mb-10">Frequently Asked Questions</h1>
      <h1 className=" text-center md:hidden">FAQ</h1>
      {data.map((item, index) => (
        <AccordionItem 
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  )
}

