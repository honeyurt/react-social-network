import React from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { getUserProfile, getUserStatus } from '../../../redux/actions/profile';

import styles from './ProfileInfo.module.css';

import userProfilePagePhoto from '../../../assets/img/userProfilePagePhoto.jpg';
import UsersPageLoading from '../../../UI/UsersPageLoading';
import { Twitter, Facebook, Instagram } from '@material-ui/icons';

const ProfileInfo = () => {
  const dispatch = useDispatch();
  const { profile, status } = useSelector((state: RootState) => state.profile);
  const { userId } = useParams<{ userId: string }>();

  React.useEffect(() => {
    dispatch(getUserProfile(userId));
    dispatch(getUserStatus(userId));
  }, [dispatch, userId]);

  if (!profile) return <UsersPageLoading />;
  return (
    <div className={styles.profile__top}>
      <div className={styles.profile__image}>
        <img
          src={profile.photos.large ? profile.photos.large : userProfilePagePhoto}
          alt="ProfilePhoto"
        />
      </div>
      <div className={styles.profile__info}>
        <div className={styles.profile__name}>{profile.fullName}</div>
        <div className={styles.profile__status}>{status ? `Status: ${status}` : 'No status.'}</div>
        <div className={styles.profile__job}>
          Looking for a job: <span>{profile.lookingForAJob ? 'Yes.' : 'No.'}</span>
        </div>
        <div className={styles.profile__job_desc}>
          Description:{' '}
          <span>
            {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'No.'}
          </span>
        </div>
        <div className={styles.profile__contacts}>
          <ul>
            <li>
              <a href={profile.contacts.facebook}>
                <Facebook />
              </a>
            </li>
            <li>
              <a href={profile.contacts.twitter}>
                <Twitter />
              </a>
            </li>
            <li>
              <a href={profile.contacts.instagram}>
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
