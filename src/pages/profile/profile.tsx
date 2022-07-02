import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router';
import { FacebookIcon, TwitterIcon, GithubIcon, InstagramIcon } from './icons/';
import { useProfile } from '../../hooks/use-profile';
import { useAuth } from '../../hooks/use-auth';
import { Circles } from 'react-loader-spinner';
import UserPhoto from '../../assets/images/user-photo.jpg';
import styles from './styles.module.css';

type ProfileParams = {
  userId: string;
};

export const Profile = observer(() => {
  const [loading, setLoading] = useState(false);
  const { profile, status, getProfile, getStatus } = useProfile();
  const { authData } = useAuth();
  const { userId } = useParams<ProfileParams>();

  useEffect(() => {
    const userID = userId ?? authData?.id;

    if (userID) {
      setLoading(true);
      Promise.all([getProfile(userID), getStatus(userID)]).then(() => setLoading(false));
    }
  }, [authData?.id, getProfile, getStatus, userId]);

  if (loading || !profile) {
    return <Circles wrapperClass={styles.loader} color="#3498db" width={60} height={60} />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.profileImage}>
        <img src={profile.photos.large || UserPhoto} alt="UserPhoto" />
      </div>
      <div className={styles.profileInfo}>
        <div className={styles.profileName}>{profile.fullName}</div>
        <div className={styles.profileStatus}>{status ? `Status: ${status}` : 'No status.'}</div>
        <div className={styles.profileAbout}>
          {profile.aboutMe ? `About Me: ${profile.aboutMe}` : 'About Me: No.'}
        </div>
        <div className={styles.profileJob}>
          Looking for a job: <span>{profile.lookingForAJob ? 'Yes.' : 'No.'}</span>
        </div>
        <div className={styles.profileSkills}>
          My skills:{' '}
          <span>
            {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'No.'}
          </span>
        </div>
        <div className={styles.profileContacts}>
          <a href={profile.contacts.facebook}>
            <FacebookIcon />
          </a>
          <a href={profile.contacts.twitter}>
            <TwitterIcon />
          </a>
          <a href={profile.contacts.instagram}>
            <InstagramIcon />
          </a>
          <a href={profile.contacts.github}>
            <GithubIcon />
          </a>
        </div>
      </div>
    </div>
  );
});
