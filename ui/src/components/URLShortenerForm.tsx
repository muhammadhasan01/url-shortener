import {Input, Button, Box, InputGroup} from "@chakra-ui/react";
import axios from 'axios';
import {useState} from "react";
import {SERVER_ENDPOINT} from "../config";

const PLACEHOLDER = 'https://example.com';

const URLShortenerForm = () => {
  const [destination, setDestination] = useState();
  const [shortUrl, setShortUrl] = useState<{
    shortId: string;
  } | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const result = await axios.post(`${SERVER_ENDPOINT}/api/url-shortener`, {
      destination
    }).then(res => res.data)
    setShortUrl(result)
  }

  return <Box pos="relative" zIndex="2" backgroundColor="white">
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          onChange={(e: any) => setDestination(e.target.value)}
          placeholder={PLACEHOLDER}
        />
        <Button type="submit">CREATE</Button>
      </InputGroup>
    </form>
    {shortUrl && (
      <a href={`${SERVER_ENDPOINT}/${shortUrl.shortId}`}>
        CLICK ME
      </a>
    )}
  </Box>
}

export default URLShortenerForm;

