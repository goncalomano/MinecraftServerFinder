import { getServerData } from "@/actions/getServerData";
import { useContext, useEffect, useState } from "react";

import { Open_Sans } from 'next/font/google'
import ServerListContext from "./list/ServerListProviders";

const openSans = Open_Sans({
    weight: ['300', '400', '500', '600', '700', '800'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})
interface ServerProps {
    serverIP: string;
}

export const ServerComponent = ({ serverIP }: ServerProps) => {
    const [serverName, setServerName] = useState("");
    const [serverMotd, setServerMotd] = useState("");
    const [onlinePlayers, setOnlinePlayers] = useState(0);
    const [maxPlayers, setMaxPlayers] = useState(0);

    const { serverList, addToServerList, removeFromServerList } = useContext(ServerListContext);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getServerData(serverIP);
            console.log(data);
            setServerName(data?.hostname || "");
            setServerMotd(data?.motd?.html || "");
            setOnlinePlayers(data?.players?.online || 0)
            setMaxPlayers(data?.players?.max || 0)

        };
        fetchData();
    }, [serverIP]);

    return (
        <div className="w-full p-2 bg-slate-200 border-2 border-black rounded-xl shadow-md flex justify-between">
            <div className="flex flex-col gap-2 w-1/2">
                <p className={`font-bold text-2xl ${openSans.className}`}>{serverName.toUpperCase()}</p>
                {/* Render serverMotd HTML content */}
                <div className={`${openSans.className}`} dangerouslySetInnerHTML={{ __html: serverMotd }} />
            </div>
            <div className="flex flex-col gap-2 w-1/2 items-end">
                <p className={`font-bold ${openSans.className}`}>Online Players: {onlinePlayers} / {maxPlayers}</p>
                <button className="bg-green-300 font-bold text-white px-4 py-2 rounded-lg" onClick={() =>addToServerList(serverIP)}>Add to list</button>
            </div>
        </div>
    );
};
