import {
  Card,
  CardBody,
  Stack,
  Heading,
  Image,
  HStack,
} from '@chakra-ui/react';
import data from '../data/data';
import { useNavigate } from 'react-router-dom';

function Users() {
  const navigate = useNavigate();
  return (
    <HStack m={5}>
      {data.map((d) => {
        return (
          <Card
            key={d.id}
            onClick={() => navigate(`/user/${d.id}`)}
            cursor={'pointer'}
          >
            <CardBody>
              <Image h={'300px'} src={d.image} borderRadius='lg' />
              <Stack mt='6' spacing='3'>
                <Heading color={'blue.700'} size='md'>
                  {d.name}
                </Heading>
              </Stack>
            </CardBody>
          </Card>
        );
      })}
    </HStack>
  );
}

export default Users;
