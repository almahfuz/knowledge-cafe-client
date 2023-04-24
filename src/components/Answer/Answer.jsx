import React from "react";

const Answer = () => {
  return (
    <div>
      <div className=" p-3 bg-white rounded-xl mt-2">
        <div className="text-sm">
          <div className="bg-slate-200 text-sm p-6 w-fit border m-4 rounded-xl">
            <span className="font-semibold">
              Question: Difference between Props vs States?
            </span>
            <br />
            <span>
              Answers: The component itself modifies the local state that it
              owns. An owner of the props has read-only access to them.
            </span>
            <br /> <br />
            <span className="font-semibold">
              Question: How does useState work?
            </span>
            <br />
            <span>
              Answers: UseState is a React Hook.This hook enables the creation,
              monitoring, and updating of states in functional components.
            </span>
            <br /> <br />
            <span className="font-semibold">
              Question: Purpose of useEffect other than fetching data.
            </span>
            <br />
            <span>
              Answers: The useEffect function in react js allows you to perform
              side effects in your components. Side effects in react include
              data retrieval, direct DOM modifications, and timers. Optional:
              The second parameter.
            </span>
            <br /> <br />
            <span className="font-semibold">
              Question: How Does React work?
            </span>
            <br />
            <span>
              Answers: The UI is separated into independent, reusable code
              snippets called components by ReactJS. Because they take arbitrary
              inputs called properties or props, React components perform
              similarly to JavaScript functions.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;
