import DashboardLayout from "../../layouts/DashboardLayout";

function Settings() {
  return (
    <DashboardLayout>
      <div className="rounded-2xl bg-white p-8 shadow-md">
        <h1 className="text-3xl font-bold text-slate-800">
          Settings
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your account settings and preferences.
        </p>

        <div className="mt-8 space-y-6">

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <h3 className="font-semibold">Dark Mode</h3>
              <p className="text-sm text-slate-500">
                Switch between light and dark theme.
              </p>
            </div>

            <input type="checkbox" />
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <h3 className="font-semibold">Email Notifications</h3>
              <p className="text-sm text-slate-500">
                Receive updates by email.
              </p>
            </div>

            <input type="checkbox" defaultChecked />
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <h3 className="font-semibold">Auto Logout</h3>
              <p className="text-sm text-slate-500">
                Automatically logout after inactivity.
              </p>
            </div>

            <input type="checkbox" />
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}

export default Settings;