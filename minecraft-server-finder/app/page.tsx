"use client"
import { fetchList } from "@/actions/getServerList";
import { ServerComponent } from "@/components/server";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [ipArray, setIpArray] = useState([''])
  const fetch = async () => {
    console.log(await fetchList() )
    setIpArray(await fetchList() || [])
  }
  return (
    <div>
      <h1>Explore Servers</h1>
      <button onClick={fetch} className="btn btn-primary">Find Servers</button>
      <div className="w-full flex flex-col gap-4 mt-5">
        {ipArray.map((ip, index) => <ServerComponent key={index} serverIP={ip} />)} 
      </div>
    </div>
  );
}