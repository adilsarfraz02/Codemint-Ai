import axios from 'axios';

export default async function storeHistory(textPrompt, imageUrl) {
  const url = 'https://api.openai.com/v1/images/generations ';
  const data = {
    textPrompt: textPrompt,
    imageUrl: imageUrl,
  };
  await axios.post(url, data);
}