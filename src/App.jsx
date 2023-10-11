import carImg from './assets/image-header-desktop.jpg'
import cardMobile from './assets/image-header-mobile.jpg'
function App() {
  return (
    <main className="flex justify-center items-center h-full">
      <article className="flex px-6 lg:px-4 flex-col-reverse lg:flex-row">
        <aside className="bg-card-background  rounded-l-xl p-10 pt-10 lg:pt-[3.6rem] md:p-10 lg:p-16 xl:p-[4.5rem] max-w-[576px] flex flex-col items-center xl:pb-14">
          <h1 className="text-[1.65rem] leading-[2rem] lg:text-[2.2rem] font-semibold text-wrap[balance] lg:leading-[2.8rem] lg:pl-1 [letter-spacing:.5px] text-center lg:text-left">
            Get <span className="text-soft-violet">insights</span> that help your business grow.
          </h1>
          <p className="text-center lg:text-left text-[.92rem] leading-6 lg:text-[.94rem] text-stat-headings lg:pl-1 mt-[1rem] lg:mt-6 lg:w-[90%] lg:mr-auto lg:leading-[1.55rem]">
            Discover the benefits of data analytics and make better decisions regarding revenue,
            customer experience, and overall efficiency.
          </p>
          <div className="mt-9 mb-2 flex flex-col md:flex-row justify-between gap-[1.5rem] lg:items-end flex-grow lg:pl-1 lg:w-[82%] lg:mr-auto">
            <div className="text-center lg:text-left">
              <p className="text-[1.45rem] lg:text-2xl font-[600] pb-1">10k+</p>
              <p className="uppercase text-xs text-stat-headings font-lexend [letter-spacing:.8px]">
                companies
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-[1.4rem] lg:text-2xl font-bold pb-1">314</p>
              <p className="uppercase text-xs text-stat-headings font-lexend [letter-spacing:.8px]">
                templates
              </p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-[1.4rem] lg:text-2xl font-bold pb-1 uppercase">12m+</p>
              <p className="uppercase text-xs text-stat-headings font-lexend [letter-spacing:.8px]">
                queries
              </p>
            </div>
          </div>
        </aside>
        <figcaption className="relative">
          <div className="bg-[#b956ff] opacity-60 brightness-50 contrast-125 absolute w-full h-full lg:rounded-r-lg"></div>
          <img
            className="max-w-[576px] lg:w-full lg:hidden block rounded-t-lg"
            src={cardMobile}
            alt="Hero ofthe card"
          />
          <img
            className="lg:rounded-r-lg max-w-[576px] hidden lg:block"
            src={carImg}
            alt="Hero ofthe card"
          />
        </figcaption>
      </article>
    </main>
  )
}

export default App
