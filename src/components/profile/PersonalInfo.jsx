import Card from "../ui/Card";

function PersonalInfo({ profile }) {
  return (
    <Card>
      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Personal Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-500">
            Full Name
          </label>

          <div className="rounded-lg border bg-slate-50 p-3">
            {profile.name}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-500">
            Role
          </label>

          <div className="rounded-lg border bg-slate-50 p-3">
            {profile.role}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-500">
            Email
          </label>

          <div className="rounded-lg border bg-slate-50 p-3">
            {profile.email}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-500">
            Phone
          </label>

          <div className="rounded-lg border bg-slate-50 p-3">
            {profile.phone}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-500">
            Department
          </label>

          <div className="rounded-lg border bg-slate-50 p-3">
            {profile.department}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-500">
            Location
          </label>

          <div className="rounded-lg border bg-slate-50 p-3">
            {profile.location}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-semibold text-slate-500">
          Bio
        </label>

        <div className="rounded-lg border bg-slate-50 p-4">
          {profile.bio}
        </div>
      </div>
    </Card>
  );
}

export default PersonalInfo;