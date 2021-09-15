import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH, faPlus } from "@fortawesome/free-solid-svg-icons";
import InstallToolsCard from "./installedcard";
import { tools } from "../../data/tools.data";
import { useHistory } from "react-router-dom";
import FilterBar from './FilterBar';

const InstalledTools = () => {
  const [show, setShow] = useState(false)


  const history = useHistory();

  const handleClick = () => {
    history.push("/tools");
  };
  return (
    <div className="flex flex-col mb-4">
      <div className="flex mb-3">
        <div className="flex-1 font-bold ">Installed Tools</div>
        <div className="flex space-x-2">
          <div>
          </div>
          <div className="block mx-6">
          {
            show === false ? <button onClick={() => setShow(true)} >Filter <FontAwesomeIcon icon={faSlidersH} className="" /></button> :
            <FilterBar />
          } 
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {tools &&
          tools
            .filter((tol) => tol.installed === true)
            .map(({ name, image, description, linkName }) => {
              return (
                <InstallToolsCard
                  key={name}
                  name={name}
                  image={image}
                  description={description}
                  linkName={linkName}
                />
              );
            })}
        <div className="flex cursor-pointer">
          <div
            className="flex items-center justify-center w-full p-4 space-x-3 bg-gray-300 border-2 border-dashed rounded-xl "
            onClick={handleClick}
          >
            <div>
              <FontAwesomeIcon icon={faPlus} className="text-gray-400" />
            </div>
            <div className="">Add Tools</div>
          </div>
        </div>
        {/* <div>
          <div className="flex cursor-pointer">
            <div
              className="flex items-center justify-center w-2/3 p-4 space-x-3 bg-gray-300 border-2 border-dashed lg:w-full rounded-xl "
              onClick={handleClick}
            >
              <div>
                <FontAwesomeIcon icon={faPlus} className="text-gray-400" />
              </div>
              <div className="">Add Tools</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default InstalledTools;
