import Image from "next/image";
import styles from '@/styles/home.module.css';
import blogsData from "./mockData/blogs";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <div className="h-[155px] relative">
        <Image
          src="/homePage.svg"
          alt="web img"
          className="transform scale-y-[-1]"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="mt-[2.5rem] px-1rem md:px-[7rem]">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <span className={`sm:col-span-6 ${styles.homeText}`}>
            Atlas Premier Knowledge Blogs:
          </span>
          <span className="mt-2 sm:mt-0 sm:ml-4 font-medium leading-48px text-2xl md:text-3xl tracking-[1%]" style={{ color: "#667085" }}>
            Immerse yourself in the latest knowledge and research from our team of software engineers and design professionals.
          </span>
        </div>
      </div>
      <div className="mt-[2rem] px-1rem md:px-[7rem] h-[55vh]">
        <div className={`flex flex-col sm:flex-row rounded-3xl shadow-md gap-20 ${styles.imgDiv}`}>
          <div className="sm:w-1/2">
            <Image
              src="/MacBook.svg"
              alt="web img"
              layout="responsive"
              width={500}
              height={500}
              className="rounded-tr rounded-br rounded-3xl"
            />
          </div>
          <div className="grid sm:w-1/2 gap-4">
            <span className="font-medium text-sm flex items-center leading-30px tracking-[1%]" style={{ color: "#667085" }}>
              FREELANCING 101
              <Image
                src="/dot.svg"
                alt="web img"
                width={8}
                height={8}
                className="mx-3"
                objectFit="cover"
              />Joseph Patrick
            </span>
            <div className="w-full">
              <span className="font-medium text-3xl flex mb-2" style={{ color: "#344054" }}>
                07 Ways to get  {' '}
              </span>
              <span className="font-medium text-3xl flex mb-2" style={{ color: "#344054" }}>
                Consistent Clients from {' '}
              </span>
              <span className="font-medium text-3xl" style={{ color: "#344054" }}>
                Social Media
              </span>
            </div>
            <span className="font-medium text-sm flex items-center leading-30px tracking-[1%]" style={{ color: "#667085" }}>
              15 Min Read
              <Image
                src="/dot.svg"
                alt="web img"
                width={8}
                height={8}
                className="mx-3"
                objectFit="cover"
              />23 - 05 - 2023
            </span>
          </div>
        </div>
      </div>
      <div className="h-[155px] relative bottom-[2.5rem]">
        <Image
          src="/homePage.svg"
          alt="web img"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="flex justify-between items-center px-[3rem]">
        <div>
          <span className={styles.homeText}>Blogs</span>
        </div>
        <div className="flex gap-7 items-center">
          <span className="text-sm text-blue-800 border border-blue-800 rounded-3xl px-4 py-2" style={{ color: '#294F74', background: '#EDF2F5' }}>All blogs</span>
          <span className="text-sm text-gray-400">Trends</span>
          <span className="text-sm text-gray-400">Research</span>
          <span className="text-sm text-gray-400">In-house Knowledge</span>
        </div>
      </div>
      <div className="mt-[2rem] px-1rem md:px-[3rem] mb-10">
        <div className={`flex flex-col justify-center items-center sm:flex-row rounded-3xl shadow-md gap-20 h-[440px] ${styles.imgDiv}`}>
          <div className="sm:w-1/2 flex ml-5">
            <Image
              src="/facebook.svg"
              alt="web img"
              width={124}
              height={126}
            />
            <Image
              src="/linkedIn.svg"
              alt="web img"
              width={124}
              height={126}
            />
            <Image
              src="/instagram.svg"
              alt="web img"
              width={124}
              height={126}
            />
            <Image
              src="/behance.svg"
              alt="web img"
              width={124}
              height={126}
            />
            <Image
              src="/dribble.svg"
              alt="web img"
              width={124}
              height={126}
            />
          </div>
          <div className="grid sm:w-1/2 gap-4">
            <span className="font-medium text-sm flex items-center leading-30px tracking-[1%]" style={{ color: "#667085" }}>
              FREELANCING 101
              <Image
                src="/dot.svg"
                alt="web img"
                width={8}
                height={8}
                className="mx-3"
                objectFit="cover"
              />Joseph Patrick
            </span>
            <div className="w-full">
              <span className="font-medium text-3xl flex mb-2" style={{ color: "#344054" }}>
                07 Ways to get  {' '}
              </span>
              <span className="font-medium text-3xl flex mb-2" style={{ color: "#344054" }}>
                Consistent Clients from {' '}
              </span>
              <span className="font-medium text-3xl" style={{ color: "#344054" }}>
                Social Media
              </span>
            </div>
            <span className="font-medium text-sm flex items-center leading-30px tracking-[1%]" style={{ color: "#667085" }}>
              15 Min Read
              <Image
                src="/dot.svg"
                alt="web img"
                width={8}
                height={8}
                className="mx-3"
                objectFit="cover"
              />23 - 05 - 2023
            </span>
          </div>
        </div>
      </div>
      {/* blogs data */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-1rem md:px-[3rem] mb-10">
        {blogsData?.map((value, index) => (
          <div key={index} className={`rounded-3xl shadow-md gap-20 ${styles.imgDiv}`}>
            <div className="bg-gradient-to-b from-white to-gray-100">
              {/* <Image
                className="rounded-t-lg items-center w-full h-full object-fill"
                src="/dummy1.svg"
                alt=""
                layout="fill"
              /> */}
            </div>
            <div className="grid p-5 gap-5 h-[261px]">
              <span className="font-medium text-sm flex items-center leading-30px tracking-[1%]" style={{ color: "#667085" }}>{value.tags}</span>
              <span className="text-2xl font-medium" style={{ color: "#344054" }}>{value.title}</span>
              <span className="font-medium text-sm flex items-center leading-30px tracking-[1%]" style={{ color: "#667085" }}>
                {value.readTime}
                <Image
                  src="/dot.svg"
                  alt="web img"
                  width={8}
                  height={8}
                  className="mx-3"
                  objectFit="cover"
                />{value.date}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-2xl h-[650px] md:h-[480px] mx-2 md:mx-[3rem] relative my-20" style={{ background: 'linear-gradient(to bottom, rgba(47, 84, 120, 1), rgba(34, 64, 92, 1))' }}>
        <div className="h-[155px] relative">
          <Image
            src="/homePage.svg"
            alt="web img"
            className="transform scale-y-[-1] rounded-2xl"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 px-20 justify-center items-center">
          <div className="grid gap-3">
            <span className="font-normal text-white text-3xl md:text-5xl">
              Transforming Your {' '}
            </span>
            <span className="font-semibold text-white text-3xl md:text-5xl">
              Ideas into reality
            </span>
            <span className="text-gray-200 text-md mb-[4rem] md:mb-[1px]">
              Lets build something extraordinary together to captivate your audience.
            </span>
          </div>
          <div className="border border-white rounded-full ml-[0%] md:ml-[25%] flex items-center justify-center h-[250px] w-[250px]">
            <span className="text-white text-normal items-center">Lets Work together</span>
          </div>

        </div>
        <div className="h-[70px] relative">
          <Image
            src="/homePage.svg"
            alt="web img"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
            priority
          />
        </div>
      </div>
      {/* footer */}
      <div className="h-[641px] md:h-[680px] relative" style={{ background: 'linear-gradient(to bottom, rgba(47, 84, 120, 1), rgba(34, 64, 92, 1))' }}>
  <div className="rounded-2xl bg-white p-10 md:p-10 absolute top-10 right-5 bottom-10 left-5 md:right-10 md:left-10 flex flex-col justify-between">
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="grid justify-center items-center">
          <span className="text-md font-normal mb-1 text-center md:text-start" style={{ color: "#344054" }}>Say Hello!</span>
          <span className="text-md font-light mb-7 text-center md:text-start" style={{ color: "#344054" }}>Atlaspremier@gmail.com</span>
          <div className={`${styles.footerText} flex mb-20`}>
            <Image src="/instagramIcon.svg" alt="web img" width={40} height={40} />
            <Image src="/facebookIcon.svg" alt="web img" width={40} height={40} />
            <Image src="/twitterIcon.svg" alt="web img" width={40} height={40} />
            <Image src="/linkedInIcon.svg" alt="web img" width={40} height={40} />
          </div>
          <span className="text-md font-light mb-7 text-center md:text-start hidden md:block" style={{ color: "#344054" }}>NewYork, US</span>
        </div>
        <div className="grid grid-cols-2">
          <div className="grid justify-center md:justify-end gap-5">
            <span className="text-md font-light" style={{ color: "#344054" }}>Home</span>
            <span className="text-md font-light" style={{ color: "#344054" }}>About us</span>
            <span className="text-md font-light" style={{ color: "#344054" }}>Work</span>
          </div>
          <div className="grid justify-center md:justify-end">
            <span className="text-md font-light" style={{ color: "#344054" }}>Services</span>
            <span className="text-md font-light" style={{ color: "#344054" }}>Contact us</span>
            <span className="text-md font-light" style={{ color: "#344054" }}></span>
          </div>
        </div>
      </div>
    </div>
    <span className="text-md font-light mb-3 mt-10 text-center md:text-start  block md:hidden" style={{ color: "#344054" }}>NewYork, US</span>
    <span className="text-md font-light mb-7 text-center md:text-start  block md:hidden" style={{ color: "#344054" }}>AtlasPremier. All Rights Reserved</span>
    <div className="flex justify-center">
      <span className="text-6xl md:text-7xl absolute bottom-[-2.5%] lg:text-8xl xl:text-9xl font-semibold flex items-center justify-center" style={{ color: 'rgba(41, 79, 116, 1)' }}>
        Atlas Premier
      </span>
    </div>
  </div>
</div>

    </main>
  );
}
