import React from 'react';

export default function SearchBar(props){
    const [searchTerm, setSearchTerm] = React.useState("");

    const {onChange} = props;

    const handleChange = event => {
        setSearchTerm(event.target.value);
        onChange(event.target.value.toLowerCase())
    };
    return (
        <div className="ui category search icon input">
            <input className="prompt " type="text" placeholder="Pokèmon"  
            value={searchTerm}  onChange={handleChange}></input>
            <i className="search icon"></i>
        </div>
    )
}
