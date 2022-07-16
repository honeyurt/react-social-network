import React, { useState } from 'react';
import { Button } from '../../components/button';
import { Spinner } from '../../components/spinner';
import { useProfile } from '../../hooks/use-profile';
import { Profile } from '../../types/profile/';
import { isEmpty } from '../../utils/is-empty';
import styles from './styles.module.css';

type SettingsFormProps = {
  profile: Profile;
  status: string;
};

export const SettingsForm = ({ profile, status }: SettingsFormProps) => {
  const [isSaved, setIsSaved] = useState(false);
  const [nickname, setNickname] = useState('');
  const [about, setAbout] = useState('');
  const [lookingForAJob, setLookingForAJob] = useState(profile.lookingForAJob);
  const [profileStatus, setProfileStatus] = useState('');
  const [skills, setSkills] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [instagram, setInstagram] = useState('');
  const [github, setGithub] = useState('');
  const [loading, setLoading] = useState(false);
  const { updateProfile, updateStatus } = useProfile();

  const handleSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setLoading(true);

    const objData: Profile = {
      userId: profile.userId,
      lookingForAJob: lookingForAJob,
      lookingForAJobDescription: isEmpty(skills) ? profile.lookingForAJobDescription : skills,
      fullName: isEmpty(nickname) ? profile.fullName : nickname,
      contacts: {
        github: isEmpty(github) ? profile.contacts.github : github,
        facebook: isEmpty(facebook) ? profile.contacts.facebook : facebook,
        twitter: isEmpty(twitter) ? profile.contacts.twitter : twitter,
        instagram: isEmpty(instagram) ? profile.contacts.instagram : instagram,
        vk: '',
        website: '',
        youtube: '',
        mainLink: '',
      },
      aboutMe: isEmpty(about) ? profile.aboutMe : about,
      photos: {
        small: '',
        large: '',
      },
    };

    if (profileStatus) {
      Promise.all([updateProfile(objData), updateStatus(profileStatus)]).then(() => {
        setLoading(false);
        setIsSaved(true);
      });
    } else {
      Promise.all([updateProfile(objData)]).then(() => {
        setLoading(false);
        setIsSaved(true);
      });
    }
  };

  return (
    <div className={styles.aboutForm}>
      <form>
        <h3>Personal information:</h3>
        <label htmlFor="nickname">Nickname:</label>
        <input
          onChange={(e) => setNickname(e.target.value)}
          type="text"
          id="nickname"
          placeholder={profile.fullName}
        />

        <label htmlFor="status">Status:</label>
        <input
          onChange={(e) => setProfileStatus(e.target.value)}
          type="text"
          id="status"
          placeholder={status}
        />

        <label htmlFor="aboutMe">About me:</label>
        <input
          onChange={(e) => setAbout(e.target.value)}
          type="text"
          id="aboutMe"
          placeholder={profile.aboutMe}
        />

        <label htmlFor="lookingForAJob">Looking for a job:</label>
        <input
          className={styles.checkbox}
          type="checkbox"
          id="lookingForAJob"
          checked={lookingForAJob}
          onChange={(e) => setLookingForAJob(e.target.checked)}
        />

        <label htmlFor="lookingForAJobDesc">My skills:</label>
        <input
          type="text"
          id="lookingForAJobDesc"
          placeholder={profile.lookingForAJobDescription}
          onChange={(e) => setSkills(e.target.value)}
        />

        <h3>Contacts:</h3>
        <label htmlFor="facebook">Facebook:</label>
        <input
          onChange={(e) => setFacebook(e.target.value)}
          type="text"
          id="facebook"
          placeholder={profile.contacts.facebook}
        />

        <label htmlFor="twitter">Twitter:</label>
        <input
          onChange={(e) => setTwitter(e.target.value)}
          type="text"
          id="twitter"
          placeholder={profile.contacts.twitter}
        />

        <label htmlFor="instagram">Instagram:</label>
        <input
          onChange={(e) => setInstagram(e.target.value)}
          type="text"
          id="instagram"
          placeholder={profile.contacts.instagram}
        />

        <label htmlFor="github">Github:</label>
        <input
          onChange={(e) => setGithub(e.target.value)}
          type="text"
          id="github"
          placeholder={profile.contacts.github}
        />

        <div className={styles.aboutConfirm}>
          <Button onClick={(e) => handleSave(e)} type="submit">
            Save
          </Button>
        </div>

        <div className={styles.settingsSaved}>
          {loading && <Spinner />}
          {isSaved && <p>Settings saved successfully &#10003;</p>}
        </div>
      </form>
    </div>
  );
};
