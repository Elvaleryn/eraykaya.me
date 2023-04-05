import React from "react";
import cx from "classnames";
const Loading = () => {
  // You can add any UI inside Loading, including a Skeleton.
  // create array with 10 items

  return new Array(10).fill(0).map((_, i) => (
    <div
      key={i}
      className={cx(
        "bg-primary-content",
        "w-full",
        "rounded-2xl border border-primary-900",
        "p-8",
        "mb-8"
      )}
    >
      <div role="status" className="w-full animate-pulse">
        <div className="h-2 rounded-full bg-gray-700 w-10 mb-8"></div>
        <div className="h-8  rounded-full bg-gray-700 w-full mb-8"></div>
        <div className="h-4  rounded-full bg-gray-700 mb-4"></div>
        <div className="h-4  rounded-full bg-gray-700 mb-8"></div>

        <div className="h-3  rounded-full bg-gray-700 max-w-[33%]"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ));
};

export default Loading;
