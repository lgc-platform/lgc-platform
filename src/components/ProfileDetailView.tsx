import { ProfileDetail } from "./ProfileDetail";

// This file simply grabs the working code from ProfileDetail and shows it.
// It acts as a bridge so your website never sees a blank screen.
export function ProfileDetailView(props: any) {
  return <ProfileDetail {...props} />;
}

export default ProfileDetailView;