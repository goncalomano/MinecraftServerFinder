"use client"
import { fetchList } from "@/actions/getServerList";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [html , setHtml] = useState("")
  const fetch = async () => {
    await fetchList()
  }
  return (
    <div>
      <h1>Explore Servers</h1>
      <button onClick={fetch} className="btn btn-primary">Find Servers</button>

    </div>
  );
}