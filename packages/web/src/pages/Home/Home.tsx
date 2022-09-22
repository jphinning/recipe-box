import { Box, Divider } from '@mui/material';
import React from 'react';
import { useLazyLoadQuery } from 'react-relay';
import { AllUsers } from './AllUsers';
import { AllUsersQuery } from './__generated__/AllUsersQuery.graphql';

function Home() {
  const resonse = useLazyLoadQuery<AllUsersQuery>(
    AllUsers,
    { first: 5 },
    {
      fetchPolicy: 'network-only',
    },
  );

  const { findAllUsers } = resonse;

  if (!findAllUsers?.edges?.length) return <Box>Nothing</Box>;

  return (
    <>
      <Box>Home</Box>
      {findAllUsers?.edges?.map((edge) => {
        if (!edge?.node) return null;

        return (
          <Box key={edge.node?.id}>
            <Box>id: {edge?.node.id}</Box>
            <Box>email: {edge?.node.email}</Box>
            <Box>fullName: {edge?.node.fullName}</Box>
            <Divider />
          </Box>
        );
      })}
    </>
  );
}

export default Home;
