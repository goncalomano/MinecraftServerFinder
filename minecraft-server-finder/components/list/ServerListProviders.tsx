"use client"
import React, { createContext, useState } from 'react';

// Define the type for the context
type ServerListContextType = {
  serverList: string[];
  addToServerList: (ip: string) => void;
  removeFromServerList: (index: number) => void;
};

// Create an interface for the props
interface ServerListProviderProps {
  children: React.ReactNode;
}

const ServerListContext = createContext<ServerListContextType>({
  serverList: [],
  addToServerList: () => {},
  removeFromServerList: () => {},
});

export const ServerListProvider: React.FC<ServerListProviderProps> = ({ children }) => {
  const [serverList, setServerList] = useState<string[]>([]);

  const addToServerList = (ip: string) => {
    if (!serverList.includes(ip)) {
        console.log("Adding to server list", ip)
        setServerList([...serverList, ip]);
    } else {
        console.log("Server already exists in the list", ip)
    }
};

  const removeFromServerList = (index: number) => {
    const newServerList = [...serverList];
    newServerList.splice(index, 1);
    setServerList(newServerList);
  };

  return (
    <ServerListContext.Provider value={{ serverList, addToServerList, removeFromServerList }}>
      {children}
    </ServerListContext.Provider>
  );
};

export default ServerListContext;