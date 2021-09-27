import React from 'react';
import { useEffect, useState } from "react";

function Profil() {
    const [datas, setDatas] = useState(null);
    useEffect(() => {
      fetch("http://localhost:5500/profil")
        .then(res => res.json())
        .then(
          (response) => {
            setDatas(response);
          }
        )
    }, )
    console.log(datas)

    return (
        <div>

        </div>
    );
}

export default Profil;