function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0F] to-[#121420] text-white flex flex-col items-center">
      <header className="w-full flex justify-start px-6 py-4">
        <h1 className="text-3xl font-bold">Profile Page</h1>
      </header>

      <main className="mt-10 text-center">
        <p className="text-gray-400">
          This is the profile page. You’ll be able to see your favorite teams
          and leagues here.
        </p>
      </main>
    </div>
  );
}

export default Profile;
