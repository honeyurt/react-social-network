import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SettingsSchema, IFormInputs } from '../../utils/schemas/settingsSchema';
import AuthRedirect from '../../hoc/authRedirect';
import {
  getUserProfile,
  getUserStatus,
  updateProfile,
  updateStatus,
  uploadPhoto,
} from '../../redux/actions/profile';

import Button from '../../UI/Button/Button';
import userProfilePagePhoto from '../../assets/img/userProfilePagePhoto.jpg';

import styles from './Settings.module.css';

const Settings = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state: RootState) => state.auth);
  const { profile, status } = useSelector((state: RootState) => state.profile);
  const id = String(userId);

  const [picture, setPicture] = React.useState<File>();
  const [saved, setSaved] = React.useState<Boolean>(false);

  const onChangePicture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (file && file.length > 0) {
      setPicture(file[0]);
      dispatch(uploadPhoto(file[0]));
    }
  };

  const form = useForm<IFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(SettingsSchema),
  });

  const onSubmit = (data: IFormInputs) => {
    if (data.status) dispatch(updateStatus(data.status));

    if (userId) {
      const objData = {
        userId: userId,
        lookingForAJob: data.checkbox,
        lookingForAJobDescription: data.description,
        fullName: data.nickname,
        contacts: {
          github: data.github,
          facebook: data.facebook,
          twitter: data.twitter,
          instagram: data.instagram,
          vk: '',
          website: '',
          youtube: '',
          mainLink: '',
        },
        aboutMe: '',
        photos: { small: '', large: '' },
      };

      if (data.nickname === '' && profile?.fullName) objData.fullName = profile.fullName;
      if (data.description === '' && profile?.lookingForAJobDescription)
        objData.lookingForAJobDescription = profile.lookingForAJobDescription;
      if (data.facebook === '' && profile?.contacts.facebook)
        objData.contacts.facebook = profile.contacts.facebook;
      if (data.github === '' && profile?.contacts.github)
        objData.contacts.github = profile.contacts.github;
      if (data.twitter === '' && profile?.contacts.twitter)
        objData.contacts.twitter = profile.contacts.twitter;
      if (data.instagram === '' && profile?.contacts.instagram)
        objData.contacts.instagram = profile.contacts.instagram;
      if (data.aboutMe === '' && profile?.aboutMe) objData.aboutMe = profile.aboutMe;
      else objData.aboutMe = data.aboutMe;

      dispatch(updateProfile(objData));
      setSaved(true);
    }
  };

  React.useEffect(() => {
    dispatch(getUserProfile(id));
    dispatch(getUserStatus(id));
  }, [dispatch, id]);

  if (!profile) return <div>Loading..</div>;

  return (
    <section className={styles.settings}>
      <div className={styles.settings__title}>
        <h2>Profile Settings</h2>
      </div>
      <div className={styles.settings__photo}>
        <div className={styles.photo__left}>
          <img src={profile.photos.large || userProfilePagePhoto} alt="ProfilePhoto" />
          <span>(prefer 250px 250px)</span>
        </div>
        <div className={styles.photo__right}>
          <label htmlFor="photo-upload" className={styles.file_upload}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
              <path d="M16 16h-3v5h-2v-5h-3l4-4 4 4zm3.479-5.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h3.5v-2h-3.5c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78 3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-3.5v2h3.5c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408z" />
            </svg>
          </label>
          {picture?.name}
          <input
            type="file"
            id="photo-upload"
            accept="image/png, image/jpeg"
            onChange={onChangePicture}
          />
        </div>
      </div>
      <div className={styles.settings__about}>
        <div className={styles.about__form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <h3>Personal information:</h3>
            <label htmlFor="nickname">Nickname:</label>
            <input
              type="text"
              id="nickname"
              placeholder={profile.fullName}
              {...form.register('nickname')}
            />

            <label htmlFor="status">Status:</label>
            <input type="text" id="status" placeholder={status} {...form.register('status')} />

            <label htmlFor="aboutMe">About me:</label>
            <input
              type="text"
              id="aboutMe"
              placeholder={profile.aboutMe}
              {...form.register('aboutMe')}
            />

            <label htmlFor="lookingForAJob">Looking for a job:</label>
            <input
              type="checkbox"
              id="lookingForAJob"
              defaultChecked={profile.lookingForAJob}
              {...form.register('checkbox')}
            />

            <label htmlFor="lookingForAJobDesc">My skills:</label>
            <input
              type="text"
              id="lookingForAJobDesc"
              placeholder={profile.lookingForAJobDescription}
              {...form.register('description')}
            />

            <h3>Contacts:</h3>
            <label htmlFor="facebook">Facebook:</label>
            <input
              type="text"
              id="facebook"
              placeholder={profile.contacts.facebook}
              {...form.register('facebook')}
            />

            <label htmlFor="twitter">Twitter:</label>
            <input
              type="text"
              id="twitter"
              placeholder={profile.contacts.twitter}
              {...form.register('twitter')}
            />

            <label htmlFor="instagram">Instagram:</label>
            <input
              type="text"
              id="instagram"
              placeholder={profile.contacts.instagram}
              {...form.register('instagram')}
            />

            <label htmlFor="github">Github:</label>
            <input
              type="text"
              id="github"
              placeholder={profile.contacts.github}
              {...form.register('github')}
            />

            <div className={styles.about__confirm}>
              <Button type="submit">Save</Button>
            </div>
            <div className={styles.settings__saved}>
              {saved && <p>Settings saved successfully &#10003;</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AuthRedirect(Settings);
