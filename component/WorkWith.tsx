'use client';
import ATLASSIAN from '@/svg/ATLASSIAN';
import CLOUDFLARE from '@/svg/CLOUDFLARE';
import Microsoft from '@/svg/Microsoft';
import ORACLE from '@/svg/ORACLE';
import Vmware from '@/svg/vmware';
import { FC } from 'react';

const WorkWith: FC = () => {
  const logos = [Microsoft, ORACLE, ATLASSIAN, CLOUDFLARE, Vmware];

  const LogoComponentStyle = 'h-8 sm:h-10 md:h-12 lg:h-14 w-auto max-w-full';

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-8 text-lg font-bold text-gray-500">Who we work with</p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 sm:gap-x-12 sm:gap-y-12">
          {logos.map((Logo, index) => (
            <div
              key={index}
              className="flex max-w-[150px] min-w-[100px] flex-shrink-0 items-center justify-center sm:max-w-[200px]"
            >
              <Logo className={LogoComponentStyle} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkWith;
