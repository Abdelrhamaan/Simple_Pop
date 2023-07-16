import { useState } from 'react';
import './index.css';


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  /* useState func contain array of two values variable and function so
    we make destructuring for var and func */
    const [Step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);
    // console.log(useState());
    // console.log(useState.Step);
  
    const handleNext = () => {
      // if (Step < 3) setStep(Step +1)
      if (Step < 3) setStep((s)=>s+1)
      // Step >= 3 ?
      //   setStep(1) :
      //   setStep(Step + 1);
    };
  
    const handlePrevious = () => {
      // if (Step > 1) setStep(Step -1)
      if (Step > 1) setStep((s)=>s-1)

      // Step <= 1?
      //   setStep(3) :
      //   setStep(Step - 1);
    };
  // const Step = 3
  return (
    <>
    {/* !isOpen make the opposite  */}
    {/* <button className='close' onClick={()=>setIsOpen(!isOpen)}>&times;</button> */}
    <button className='close' onClick={()=>setIsOpen((is) =>!is)}>&times;</button>
    {isOpen && (
      <div className='steps'>
      <div className='numbers'>
        <div className={Step >= 1 ? 'active' : ""}>1</div>
        <div className={Step >= 2 ? 'active' : ""}>2</div>
        <div className={Step >= 3 ? 'active' : ""}>3</div>
      </div>

      <p className='message'>Step {Step} : {messages[Step-1]}</p>
      <div className='buttons'>
        <button style={{background:"#7950f2",color:"#fff"}} onClick={handlePrevious}>Previous</button>
        <button style={{background:"#7950f2",color:"#fff"}} onClick={handleNext}>Next</button>

      </div>
    </div>)}
    
    </>
  );
}

export default App;
