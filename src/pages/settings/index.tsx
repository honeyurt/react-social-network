import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { withAuthRedirect } from '../../hoc/with-auth-redirect';
import { useAuth } from '../../hooks/use-auth';
import { useProfile } from '../../hooks/use-profile';
import { PageLayout } from '../../components/page-layout';
import { SettingsForm } from './settings-form';
import { Spinner } from '../../components/spinner';
import { UploadPhotoIcon } from './icons/upload-photo-icon';
import UserPhoto from '../../assets/images/user-photo.jpg';
import styles from './styles.module.css';

const SettingsPageView = observer(() => {
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const { authData } = useAuth();
  const { getProfile, getStatus, profile, uploadPhoto, status } = useProfile();

  const handleChangePicture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;

    if (file && file.length > 0) {
      setUploading(true);
      uploadPhoto(file[0]).finally(() => setUploading(false));
    }
  };

  useEffect(() => {
    if (authData?.id) {
      const userId = authData.id.toString();
      setLoading(true);
      Promise.all([getProfile(userId), getStatus(userId)]).then(() => setLoading(false));
    }
  }, [authData, authData?.id, getProfile, getStatus]);

  if (loading || !profile) {
    return <Spinner />;
  }

  return (
    <PageLayout title="Profile Settings">
      <div className={styles.settingsPhoto}>
        <div className={styles.photoLeft}>
          <img src={profile.photos.large || UserPhoto} alt="UserPhoto" />
          <span>(prefer 250px 250px)</span>
        </div>
        <div className={styles.photoRight}>
          <label htmlFor="photo-upload" className={styles.fileUpload}>
            <UploadPhotoIcon />
          </label>

          {uploading && (
            <div className={styles.upload}>
              <Spinner />
            </div>
          )}

          <input
            type="file"
            id="photo-upload"
            accept="image/png, image/jpeg"
            onChange={handleChangePicture}
          />
        </div>
      </div>
      <div className={styles.settingsAbout}>
        <SettingsForm profile={profile} status={status} />
      </div>
    </PageLayout>
  );
});

export const SettingsPage = withAuthRedirect(SettingsPageView);
