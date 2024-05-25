"use client"
import { fetchList } from "@/actions/getServerList";
import { ServerComponent } from "@/components/server";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleChange = (event: any) => {
    setSelectedCountry(event.target.value);
  };


  const [ipArray, setIpArray] = useState([''])
  const fetch = async () => {
    setIpArray(await fetchList(selectedCountry) || [])
  }
  return (
    <div>
      <h1>Explore Servers</h1>
      <div className="flex gap-5">

        <div className="flex flex-col items-start">
          <p>Choose a country</p>
          <select className="border-black border-2" name="minecraft-servers" id="country-select" onChange={(e) => { handleChange(e) }}>
            <option value="albania">Albania</option>
            <option value="andorra">Andorra</option>
            <option value="argentina">Argentina</option>
            <option value="australia">Australia</option>
            <option value="austria">Austria</option>
            <option value="belarus">Belarus</option>
            <option value="belgium">Belgium</option>
            <option value="bosnia-and-herzegovina">Bosnia and Herzegovina</option>
            <option value="brazil">Brazil</option>
            <option value="bulgaria">Bulgaria</option>
            <option value="canada">Canada</option>
            <option value="chile">Chile</option>
            <option value="china">China</option>
            <option value="colombia">Colombia</option>
            <option value="croatia">Croatia</option>
            <option value="czech-republic">Czech Republic</option>
            <option value="denmark">Denmark</option>
            <option value="el-salvador">El Salvador</option>
            <option value="estonia">Estonia</option>
            <option value="europe">Europe</option>
            <option value="finland">Finland</option>
            <option value="france">France</option>
            <option value="gambia">Gambia</option>
            <option value="georgia">Georgia</option>
            <option value="germany">Germany</option>
            <option value="greece">Greece</option>
            <option value="hong-kong">Hong Kong</option>
            <option value="hungary">Hungary</option>
            <option value="india">India</option>
            <option value="indonesia">Indonesia</option>
            <option value="iran">Iran</option>
            <option value="ireland">Ireland</option>
            <option value="israel">Israel</option>
            <option value="italy">Italy</option>
            <option value="japan">Japan</option>
            <option value="kazakhstan">Kazakhstan</option>
            <option value="latvia">Latvia</option>
            <option value="lithuania">Lithuania</option>
            <option value="malaysia">Malaysia</option>
            <option value="mexico">Mexico</option>
            <option value="moldova">Moldova</option>
            <option value="morocco">Morocco</option>
            <option value="namibia">Namibia</option>
            <option value="netherlands">Netherlands</option>
            <option value="new-zealand">New Zealand</option>
            <option value="nicaragua">Nicaragua</option>
            <option value="niger">Niger</option>
            <option value="norway">Norway</option>
            <option value="pakistan">Pakistan</option>
            <option value="panama">Panama</option>
            <option value="paraguay">Paraguay</option>
            <option value="peru">Peru</option>
            <option value="philippines">Philippines</option>
            <option value="poland">Poland</option>
            <option value="portugal">Portugal</option>
            <option value="puerto-rico">Puerto Rico</option>
            <option value="romania">Romania</option>
            <option value="russia">Russia</option>
            <option value="saudi-arabia">Saudi Arabia</option>
            <option value="serbia">Serbia</option>
            <option value="singapore">Singapore</option>
            <option value="slovakia">Slovakia</option>
            <option value="slovenia">Slovenia</option>
            <option value="south-africa">South Africa</option>
            <option value="south-korea">South Korea</option>
            <option value="spain">Spain</option>
            <option value="sri-lanka">Sri Lanka</option>
            <option value="sweden">Sweden</option>
            <option value="switzerland">Switzerland</option>
            <option value="taiwan">Taiwan</option>
            <option value="thailand">Thailand</option>
            <option value="turkey">Turkey</option>
            <option value="ukraine">Ukraine</option>
            <option value="united-kingdom">United Kingdom</option>
            <option value="united-states">United States</option>
            <option value="uruguay">Uruguay</option>
            <option value="uganda">Uganda</option>
            <option value="vietnam">Vietnam</option>
          </select>
        </div>
        <button onClick={fetch} className="btn btn-primary">Find Servers</button>
      </div>
      <div className="w-full flex flex-col gap-4 mt-5">
        {ipArray.map((ip, index) => <ServerComponent key={index} serverIP={ip} />)}
      </div>
    </div>
  );
}