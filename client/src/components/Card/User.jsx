function CardUser({ user }) {
  return (
    <>
      <div className="mt-4">
        <div className="md:grid md:grid-cols-6 md:gap-6">
          <div className="md:mt-0 md:col-span-6">
            <div className="overflow-hidden overflow-x-auto border rounded-lg">
              <div className="px-4 py-4 sm:px-6">
                <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">First Name</p>
                    <p className="mt-1 text-sm">{user.first_name}</p>
                  </div>
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Last Name</p>
                    <p className="mt-1 text-sm">{user.last_name}</p>
                  </div>
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Email</p>
                    <p className="mt-1 text-sm">{user.email}</p>
                  </div>
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Username</p>
                    <p className="mt-1 text-sm">{user.username}</p>
                  </div>
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Mobile</p>
                    <p className="mt-1 text-sm">{user.mobile}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardUser;
