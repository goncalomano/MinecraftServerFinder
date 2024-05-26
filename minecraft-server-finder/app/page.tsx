'use client';

import { fetchList } from "@/actions/getServerList";
import ServerListContext from "@/components/list/ServerListProviders";
import { ServerComponent } from "@/components/server";
import { useContext, useState } from "react";
import nbt from 'prismarine-nbt';

export default function Home() {
  const { serverList, addToServerList, removeFromServerList } = useContext(ServerListContext);
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const [ipArray, setIpArray] = useState([]);
  const fetchServers = async () => {
    const fetchedList = await fetchList(selectedCountry) || [];
    setIpArray(fetchedList.filter(ip => ip)); // Filter out empty strings
  };

  const handleGenerate = async () => {
    const serversNBT = {
      name: '',
      type: 'compound',
      value: {
        servers: {
          type: 'list',
          value: {
            type: 'compound',
            value: serverList.map(ip => ({
              ip: { type: 'string', value: ip },
              name: { type: 'string', value: ip },
              acceptTextures: { type: 'byte', value: 1 },
            })),
          },
        },
      },
    };

    const nbtBuffer = await nbt.writeUncompressed(serversNBT);
    const blob = new Blob([nbtBuffer], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);

    // Create a link element
    const a = document.createElement('a');
    a.href = url;
    a.download = 'servers.dat';

    // Append the link to the body
    document.body.appendChild(a);

    // Programmatically click the link to download the file
    a.click();

    // Remove the link from the body
    document.body.removeChild(a);
  };

  return (
    <div>
      <h1>Explore Servers</h1>
      <div className="flex gap-5">
        <div className="flex flex-col items-start">
          <p>Choose a country</p>
          <select className="border-black border-2" name="minecraft-servers" id="country-select" onChange={handleChange}>
            <option value="">Select a country</option>
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
        <button onClick={fetchServers} className="btn btn-primary">Find Servers</button>
        {serverList.length > 0 && (
          <button onClick={handleGenerate} className="btn btn-primary">Export servers.dat</button>
        )}
      </div>
      <p>Server List</p>
      <div className="flex flex-col gap-3">
        {serverList.map((server, index) => (
          <div key={index} className="w-full p-2 bg-slate-200 border-2 border-black rounded-xl shadow-md flex justify-between">
            <div className="flex flex-col gap-2 w-1/2">
              <p className="font-bold text-2xl">{server}</p>
            </div>
            <div className="flex flex-col gap-2 w-1/2 items-end">
              <button onClick={() => removeFromServerList(index)} className="bg-red-300 font-bold text-white px-4 py-2 rounded-lg">Remove from list</button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col gap-4 mt-5">
        {ipArray.length > 0 && ipArray.map((ip, index) => (
          ip && <ServerComponent key={index} serverIP={ip} />
        ))}
      </div>
    </div>
  );
}
