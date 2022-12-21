import {Input, Button, Box} from "@chakra-ui/react";
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
    console.log({destination})
    const result = await axios.post(`${SERVER_ENDPOINT}/api/url-shortener`, {
      destination
    }).then(res => res.data)
    setShortUrl(result)
  }

  return <Box pos="relative" zIndex="2" backgroundColor="gray">
    <form onSubmit={handleSubmit}>
      <Input
        onChange={(e: any) => setDestination(e.target.value)}
        placeholder={PLACEHOLDER}
      />
      <Button type="submit">Create Short URL</Button>
    </form>
    {shortUrl && (
      <a href={`${SERVER_ENDPOINT}/${shortUrl.shortId}`}>
        CLICK ME
      </a>
    )}
  </Box>
}

export default URLShortenerForm;

