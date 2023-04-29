import React from "react";

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3>
          {position}&nbsp;<a href={companyLink}>@{company}</a>
        </h3>
        <span>
          {time} | {address}
        </span>
        <p>{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div className="w-[75%] mx-auto relative">
        <ul>
          <Details
          position="Back-End Developer" company="RB&W"
          time="January 2020 - April 2020"
          address="Brampton, ON"
          work="Developed API using Java and Spring. Test API using Postman, curl, and Junit"
          />
          </ul>
      </div>
    </div>
  );
};

export default Experience;
