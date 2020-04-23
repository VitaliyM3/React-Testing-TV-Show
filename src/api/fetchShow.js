import axios from 'axios';

export const fetchShow = () => {
    return axios.get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
    // .then(res => console.log('the res logged', res))
    // .then(res => console.log('the res.data logged', res.data))
    // .then(res => res.data)



    .then(res => res)
    
};



// useEffect(() => {
//   const fetchShow = () => {
//     axios
//       .get(
//         "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
//       )
//       .then(res => {
//         setShow(res.data);
//         setSeasons(formatSeasons(res.data._embedded.episodes));
//       });
//   };
//   fetchShow();
// }, []);
