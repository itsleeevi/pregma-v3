import React, { useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";

function PageNotFound() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-900  flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="bg-gray-900  relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className=" bg-gray-900 px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="max-w-2xl m-auto mt-16">
              <div className="text-center align-center px-4">
                <h1
                  className="text-custom-100 text-2xl font-bold"
                  data-aos="zoom-in"
                >
                  Coming Soon!
                </h1>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default PageNotFound;
