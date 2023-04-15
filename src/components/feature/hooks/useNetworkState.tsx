import * as React from 'react'
import { useBoolean } from './useBoolean';



export const useNetworkState = () => {
    const [isOnline, setIsOnline] = useBoolean(window.navigator.onLine);
  
    React.useEffect(() => {
      window.addEventListener('online', setIsOnline.on);
      window.addEventListener('offline', setIsOnline.off);
  
      return () => {
        window.removeEventListener('online', setIsOnline.on);
        window.removeEventListener('offline', setIsOnline.off);
      };
    }, [setIsOnline]);
  
    return isOnline;
  };
  

// Usage
// const App = () => {
//     const isOnline = useNetworkState()
  
//     return (
//       <div>
//         <h1>My Awesome App</h1>
//         <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
//           provident tenetur molestias fugiat expedita quaerat dolores dignissimos
//           dicta, error amet reiciendis voluptates delectus perspiciatis dolorum
//           saepe, sunt, similique vitae illo.
//         </p>
//         {!isOnline && (
//           <div className="toast">
//             You are offline. Please check your connectivity and try again.
//           </div>
//         )}
//       </div>
//     );
//   };
  