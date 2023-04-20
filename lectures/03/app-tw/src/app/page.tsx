'use client';

import { useState } from 'react';
import Link from 'next/link';

// export default function Home() {
//     return (
//         <div>
//             <h1>HelloWorld</h1>
//             {/* The attribute 'class' is a JavaScript reserved keyword, use 'classWorld' instead. */}
//             <div className="bg-lime-300 inline-block px-5 py-7">
//                 This is lime
//             </div>
//         </div>
//     );
// }

export default function Home() {
    const [likes, setLikes] = useState<number>(0);

    return (
        <div>
            <button className="bg-blue-300 px-3 py-1 rounded-md"
                onClick={ () => {
                    setLikes(likes + 1);
                }}>
                Like ({likes})
            </button>
        </div>
    )
}
