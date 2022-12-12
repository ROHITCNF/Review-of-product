import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  //one variable to maintain the index of the people array
  const [index,setIndex] = useState(0);
  const {name,job,image,text} = people[index];

  function handleLeft(){
    {index ? setIndex(index-1) : setIndex(people.length -1) }
  }
  function handleRight(){
    {index === people.length-1 ? setIndex(0) : setIndex(index+1)}
  }
  function handleSurprise(){
    //we will generate a random number b/w 0 to people.length
    let newIndex= Math.floor((Math.random())*people.length ) ;
    //console.log(newIndex);
    if(newIndex === index)
       newIndex = index+1;
       
   setIndex(newIndex);
  }

  return(
    <article className='review'>

     <div className='img-container'>
      <img src={image} alt={name} className="person-img" />
      <span className='quote-icon'> <FaQuoteRight /></span>
     </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>

      <div className='button-container'>
      <button className='prev-btn' onClick={handleLeft}> <FaChevronLeft/> </button>
      <button className='next-btn' onClick={handleRight}> <FaChevronRight/> </button>
      </div>

      <button className='random-btn' onClick={handleSurprise}> Surprise Me </button>
    </article>
  );
};

export default Review;
