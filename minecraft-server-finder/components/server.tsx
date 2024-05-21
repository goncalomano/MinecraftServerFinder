import { getServerData } from "@/actions/getServerData";
import { useEffect, useState } from "react";

import { Open_Sans } from 'next/font/google'
 
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

    useEffect(() => {
        const fetchData = async () => {
            const data = await getServerData(serverIP);
            console.log(data);
            setServerName(data?.hostname || "");
            setServerMotd(data?.motd?.html || "");
        };
        fetchData();
    }, [serverIP]);

    return (
        <div className="w-full p-2 bg-slate-200 border-2 border-black rounded-xl shadow-md ">
            <p className={`font-bold text-xl ${openSans.className}`}>{serverName}</p>
            {/* Render serverMotd HTML content */}
            <div className={`${openSans.className}`} dangerouslySetInnerHTML={{ __html: serverMotd }} />
        </div>
    );
};
