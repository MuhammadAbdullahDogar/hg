import React, { useState,useEffect } from "react";
import Autocomplete from '@mui/material/Autocomplete';

import MyTextField from '../styles/MyTextField'

const TagField = ({ suggestions, placeholder, tag, defaultValue }) => {
  const [tags, setTags] = useState(defaultValue ? defaultValue : []);

  const handleTagChange = (event, value) => {
    setTags(value);
  };

  useEffect(() => {
    tag(tags);
  }, [tag, tags]);

  const filterOptions = (options, { inputValue }) => {
    const filteredOptions = suggestions.filter(
      (option) =>
        option.toLowerCase().includes(inputValue.toLowerCase()) &&
        !tags.includes(option) // Exclude tags that are already selected
    );

    return filteredOptions;
  };

  return (
    <Autocomplete
      multiple
      options={suggestions}
      getOptionLabel={(option) => option}
      value={tags}
      onChange={handleTagChange}
      filterOptions={filterOptions}
      getOptionDisabled={(option) => !suggestions.includes(option)}
      renderInput={(params) => (
        <MyTextField {...params} variant="outlined" placeholder={placeholder} />
      )}
    />
  );
};
export default TagField;
