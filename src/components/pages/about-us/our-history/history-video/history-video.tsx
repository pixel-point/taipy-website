import Image from 'next/image';

import PlayIcon from '@/svgs/pages/about-us/play.svg';

export default function HistoryVideo() {
  return (
    <div className="flex h-[348px] w-full items-center justify-center rounded-[8px] bg-grey-99">
      <button
        className="flex w-full max-w-[187px] items-center justify-center gap-3 rounded-[46px] border-2 border-orange-1 bg-orange-5 py-3 text-16 font-medium leading-dense tracking-snug shadow-btn backdrop-blur"
        type="button"
      >
        Watch the video
        <Image src={PlayIcon} width={7} height={8} quality={70} alt=".Play Icon" />
      </button>
    </div>
  );
}
