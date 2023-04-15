import * as React from 'react'


export const useBoolean = (initialValue: any) => {
    const [value, setValue] = React.useState(initialValue)


    const updateValue = React.useRef({
        toggle: () => setValue((oldValue: any) => !oldValue),
        on: () => setValue(true),
        off: () => setValue(false)
    })

    return [value, updateValue.current]
}


// Usage 1

// const Spoil = ({ content }: any) => {
//     const [showSpoil, setShowSpoil] = useBoolean(false);
  
//     return (
//       <div className="spoil">
//         <button onClick={setShowSpoil.toggle}>
//           {showSpoil ? "Hide" : "Show"}
//         </button>
//         {showSpoil && <div className="spoil-content">{content}</div>}
//       </div>
//     );
//   };

//   or

// Usage 2

// const Articles = () => {
//     const [articles, setArticles] = React.useState([])
//       const [isLoading, setIsLoading] = useBoolean(false)
//       const [isError, setIsError] = useBoolean(false)
  
//       React.useEffect(() => {
//           setIsLoading.on()
//           fetch(...)
//               .then(res => res.json())
//               .then(setArticles)
//               .catch(setIsError.on)
//               .finally(setIsLoading.off)
//     }, [])
  
//       return ...
//   }
  