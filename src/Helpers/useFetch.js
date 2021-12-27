import { useState, useEffect } from "react";

// export const fetchData = async (url) => {
  // const [data, setData] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);

//   try {
//     let response = await fetch(url);
//     let json = await response.json();
//     return { success: true, data: json };
//   } catch (error) {
//     console.log(error);
//     return { success: false };
//   }
// }

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);

// const useEffect = (() => {
//     setTimeout(() => {
//       fetch(url)
//         .then(res => {
//           if(!res.ok) {
//             throw Error('could not fetch the data from backend');
//           }
//           return res.json();
//         })
//         .then(data => {
//           setData(data);
//           setIsPending(false);
//           setError(null);
//         })
//         .catch(err => {
//           setIsPending(false);
//           setError(err.message);
//         })
//     }, 1000);
//   }, [url]);
// }
