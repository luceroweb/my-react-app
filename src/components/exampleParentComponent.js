import { useState } from 'react';
import { ExampleChildComponent } from './exampleChildComponent';

export const ExampleParentComponent = () => {
  const [headerColor, setHeaderColor] = useState("black");

  const makeHeaderAlwaysBlue = () => {
    setHeaderColor("blue");
  }
  
  return(
    <div>
      <h2 style={{color:headerColor}}>Parent Componnent</h2>
      <ExampleChildComponent parentMethod={makeHeaderAlwaysBlue}/>
    </div>
  )
}