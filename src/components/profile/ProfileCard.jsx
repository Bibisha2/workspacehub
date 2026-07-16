import Card from "../ui/Card";

function ProfileCard({ profile }) {
  return (
    <Card>
      <div className="flex flex-col items-center">

        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-blue-600 text-5xl font-bold text-white">
          {profile.name.charAt(0)}
        </div>

        <h2 className="mt-5 text-3xl font-bold">
          {profile.name}
        </h2>

        <p className="mt-2 text-slate-500">
          {profile.role}
        </p>

      </div>
    </Card>
  );
}

export default ProfileCard;