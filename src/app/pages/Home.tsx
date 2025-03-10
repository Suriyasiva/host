import { HStack, Spinner, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  async function onInit() {
    await new Promise((res) => {
      setTimeout(() => {
        navigate('/users');
        res('success');
      }, 2000);
    });
  }

  useEffect(() => {
    onInit();
  }, []);
  return (
    <HStack mt={20} justifyContent={'center'}>
      <Spinner />
      <Text>Loading users...</Text>
    </HStack>
  );
}

export default Home;
