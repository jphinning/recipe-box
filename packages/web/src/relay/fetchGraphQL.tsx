import { RequestParameters } from 'relay-runtime/lib/util/RelayConcreteNode';
import { Variables } from 'relay-runtime/lib/util/RelayRuntimeTypes';
import { RootState, store } from '../store/store';

export const fetchGraphQL = async (
  request: RequestParameters,
  variables: Variables,
) => {
  const { token } = (store.getState() as RootState).user;

  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
      'Authorization': token || '',
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });

  const data = await response.json();

  return data;
};
