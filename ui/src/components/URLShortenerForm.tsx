import {Input, Button, Box, InputGroup} from "@chakra-ui/react";
import axios from 'axios';
import {useState} from "react";
import {SERVER_ENDPOINT} from "../config";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const PLACEHOLDER = 'https://example.com';

const URLShortenerForm = () => {
  const [destination, setDestination] = useState();
  const [shortUrl, setShortUrl] = useState<{
    shortId: string;
  } | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const result = await axios.post(`${SERVER_ENDPOINT}/api/url-shortener`, {
      destination
    }).then(res => res.data);
    setShortUrl(result);
    setCopied(false);
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
      <Box bg="white" w="100%" p={3}>
        <Button colorScheme="green" m={2}>
          <a href={`/${shortUrl.shortId}`}>
            {window.location.origin}/{shortUrl.shortId}
          </a>
        </Button>
        <CopyToClipboard text={`${window.location.origin}/${shortUrl.shortId}`}
                         onCopy={() => setCopied(true)}>
          <Button colorScheme="yellow">{copied ? "Copied" : "Copy!"}</Button>
        </CopyToClipboard>
      </Box>
    )}
  </Box>
}

export default URLShortenerForm;

