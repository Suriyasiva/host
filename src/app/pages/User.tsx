import { Box } from '@chakra-ui/react';
import { Suspense, lazy } from 'react';

const UserComponent = lazy(() => import('user/User'));

function User() {
  return (
    <Box>
      <Suspense fallback={<div>Loading...</div>}>
        <UserComponent />
      </Suspense>
    </Box>
  );
}

export default User;
