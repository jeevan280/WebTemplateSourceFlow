'use client';
import Python from '@/svg/Python';
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaRegMoneyBillAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Job {
  id: number;
  title: string;
  location: string;
  salary: string;
  description: string;
  date: string;
  bgColor: string;
  text: string;
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'Software Engineer',
    location: 'London',
    salary: '£65,000',
    description:
      'Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.',
    date: '29/08/2023',
    bgColor: 'bg-[#FCDF69]',
    text: 'text-[#064EA4]',
  },
  {
    id: 2,
    title: 'Software Engineer',
    location: 'London',
    salary: '£65,000',
    description:
      'Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.',
    date: '29/08/2023',
    bgColor: 'bg-[#064EA4]',
    text: 'text-white',
  },
  {
    id: 3,
    title: 'Software Engineer',
    location: 'London',
    salary: '£65,000',
    description:
      'Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.',
    date: '29/08/2023',
    bgColor: 'bg-[#F99D76]',
    text: 'text-black',
  },
  {
    id: 4,
    title: 'Frontend Developer',
    location: 'Manchester',
    salary: '£55,000',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
    date: '30/08/2023',
    bgColor: 'bg-[#FCDF69]',
    text: 'text-[#064EA4]',
  },
  {
    id: 5,
    title: 'Backend Developer',
    location: 'Remote',
    salary: '£70,000',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    date: '01/09/2023',
    bgColor: 'bg-[#064EA4]',
    text: 'text-white',
  },
];

const LatestJobs: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const itemsToShow = 3;

  const handleNext = () => {
    if (!isExpanded && startIndex + itemsToShow < jobs.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!isExpanded && startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const handleViewMore = () => {
    if (startIndex === 0) {
      setIsExpanded(true);
    }
  };

  const handleViewLess = () => {
    setIsExpanded(false);
    setStartIndex(0);
  };

  const arrowsDisabled = isExpanded;
  const viewMoreDisabled = startIndex > 0;
  const displayedJobs = isExpanded ? jobs : jobs.slice(startIndex, startIndex + itemsToShow);

  const pythonIconStyle = 'h-12 w-12 mb-4';

  return (
    <section className="bg-[#D7E7FB] px-4 py-16 sm:px-6">
      <h2 className="mb-10 text-center text-3xl font-bold text-[#0E2152] sm:text-4xl lg:text-5xl">
        Latest Jobs
      </h2>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {displayedJobs.map((job) => (
          <div
            key={job.id}
            className={`flex flex-col justify-between rounded-xl p-8 ${job.bgColor} ${job.text}`}
          >
            <Python className={pythonIconStyle} />

            <h3 className="mt-3 mb-3 text-xl font-bold">{job.title}</h3>

            <div className="mb-3 space-y-1">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt />
                {job.location}
              </p>
              <p className="flex items-center gap-2">
                <FaRegMoneyBillAlt />
                {job.salary}
              </p>
            </div>

            <p className="mb-6 text-sm">{job.description}</p>

            <button className="mb-4 w-full cursor-pointer rounded-[30px] bg-white px-4 py-2 font-semibold text-blue-600 hover:bg-gray-100">
              View this job
            </button>

            <span className="text-xs">Posted on {job.date}</span>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl items-center justify-between px-0 sm:px-6">
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            disabled={arrowsDisabled || startIndex === 0}
            className={`flex h-12 w-12 items-center justify-center rounded-full text-white transition-all ${
              arrowsDisabled || startIndex === 0
                ? 'cursor-not-allowed bg-[#9ab4d6]'
                : 'cursor-pointer bg-[#0E2152] hover:opacity-90'
            }`}
          >
            <FaArrowLeft size={18} />
          </button>

          <button
            onClick={handleNext}
            disabled={arrowsDisabled || startIndex + itemsToShow >= jobs.length}
            className={`flex h-12 w-12 items-center justify-center rounded-full text-white transition-all ${
              arrowsDisabled || startIndex + itemsToShow >= jobs.length
                ? 'cursor-not-allowed bg-[#9ab4d6]'
                : 'cursor-pointer bg-[#0E2152] hover:opacity-90'
            }`}
          >
            <FaArrowRight size={18} />
          </button>
        </div>

        <div>
          {isExpanded ? (
            <button
              onClick={handleViewLess}
              className="cursor-pointer font-semibold text-[#0E2152] transition-opacity hover:opacity-75"
            >
              View less jobs
            </button>
          ) : (
            <button
              onClick={handleViewMore}
              disabled={viewMoreDisabled}
              className={`font-semibold transition-opacity ${
                viewMoreDisabled
                  ? 'cursor-not-allowed text-gray-400'
                  : 'cursor-pointer text-[#0E2152] hover:opacity-75'
              }`}
            >
              View more jobs
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
