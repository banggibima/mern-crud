import { useEffect } from 'react';

function Error() {
  useEffect(() => {
    document.title = `Error`;
  });

  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="mr-2">
          <a href="/" className="text-3xl font-bold">
            404
          </a>
        </div>
        <div className="ml-2">
          <p className="text-sm ">This page could not be found.</p>
        </div>
      </div>
    </>
  );
}

export default Error;
