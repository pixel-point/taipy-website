'use client';

import Image, { StaticImageData } from 'next/image';

import { useState } from 'react';

import { ROUTE } from '@/constants/routes';
import applicationImage from '@/images/pages/enterprise/designer/application.png';
import pythonImage from '@/images/pages/enterprise/designer/python.png';
import renderingImage from '@/images/pages/enterprise/designer/rendering.png';
import widgetsImage from '@/images/pages/enterprise/designer/widget.png';

import Button from '@/components/shared/button';

import DesignerItem from './designer-item';

interface Feature {
  question: string;
  answer: string;
  image: StaticImageData;
}

const items: Feature[] = [
  {
    question: 'Drag and drop widgets onto the page',
    answer:
      'Instead of traditional insertion methods or programming, users can simply drag and drop widgets from the toolbar or sidebar menu onto the page.',
    image: widgetsImage,
  },
  {
    question: 'Connect the widgets to Python variables',
    answer:
      'Connect widgets to Python variables seamlessly for dynamic interaction and real-time data manipulation with ease.',
    image: pythonImage,
  },
  {
    question: 'Change the visual rendering',
    answer:
      'Enhance visual rendering: Transform display aesthetics for superior user engagement and experience.',
    image: renderingImage,
  },
  {
    question: 'Interact and share your application',
    answer:
      'Interact and share your application: Facilitate seamless collaboration and effortless sharing for enhanced user interaction.',
    image: applicationImage,
  },
];

function Designer() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleItemClick = (index: number) => {
    setOpenIndex(index);
  };

  return (
    <section className="designer mt-[185px] scroll-mt-32 px-safe lg:mt-[154px]" id="designer">
      <div className="container flex max-w-[1280px] flex-col items-center gap-x-16">
        <h2 className="text-48 font-medium leading-dense tracking-tight lg:text-40 lg:font-semibold">
          Taipy Designer features
        </h2>
        <p className="mt-5 max-w-[656px] text-center text-18 leading-snug text-grey-70 lg:text-16 lg:leading-snug">
          Get flexible solutions that fit your environment and give you full control of your
          observability data.
        </p>

        <div className="mt-[54px] flex max-w-[1280px] items-center gap-x-16 lg:mt-[46px]">
          <ul className="basis-1/2">
            {items.map((feature, index) => (
              <DesignerItem
                {...feature}
                key={index}
                index={index}
                isOpen={index === openIndex}
                handleItemClick={() => handleItemClick(index)}
              />
            ))}
          </ul>
          <div className="flex basis-1/2 items-center justify-center lg:pt-4">
            <Image
              src={items[openIndex].image}
              alt={`${items[openIndex].question}-image.jpg`}
              className="max-h-full w-auto rounded-xl"
            />
          </div>
        </div>
        <Button
          className="mt-[70px] w-full max-w-[180px] lg:mt-[51px]"
          size="lg"
          theme="red-filled"
          href={ROUTE.PRICING}
        >
          See our plans
        </Button>
      </div>
    </section>
  );
}

export default Designer;
