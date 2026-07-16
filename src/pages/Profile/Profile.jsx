import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import ProfileCard from "../../components/profile/ProfileCard";
import PersonalInfo from "../../components/profile/PersonalInfo";

import { profileData } from "../../data/profile";

function Profile() {
  const [profile] = useState(profileData);

  return (
    <DashboardLayout>
      <div className="grid gap-8 lg:grid-cols-3">
        <div>
          <ProfileCard profile={profile} />
        </div>

        <div className="lg:col-span-2">
          <PersonalInfo profile={profile} />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Profile;