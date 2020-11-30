import React from 'react';

export default function SearchBar(props){
    const [searchTerm, setSearchTerm] = React.useState("");

    const {onChange} = props;

    const handleChange = event => {
        setSearchTerm(event.target.value);
        onChange(event.target.value.toLowerCase())
    };
    return (
        <div>
            <input type="text" placeholder="Search"  
            value={searchTerm}  onChange={handleChange}/>
        </div>
    )
}