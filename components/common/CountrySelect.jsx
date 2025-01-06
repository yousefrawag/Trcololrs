"use client"
import React, { useState } from "react";
import Select from "react-select";
import Flag from "react-world-flags";
import {Countries} from  "@/components/data/Countriesfield"
const customStyles = {
  control: (provided) => ({
    ...provided,
    padding: "5px",
    fontSize: "16px",
    width:"100%",
    border:"none",
    backgroundColor:"none"
    
  }),
  option: (provided, state) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    width:"100%",
   
    color: state.isFocused ? "main" : "#333",
  }),
};

const CountrySelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  const customOptions = Countries.map((country) => ({
    value: country.code,
    label: (
      <div style={{ display: "flex", alignItems: "center", gap: "10px"  }}>
        <Flag code={country.code} style={{ width: "20px", height: "15px" }} />
        {country.label}
      </div>
    ),
  }));

  return (
    <div className="w-full bg-transparent border-b-[1px] border-main rounded-[5px] mb-3">
      <Select
        options={customOptions}
        styles={customStyles}
        value={selectedOption}
        onChange={handleChange}
        placeholder="أختر واجهتك"
        isSearchable
      />
    </div>
  );
};

export default CountrySelect;
