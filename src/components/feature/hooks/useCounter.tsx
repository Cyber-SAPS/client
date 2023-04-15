import * as React from 'react'


export const useCounter = (initialValue: any) => {
    const [value, setValue] = React.useState(initialValue);
  
    const increment = () => setValue((c: number) => c + 1);
    const decrement = () => setValue((c: number) => c - 1);
    const reset = () => setValue(initialValue);
  
    return { value, increment, decrement, reset };
  };
  
//   usage

// function Cart() {
//     const quantity = useCounter(0);
  
//     return (
//       <div className="Cart">
//         <h1>My Cart</h1>
//         <Item
//           label="My awesome item"
//           quantity={quantity.value}
//           onIncrement={quantity.increment}
//           onDecrement={quantity.decrement}
//           onReset={quantity.reset}
//         />
//       </div>
//     );
//   }
  