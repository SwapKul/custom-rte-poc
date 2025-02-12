// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useRef, useState } from "react";
// import { options } from "./constants/Options";

// function AppOld() {
//   const [selectedStyles, setSelectedStyles] = useState([] as any);
//   const [selectedStyleObj, setSelectedStyleObj] = useState([] as any);
//   const inputRef = useRef(null);

//   const textSetter = (event: any) => {
//     console.log(event.target.innerHTML);
//     localStorage.setItem("RTE.text", event.target.innerHTML);
//     // inputRef.current.innerHTML = event.target.innerHTML;
//     // console.log(event.target);
//     // console.log(event.target.innerHTML);
//     // setTextArea(event.target.innerHTML);
//   };

//   const styleSetter = (option: any) => {
//     if (!selectedStyles.includes(option.title)) {
//       setSelectedStyles((prev: any) => [...prev, option.title]);
//       setSelectedStyleObj((prev: any) => [...prev, option.styles]);
//     } else {
//       setSelectedStyles((prev: any) =>
//         prev.filter((style: any) => style !== option.title)
//       );
//       setSelectedStyleObj((prev: any) =>
//         prev.filter((style: any) => style !== option.styles)
//       );
//     }
//   };

//   const getSelection = () => {
//     console.log(window.getSelection());
//   };

//   useEffect(() => {
//     console.log(selectedStyleObj);
//     console.log(selectedStyles);
//   }, [selectedStyleObj]);

//   useEffect(() => {
//     inputRef.current.innerHTML = localStorage.getItem("RTE.text") || "";
//   }, []);

//   return (
//     <>
//       <div className="w-[80%] m-auto mt-[20vh] border border-black">
//         <div className="h-[5vh] border flex justify-center items-center gap-2">
//           {options.map((option) => (
//             <span
//               key={option.title}
//               title={option.title}
//               onClick={() => styleSetter(option)}
//               style={{
//                 backgroundColor: selectedStyles.includes(option.title)
//                   ? "rgba(0,0,0,0.4)"
//                   : null,
//               }}
//               className={`w-5 text-center cursor-pointer hover:bg-[rgba(0,0,0,0.4)] duration-150 rounded-[3px] ${option.styles}`}
//             >
//               {option.opt}
//             </span>
//           ))}
//         </div>
//         <div className="h-[20vh] border p-2">
//           {/* <textarea
//           className={`w-full h-full text-sm ${selectedStyleObj.join(" ")}`}
//           placeholder="Text Area..."
//           value={textArea}
//           onChange={textSetter}
//         ></textarea> */}
//           <div
//             contentEditable
//             className={`w-full h-full text-sm ${selectedStyleObj.join(
//               " "
//             )} outline-none`}
//             data-text="Enter text here..."
//             onInput={textSetter}
//             ref={inputRef}
//             autoFocus
//             // dangerouslySetInnerHTML={{ __html: textArea }}
//           >
//             {/* <p>lo</p> */}
//           </div>
//         </div>
//       </div>
//       <button
//         className="m-auto flex my-2 border border-black px-3 rounded-[5px]"
//         onClick={getSelection}
//       >
//         Select
//       </button>
//     </>
//   );
// }

// export default AppOld;
