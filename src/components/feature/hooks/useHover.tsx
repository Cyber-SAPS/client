import * as React from 'react'


// T - could be any type of HTML element like: HTMLDivElement, HTMLParagraphElement and etc.
// hook returns tuple(array) with type [any, boolean]
export function useHover<T>(): [React.MutableRefObject<T>, boolean] {
    const [value, setValue] = React.useState<boolean>(false); 
  
    const ref: any = React.useRef<T | null>(null);
  
    const handleMouseOver = (): void => setValue(true);
    const handleMouseOut = (): void => setValue(false);
  
    React.useEffect(
      () => {
        const node: any = ref.current;
        if (node) {
          node.addEventListener("mouseover", handleMouseOver);
          node.addEventListener("mouseout", handleMouseOut);
  
          return () => {
            node.removeEventListener("mouseover", handleMouseOver);
            node.removeEventListener("mouseout", handleMouseOut);
          };
        }
      },
      [ref] // Recall only if ref changes
    );
  
    return [ref, value];
  }

//   Usage 
// const [hoverRef, isHovered] = useHover<HTMLDivElement>();

// <div ref={hoverRef}>{isHovered ? "😁" : "☹️"}</div>;