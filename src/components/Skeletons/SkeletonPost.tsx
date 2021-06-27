import React from "react";

export default function SkeletonPost() {
  return (
    <div>
      <div className="flex lg:items-center flex-col lg:flex-row space-x-0 space-y-3 lg:space-y-0 lg:space-x-3">
        <div className="w-full">
          <div className="flex space-x-3 mb-3">
            <div className="bg-gray-300 animate-pulse rounded-md w-20 h-6"></div>
            <div className="bg-gray-300 animate-pulse rounded-md w-20 h-6"></div>
          </div>
          <div className="font-bold text-xl rounded-lg bg-gray-300 animate-pulse mb-2 w-30 h-8"></div>
          <div className="font-medium text-sm rounded-lg bg-gray-300 text-accent w-60 h-6 animate-pulse"></div>
        </div>
        <div>
          <div className="h-40 md:h-60 w-full lg:h-32 lg:w-60 rounded-lg animate-pulse bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
