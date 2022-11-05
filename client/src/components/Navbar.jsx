import { NavLink } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const navigations = [
    { id: 1, name: 'Home', to: '/' },
    { id: 2, name: 'User', to: '/user' },
    { id: 3, name: 'About', to: '/about' },
  ];

  return (
    <>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="max-w-3xl mx-auto">
              <div className="px-4 sm:px-0 md:px-4 lg:px-4">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="hidden md:block">
                      <div className="flex items-baseline space-x-2">
                        {navigations.map((navigation) => (
                          <NavLink
                            key={navigation.id}
                            to={navigation.to}
                            className={({ isActive }) =>
                              isActive
                                ? 'px-3 py-2 rounded-lg text-sm font-medium border text-zinc-600 bg-zinc-100'
                                : 'px-3 py-2 rounded-lg text-sm font-medium border hover:text-zinc-600 hover:bg-zinc-100'
                            }
                          >
                            {navigation.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex md:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-lg border focus:outline-none focus:ring-transparent">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars4Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="md:hidden">
              <div className="px-4 pt-2 pb-3 sm:px-3">
                <div className="space-y-2">
                  {navigations.map((navigation) => (
                    <NavLink
                      key={navigation.name}
                      to={navigation.to}
                      className={({ isActive }) =>
                        isActive
                          ? 'block px-3 py-2 rounded-lg text-base font-medium border text-zinc-600 bg-zinc-100'
                          : 'block px-3 py-2 rounded-lg text-base font-medium border hover:text-zinc-600 hover:bg-zinc-100'
                      }
                    >
                      {navigation.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default Navbar;
