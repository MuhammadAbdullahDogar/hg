import React, { useState,useEffect } from "react";
import Autocomplete from '@mui/material/Autocomplete';

import MyTextField from '../styles/MyTextField'

const TagField = ({ suggestions, placeholder,tag }) => {
  const [tags, setTags] = useState([]);

  const handleTagChange = (event, value) => {
    setTags(value);
  };

  useEffect(() => {
    tag(tags)
    // console.log(tags);
  }, [tag,tags])
  

  return (
    <Autocomplete
      multiple
      options={suggestions}
      freeSolo
      getOptionLabel={(option) => option}
      value={tags}
      onChange={handleTagChange}
      renderInput={(params) => (
        <MyTextField
          {...params}
          variant="outlined"
          placeholder={placeholder}
        />
      )}
    />
  );
};

export default TagField;
