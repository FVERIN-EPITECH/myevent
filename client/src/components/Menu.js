import "../styles/Reset.css"
import "../styles/Menu.css"
import { useEffect,useState } from "react";
import { Link } from 'react-router-dom';

function Menu(){
    const [search,setSearch] = useState("");

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearch(value);
    }
    console.log(search)
    return (
        <div className="containerMenu">
            <form>
                <label className="containerMenu__categoryLabel" htmlFor="category">Filtres :</label>
                <input onChange={handleSearch} className="containerMenu__input" type="search" placeholder="Recherche"></input>
                <Link to={`/search/${search}`}>   <button className="containerMenu__button" type="submit">Filtrer</button></Link>
            </form>
        </div>
    )
}

export default Menu;