import { Link } from 'react-router-dom';

function TableUser({ users, deleteUser }) {
  return (
    <>
      <div className="mt-4">
        <div className="md:grid md:grid-cols-6 md:gap-6">
          <div className="md:mt-0 md:col-span-6">
            <div className="overflow-hidden overflow-x-auto border rounded-lg">
              <table className="min-w-full divide-y">
                {users.length > 0 ? (
                  <thead className="">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium"
                      >
                        First Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium"
                      >
                        Last Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium"
                      >
                        Username
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium"
                      >
                        Mobile
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Action</span>
                      </th>
                    </tr>
                  </thead>
                ) : (
                  <></>
                )}
                <tbody className="divide-y">
                  {users.length > 0 ? (
                    users.map((user) => (
                      <tr key={user.id}>
                        <td className="whitespace-nowrap px-4 py-2 text-sm">
                          {user.first_name}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-sm">
                          {user.last_name}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-sm">
                          {user.email}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-sm">
                          {user.username}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-sm">
                          {user.mobile}
                        </td>
                        <td className="relative whitespace-nowrap pl-3 pr-4 text-right text-xs sm:pr-6">
                          <Link
                            to={`/user/info/${user.id}`}
                            className="ml-1 px-2 py-1 rounded-lg border text-xs font-medium hover:text-zinc-600 hover:bg-zinc-100 focus:outline-none focus:ring-transparent"
                          >
                            Info
                          </Link>
                          <button
                            onClick={() => deleteUser(user.id)}
                            className="ml-1 px-2 py-1 rounded-lg border text-xs font-medium hover:text-rose-600 hover:bg-rose-100 focus:outline-none focus:ring-transparent"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-700">
                        Empty users data
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableUser;
