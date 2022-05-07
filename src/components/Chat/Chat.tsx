import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startListening, stopListening } from '../../redux/actions/chat';
import { RootState } from '../../redux/reducers';
import { withAuthRedirect } from '../../hoc/with-auth-redirect';

import Messages from './Messages/Messages';
import AddMessageForm from './AddMessageForm/AddMessageForm';
import Layout from '../../UI/Layout/Layout';

const Chat = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state: RootState) => state.chat);

  React.useEffect(() => {
    dispatch(startListening());

    return () => {
      dispatch(stopListening());
    };
  }, [dispatch]);

  return (
    <Layout>
      <h2>Chat</h2>
      {status === 'error' && alert('Some error occurred. Please refresh the page.')}
      <Messages />
      <AddMessageForm />
    </Layout>
  );
};

export default withAuthRedirect(Chat);
