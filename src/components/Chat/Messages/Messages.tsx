import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';

import styles from './Messages.module.css';
import userProfilePagePhoto from '../../../assets/img/userProfilePagePhoto.jpg';

const Messages = () => {
  const { messages } = useSelector((state: RootState) => state.chat);

  const messagesAnchorRef = React.useRef<HTMLDivElement>(null);
  const [isAutoScroll, setAutoScroll] = React.useState(true);

  const scrollHandler = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const element = event.currentTarget;

    if (element.scrollTop + element.scrollTop >= element.scrollHeight)
      !isAutoScroll && setAutoScroll(true);
    else isAutoScroll && setAutoScroll(false);
  };

  React.useEffect(() => {
    if (isAutoScroll)
      messagesAnchorRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }, [messages, isAutoScroll]);

  return (
    <div className={styles.messages} onScroll={scrollHandler}>
      {messages.map(({ message, photo, userName }, index) =>
        message.length === 0 ? (
          ''
        ) : (
          <div className={styles.message} key={index}>
            <div className={styles.message__left}>
              <img src={photo || userProfilePagePhoto} alt="UserPhoto" />
              <p>{userName}:</p>
            </div>
            <div className={styles.message__right}>
              <p>{message}</p>
            </div>
          </div>
        ),
      )}
      <div ref={messagesAnchorRef}></div>
    </div>
  );
};

export default Messages;
