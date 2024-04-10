import clsx from 'clsx';

import QuoteIcon from '@/svgs/pages/enterprise/testimonials.inline.svg';

interface TestimonialProps {
  className: string;
  quote: string;
  name: string;
  position: string;
}

function Testimonial({ className = '', quote, name, position }: TestimonialProps) {
  return <div className={clsx('testimonial safe-paddings', className)}>
    <figure className="mx-auto flex max-w-[703px] flex-col items-center text-center">
      <h2 className="text-40 font-medium leading-dense tracking-tight">They speak for us</h2>
      <blockquote className="mt-[48px] ">
        <p className="text-28 font-light leading-normal tracking-tight">{quote}</p>
      </blockquote>

      <div className="mt-8 flex items-center gap-x-4 text-start leading-tight text-white">
        <QuoteIcon className="h-[36px] w-[36px]" width={72} height={72} aria-hidden />
        <div className="flex flex-col gap-y-0.5">
          <p className="text-16 leading-snug">{name}</p>
          <figcaption className="text-14 font-light not-italic leading-snug text-grey-70">
            {position}
          </figcaption>
        </div>
      </div>
    </figure>
  </div>
}

export default Testimonial;
