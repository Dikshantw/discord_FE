import { Link, useLocation } from "react-router-dom"
import PropTypes from 'prop-types';

let channels = [
    { id: "1", img: "./src/assets/100xDevs.jpg" },
    { id: "2", img: "./src/assets/aceternity.png" },
    { id: "3", img: "./src/assets/React.png" },
];

const ServerList = () => {

    return (
        <div className="flex text-gray-100 h-screen">
            <div className="flex flex-col bg-gray-900 p-3 gap-y-2 overflow-y-scroll scrollbar-hide">

                <NavLink href='/channel'>
                    <DiscordIcon />
                </NavLink>

                <hr className="border-t-white/[0.06] border-t-2 rounded mx-2" />

                {channels.map((channel) => {
                    return (
                        <NavLink key={channel.id} href={`/channel/${channel.id}`}>
                            <img src={channel.img} alt={`/channel/${channel.id}`} />
                        </NavLink>
                    )
                })}

            </div>
        </div>
    )
}


NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

function NavLink({ href, children }) {
    let location = useLocation();
    return (
        <Link to={href} >
            <div className="relative group">
                <div className="absolute h-full flex items-center -left-3">
                    <div className={`${location.pathname === href
                        ? "h-10"
                        : "h-5 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 "
                        } w-1 bg-white rounded-r transition-all duration-200 origin-left`}></div>
                </div>
                <div className="group-active:translate-y-px">
                    <div
                        className={`${location.pathname === href
                            ? "bg-brand rounded-2xl text-white"
                            : "bg-gray-700 text-gray-100 rounded-3xl group-hover:bg-brand group-hover:text-white group-hover:rounded-2xl transition duration-200"} 
                                                w-12 h-12 flex justify-center items-center overflow-hidden "
                                `} >
                        {children}
                    </div>
                </div>
            </div>
        </Link>
    )
}


function DiscordIcon(props) {
    return (
        <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill="currentColor"
                d="M19.73 4.87a18.2 18.2 0 00-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 00.96 17.7a18.43 18.43 0 005.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83zM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27z"
            />
        </svg>
    )
}

export default ServerList
