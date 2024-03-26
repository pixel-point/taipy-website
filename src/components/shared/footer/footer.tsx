import Image from 'next/image';

import { MENU } from '@/constants/menu';
import { ROUTE } from '@/constants/routes';

import Link from '@/components/shared/link';

import logo from '@/svgs/logo.svg';

function Footer() {
  return (
    <footer className="relative bg-[linear-gradient(89.86deg,rgba(41,41,45,0.6)_-34.54%,rgba(19,19,21,0)_104.53%)] pt-16 px-safe pb-safe-or-12 before:absolute before:-top-px before:left-0 before:h-px before:w-full before:bg-[linear-gradient(90deg,#383839_4%,#5D2822_16%,#1E1E21_30%,#151517_54.82%)] lg:pt-12 lg:pb-safe-or-10 lg:before:bg-[linear-gradient(90deg,#383839_-7.32%,#5D2822_5.12%,#1E1E21_18.94%,#151517_48.93%)]">
      <div className="container">
        <div className="flex items-start justify-between">
          <Link href="/">
            <span className="sr-only">Taipy</span>
            <Image className="h-7" src={logo} width={109} height={28} alt="Taipy logo" />
          </Link>
          <nav className="flex gap-x-[106px] lg:mr-[58px] lg:w-full lg:max-w-[582px] lg:justify-between lg:gap-x-0">
            {MENU.footer.main.map(({ title, items }, index) => (
              <div key={index}>
                <span className="text-16 leading-normal text-[#ADB0B9]">{title}</span>
                <ul className="mt-6 flex flex-col gap-y-3.5">
                  {items.map(({ label, href }, itemIndex) => (
                    <li key={itemIndex}>
                      <Link href={href} size="md">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-[140px] flex items-end justify-between lg:mt-[89px]">
          <div className="flex gap-x-6">
            {MENU.footer.social.map(({ href, icon: Icon }, index) => (
              <Link href={href} key={index}>
                <Icon className="h-5 w-5 fill-white hover:fill-grey-90" />
              </Link>
            ))}
          </div>

          <Link
            className="ml-[-54px] font-medium lg:ml-[-280px]"
            size="sm"
            theme="grey"
            href={ROUTE.PRIVACY}
          >
            Privacy
          </Link>

          <p className="text-right text-14 font-medium leading-snugger text-white/40">
            © {new Date().getFullYear()} — Copyright
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
