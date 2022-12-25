import axios from 'axios';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Spinner, Box} from "@chakra-ui/react";
import {SERVER_ENDPOINT} from "../config";

const HandleRedirect = () => {
  const [destination, setDestination] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {shortId} = useParams();

  useEffect(() => {
    const getData = async () => {
      return axios.get(`${SERVER_ENDPOINT}/api/destination/${shortId}`)
        .then(res => setDestination(res.data.destination))
        .catch(err => setError(err))
    }
    getData();
  }, [shortId]);

  useEffect(() => {
    if (!destination) {
      return;
    }
    window.location.replace(destination);
  }, [destination]);

  if (!destination && !error) {
    return (
      <Box
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner/>
      </Box>
    )
  }

  return <p>{error && JSON.stringify(error)}</p>
}

export default HandleRedirect;
