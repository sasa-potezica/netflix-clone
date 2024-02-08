import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";

function Main() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data);
    });
  }, []);
  return <div>Main</div>;
}

export default Main;
