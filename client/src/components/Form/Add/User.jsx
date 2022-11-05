function FormAddUser({ user, handleChange, handleSubmit }) {
  return (
    <>
      <div className="mt-4">
        <div className="md:grid md:grid-cols-6 md:gap-6">
          <div className="md:mt-0 md:col-span-6">
            <div className="overflow-hidden overflow-x-auto border rounded-lg">
              <form onSubmit={handleSubmit}>
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first_name"
                        className="block text-xs font-medium"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={user.first_name}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last_name"
                        className="block text-xs font-medium"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={user.last_name}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="username"
                        className="block text-xs font-medium"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="mobile"
                        className="block text-xs font-medium"
                      >
                        Mobile
                      </label>
                      <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        value={user.mobile}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 border-t text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-3 py-2 rounded-lg border text-sm font-medium hover:text-zinc-600 hover:bg-zinc-100 focus:outline-none focus:ring-transparent sm:w-auto"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormAddUser;
