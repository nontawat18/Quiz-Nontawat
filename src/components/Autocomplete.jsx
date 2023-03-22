import * as React from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from 'axios'


const Autocompletes = () => {

  const [region, setRegion] = React.useState([])
  const getRegion = async () => {
    let response = await axios.get("http://universities.hipolabs.com/search?country=Thailand")
    console.log(response.data)
    setRegion(response.data)
  }
  React.useEffect(() => {
    getRegion()
  }, [])
  return (
      <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={region.map((option) => option.name)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search input"
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />
  );
};

export default Autocompletes;
