// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import PageHeader from '../Page/PageHeader';

// import headerImage from '../images/background.jpg';

// export default function ProjectEdit() {
//     const [project, setProject] = useState(null);

//     // query departments on first page visit.
//     useEffect(() => {
//         axios.get('/api/projects/') // USE THE PROXY!
//             .then(response => {
//                 console.log('ProjectView.js response:');
//                 console.log(response);
//                 // setProject();
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }, [])

//     if (!project) {
//         return <></>;
//     }

//     return (
//         <>
//             <PageHeader title='Project Edit' image={headerImage} />
//         </>
//     )
// }