import { useParams } from "react-router-dom"

export default function Server1() {
    const { channelId } = useParams();
    return (
        <div className="flex text-gray-100 h-screen">
            <div className="bg-gray-800 w-60 flex flex-col">
                <div className="px-3 h-12 shadow-md flex items-center">100xDevs</div>
                <div className="p-3 text-gray-300 flex-1 space-y-2 overflow-y-scroll scrollbar-hide">
                    <p className="text-white">channel {channelId}</p>
                </div>
            </div>
            <div className="bg-gray-700 flex-1 flex flex-col">
                <div className="px-3 h-12 flex items-center shadow-md">Announcement</div>
                <div className="p-3 flex-1 space-y-4 overflow-y-scroll scrollbar-hide">
                    {[...Array(40)].map((_, i) => (
                        <p key={i} className="">message {i}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, saepe. Officia, explicabo molestiae. Deserunt aliquid, temporibus tempora doloribus debitis veritatis reiciendis voluptas sequi unde. Nihil explicabo maxime esse minima doloribus.</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

