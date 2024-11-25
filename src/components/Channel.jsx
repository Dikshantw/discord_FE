// import ChevronDown from './src/assets/icons/down-chevron-svgrepo-com.svg'

export default function Channel() {

    return (
        <div className="flex text-gray-100 h-screen">
            <div className="bg-gray-800 w-60 flex flex-col">
                <button className="px-4 h-12 shadow-sm flex items-center font-semibold text-white hover:bg-gray-550/[0.16] transition">
                    <div className="relative flex items-center justify-center w-4 h-4 mr-2">
                        <Verified className="absolute" />
                        <Home className="absolute " />
                    </div> <h2>100xDevs</h2>
                    <ChevronDown className="w-[18px] h-[18px] ml-auto opacity-80" />
                </button>
                <div className=" text-gray-300 flex-1 mt-[17px] overflow-y-scroll scrollbar-hide">
                    <div className="space-y-0.5">
                        <a href="#" className="flex items-center px-2 mx-2 py-1 hover:text-gray-100 rounded text-gray-300 hover:bg-gray-550/[0.16]">
                            <Rules className="w-5 h-5 text-gray-400 mr-1.5" />
                            Welcome
                        </a>
                    </div>

                    <div className="mt-[21px]">
                        <button className="px-0.5 flex items-center text-xs tracking-wide uppercase font-title ">
                            <ChevronDown className="w-3 h-3 mr-0.5" />
                            <h3 className="font-raleway">Whereas</h3>
                        </button>
                        <div className="space-y-0.5 mt-[5px]">
                            <a href="#" className="flex items-center px-2 mx-2 py-1 hover:text-gray-100 rounded text-gray-300 hover:bg-gray-550/[0.16]">
                                <HashLock className="w-5 h-5 text-gray-400 mr-1.5" />
                                Welcome
                            </a>
                            <a href="#" className="flex items-center px-2 mx-2 py-1 hover:text-gray-100 rounded text-gray-300 hover:bg-gray-550/[0.16]">
                                <HashLock className="w-5 h-5 text-gray-400 mr-1.5" />
                                Welco
                            </a>
                            <a href="#" className="flex items-center px-2 mx-2 py-1 hover:text-gray-100 rounded text-gray-300 hover:bg-gray-550/[0.16]">
                                <Hash className="w-5 h-5 text-gray-400 mr-1.5" />
                                Welcome
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-700 flex-1 flex flex-col">
                <div className="px-3 h-12 flex items-center shadow-sm">Announcement</div>
                <div className="p-3 flex-1 space-y-4 overflow-y-scroll scrollbar-hide">
                    {[...Array(40)].map((_, i) => (
                        <p key={i} className="">message {i}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, saepe. Officia, explicabo molestiae. Deserunt aliquid, temporibus tempora doloribus debitis veritatis reiciendis voluptas sequi unde. Nihil explicabo maxime esse minima doloribus.</p>
                    ))}
                </div>
            </div>
        </div>


    )
}

function Verified(props) {
    return (
        <svg
            className="text-blue"
            aria-hidden="false"
            width={16}
            height={16}
            viewBox="0 0 16 15.2"
            {...props}
        >
            <path
                fill="#e191a9"
                fillRule="evenodd"
                d="M16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59S0 8.39 0 7.6s1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8S4.78.28 5.53 0 7.2.83 8 .83s1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59S16 6.81 16 7.6z"
            />
        </svg>
    )
}

function Home(props) {
    return (
        <svg
            aria-hidden="false"
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill="white"
                d="M2.4 8.4l8.38-6.46a2 2 0 012.44 0l8.39 6.45a2 2 0 01-.79 3.54l-.32.07-.82 8.2a2 2 0 01-1.99 1.8H16a1 1 0 01-1-1v-5a3 3 0 00-6 0v5a1 1 0 01-1 1H6.31a2 2 0 01-1.99-1.8L3.5 12l-.32-.07a2 2 0 01-.79-3.54z"
            />
        </svg>
    )
}

function ChevronDown(props) {
    return (
        <svg
            className="icon_a08117"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill="currentColor"
                d="M5.3 9.3a1 1 0 011.4 0l5.3 5.29 5.3-5.3a1 1 0 111.4 1.42l-6 6a1 1 0 01-1.4 0l-6-6a1 1 0 010-1.42z"
            />
        </svg>
    )
}

function Rules(props) {
    return (
        <svg
            className="icon_d8bfb3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M15 2a3 3 0 013 3v12H5.5a1.5 1.5 0 000 3h14a.5.5 0 00.5-.5V5h1a1 1 0 011 1v15a1 1 0 01-1 1H5a3 3 0 01-3-3V5a3 3 0 013-3h10zm-.3 5.7a1 1 0 00-1.4-1.4L9 10.58l-2.3-2.3A1 1 0 005.3 9.7l3 3a1 1 0 001.4 0l5-5z"
                clipRule="evenodd"
            />
        </svg>
    )
}

function Hash(props) {
    return (
        <svg
            className="icon_d8bfb3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10.99 3.16A1 1 0 109 2.84L8.15 8H4a1 1 0 000 2h3.82l-.67 4H3a1 1 0 100 2h3.82l-.8 4.84a1 1 0 001.97.32L8.85 16h4.97l-.8 4.84a1 1 0 001.97.32l.86-5.16H20a1 1 0 100-2h-3.82l.67-4H21a1 1 0 100-2h-3.82l.8-4.84a1 1 0 10-1.97-.32L15.15 8h-4.97l.8-4.84zM14.15 14l.67-4H9.85l-.67 4h4.97z"
                clipRule="evenodd"
            />
        </svg>
    )
}

function HashLock(props) {
    return (
        <svg
            className="icon_d8bfb3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M16 4h.5v-.5a2.5 2.5 0 015 0V4h.5a1 1 0 011 1v4a1 1 0 01-1 1h-6a1 1 0 01-1-1V5a1 1 0 011-1zm4-.5V4h-2v-.5a1 1 0 112 0z"
                clipRule="evenodd"
            />
            <path
                fill="currentColor"
                d="M12.5 8c.28 0 .5.22.5.5V9c0 .1 0 .2.02.31.03.34-.21.69-.56.69H9.85l-.67 4h4.97l.28-1.68c.06-.34.44-.52.77-.43a3 3 0 00.8.11c.27 0 .47.24.43.5l-.25 1.5H20a1 1 0 110 2h-4.15l-.86 5.16a1 1 0 01-1.98-.32l.8-4.84H8.86L8 21.16a1 1 0 01-2-.32L6.82 16H3a1 1 0 110-2h4.15l.67-4H4a1 1 0 110-2h4.15l.86-5.16a1 1 0 111.98.32L10.19 8h2.31z"
            />
        </svg>
    )
}

// function Speaker(props) {
//     return (
//         <svg
//             className="icon_d8bfb3"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             width={24}
//             height={24}
//             fill="none"
//             viewBox="0 0 24 24"
//             {...props}
//         >
//             <path
//                 fill="currentColor"
//                 fillRule="evenodd"
//                 d="M19.56 2a3 3 0 00-2.46 1.28 3.85 3.85 0 01-1.86 1.42l-8.9 3.18a.5.5 0 00-.34.47v10.09a3 3 0 002.27 2.9l.62.16c1.57.4 3.15-.56 3.55-2.12a.92.92 0 011.23-.63l2.36.94c.42.27.79.62 1.07 1.03A3 3 0 0019.56 22h.94c.83 0 1.5-.67 1.5-1.5v-17c0-.83-.67-1.5-1.5-1.5h-.94zm-8.53 15.8L8 16.7v1.73a1 1 0 00.76.97l.62.15c.5.13 1-.17 1.12-.67.1-.41.29-.78.53-1.1z"
//                 clipRule="evenodd"
//             />
//             <path
//                 fill="currentColor"
//                 d="M2 10c0-1.1.9-2 2-2h.5c.28 0 .5.22.5.5v7a.5.5 0 01-.5.5H4a2 2 0 01-2-2v-4z"
//             />
//         </svg>
//     )
// }

// function SpeakerLock(props) {
//     return (
//         <svg
//             className="icon_d8bfb3"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             width={24}
//             height={24}
//             fill="none"
//             viewBox="0 0 24 24"
//             {...props}
//         >
//             <path
//                 fill="currentColor"
//                 fillRule="evenodd"
//                 d="M16 4h.5v-.5a2.5 2.5 0 015 0V4h.5a1 1 0 011 1v4a1 1 0 01-1 1h-6a1 1 0 01-1-1V5a1 1 0 011-1zm4-.5V4h-2v-.5a1 1 0 112 0z"
//                 clipRule="evenodd"
//             />
//             <path
//                 fill="currentColor"
//                 fillRule="evenodd"
//                 d="M12.33 5.74a.5.5 0 01.67.47V9a3 3 0 003 3h5.5c.28 0 .5.22.5.5v8c0 .83-.67 1.5-1.5 1.5h-.94a3 3 0 01-2.46-1.28 3.86 3.86 0 00-1.07-1.03l-2.36-.94a.92.92 0 00-1.23.63 2.92 2.92 0 01-3.55 2.12l-.62-.15A3 3 0 016 18.44V8.35c0-.2.13-.4.33-.47l6-2.14zm-1.3 12.06L8 16.7v1.73a1 1 0 00.76.97l.62.15c.5.13 1-.17 1.12-.67.1-.41.29-.78.53-1.1z"
//                 clipRule="evenodd"
//             />
//             <path
//                 fill="currentColor"
//                 d="M2 10c0-1.1.9-2 2-2h.5c.28 0 .5.22.5.5v7a.5.5 0 01-.5.5H4a2 2 0 01-2-2v-4z"
//             />
//         </svg>
//     )
// }

// function Audio(props) {
//     return (
//         <svg
//             className="icon_d8bfb3"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             width={24}
//             height={24}
//             fill="none"
//             viewBox="0 0 24 24"
//             {...props}
//         >
//             <path
//                 fill="currentColor"
//                 d="M12 3a1 1 0 00-1-1h-.06a1 1 0 00-.74.32L5.92 7H3a1 1 0 00-1 1v8a1 1 0 001 1h2.92l4.28 4.68a1 1 0 00.74.32H11a1 1 0 001-1V3zm3.1 17.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 000-13.5A1.11 1.11 0 0114 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 010 17.5z"
//             />
//             <path
//                 fill="currentColor"
//                 d="M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 000-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 010 9.02z"
//             />
//         </svg>
//     )
// }

// function Chat(props) {
//     return (
//         <svg
//             className="actionIcon_f6f816"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             width={16}
//             height={16}
//             fill="none"
//             viewBox="0 0 24 24"
//             {...props}
//         >
//             <path
//                 fill="currentColor"
//                 d="M12 22a10 10 0 10-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 002.2 22H12z"
//             />
//         </svg>
//     )
// }

// function ChevronRight(props) {
//     return (
//         <svg
//             className="icon_a08117"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             width={24}
//             height={24}
//             fill="none"
//             viewBox="0 0 24 24"
//             {...props}
//         >
//             <path
//                 fill="currentColor"
//                 d="M5.3 9.3a1 1 0 011.4 0l5.3 5.29 5.3-5.3a1 1 0 111.4 1.42l-6 6a1 1 0 01-1.4 0l-6-6a1 1 0 010-1.42z"
//             />
//         </svg>
//     )
// }