import Image from "next/image";
import goodClientImg from "../../public/img/wds/clientGood2.png";
import webSiteImg from "../../public/img/wds/webSite.png";
import webAppImg from "../../public/img/wds/webApplication.jpg";
import Link from "next/link";

const title = "text-5xl font-bold py-10 px-10";
const underTitle = "text-3xl font-bold py-3 px-10";
const text = "text-2xl py-3 px-10";
const numberStyle =
  "text-3xl font-bold text-center text-secondaryTextColor bg-numberBG rounded-full border-none w-12 h-12 flex items-center justify-center";

const Article = () => {
  return (
    <div className="layout my-16">
      <div>
        <h1 className={title}>WEB DEVELOPMENT SERVICE</h1>
      </div>
      <div>
        <p className={underTitle}>
          In this article we show how to choose right type of web application
        </p>
      </div>

      <div className="flex justify-between items-center mt-16 px-10">
        <div>
          <Image
            src={goodClientImg}
            alt="goodClient"
            width={600}
            height={400}
          />
        </div>
        <div className="px-10">
          <p className={text} style={{ textAlign: "justify" }}>
            Having an online presence, either on a website or web app, is
            important for any business in today&apos;s digital climate. Most business
            owners would say it&apos;s a necessity.
          </p>
          <p className={text} style={{ textAlign: "justify" }}>
            According to many studies, it takes less than a second for viewers
            to form an opinion about your website. They expect a fast,
            well-designed site that provides a good user experience. It
            encourages them to stay longer and could even convince them to do
            business with your company.
          </p>
        </div>
      </div>
      <div>
        <h2 className={underTitle}>
          Web application and website: what is the difference?
        </h2>
      </div>
      <div>
        <p className={text} style={{ textAlign: "justify" }}>
          Many people wonder — what is the difference between a website and an
          application? At first glance, these two concepts are the same, but the
          differences lie in the internal work with them and the creation of the
          project itself.
        </p>
      </div>
      <h2 className={underTitle}>Website:</h2>
      <div className="flex justify-between items-center px-10">
        <p className={text} style={{ textAlign: "justify" }}>
          This is one or more web pages that show the user informational
          content: articles, videos, pictures, music. As a rule, this data is
          static and the user cannot interact with it, that is, change anything
          on the page. Usually, a site is used to demonstrate products, talk
          about a brand, its history and achievements, publish useful cases and
          articles. Often, authentication is not required here, which means that
          all information is available to every user.
        </p>
        <Image src={webSiteImg} alt="webSiteImg" width={600} height={400} />
      </div>

      <h2 className={underTitle}>Web application:</h2>
      <div className="flex justify-between items-center px-10">
        <Image src={webAppImg} alt="webAppImg" width={300} height={300} />

        <p className={text} style={{ textAlign: "justify" }}>
          A full-fledged program with advanced functionality. In fact, this is
          the same site, only with interactive elements that solve several
          client problems at once. Here he will already be able to interact with
          the content and carry out various manipulations, within acceptable
          limits: add information, communicate with other users, order goods,
          pay for purchases, add or remove products from the basket. Therefore,
          the important point here is to register yourself as a user, and this
          is much more common than with websites.
        </p>
      </div>

      <div className="flex justify-center mt-10">
        <h2 className={underTitle}>Types of web applications</h2>
      </div>

      <p className={text} style={{ textAlign: "justify" }}>
        Now that we have figured out what a web application is, how it works and
        how it differs from a website, let&apos;s look at their types from a
        technical classification point of view:
      </p>
      <div className="flex justify-center my-10">
        <p className={numberStyle}>1</p>
      </div>

      <div className="flex flex-col">
        <p className={text} style={{ textAlign: "justify" }}>
          <span className="text-2xl font-bold">
            SPA (Single Page Application)
          </span>{" "}
          is a single-page interactive application that does not require
          reloading the main page during its operation. Unlike traditional web
          applications, they work faster, since all the application logic is
          implemented in the browser, not on the server.
        </p>
        <p className="text-2xl font-medium px-10">Positive:</p>
        <ul>
          <li>
            <p className={text} style={{ textAlign: "justify" }}>
              <span className="text-2xl underline pr-2">
                User-friendly interface.
              </span>
              It is easier for the user to navigate on one page, when there is
              only one option for movement - down. No additional links will
              distract his attention and will not allow him to get confused
              inside the program.
            </p>
          </li>

          <li>
            <p className={text} style={{ textAlign: "justify" }}>
              <span className="text-2xl underline pr-2">High speed.</span>
              During operation, the application does not update the entire page,
              but only loads the content the user needs. Therefore, it works
              much faster than multi-page sites - a request to the server is
              made once, after which the information on the page is simply
              supplemented.
            </p>
          </li>

          <li>
            <p className={text} style={{ textAlign: "justify" }}>
              <span className="text-2xl underline pr-2">Data caching.</span>
              The cache works in the same way - it is enough to contact the
              server once and it will save all the user&apos;s data. Now the client
              will be able to work in the application even in offline mode.
            </p>
          </li>
        </ul>

        <ul>
          <li>
            <p className="text-2xl font-medium px-10">Negative:</p>
          </li>

          <li>
            <p className={text} style={{ textAlign: "justify" }}>
              <span className="text-2xl underline pr-2">
                Insufficient SEO optimization.
              </span>
              Single-page applications have only one URL that does not change
              during operation, unlike multi-page applications. Therefore, the
              developer can bind only one search query to it. Such sites are
              difficult to optimize for search engines due to the fact that the
              search bot simply will not find additionally loaded information.
            </p>
          </li>

          <li>
            <p className={text} style={{ textAlign: "justify" }}>
              <span className="text-2xl underline pr-2">Poor security.</span>
              Single-page applications are more susceptible to attack by hackers
              who steal user data using cross-site scripts. They inject them
              from the client side and can easily obtain confidential
              information. MPA and PWA, which we will consider below, have much
              better security settings.
            </p>
          </li>
        </ul>
        <p className="text-2xl font-medium px-10">When to use:</p>
        <p className={text} style={{ textAlign: "justify" }}>
          Suitable for creating social networks, various dynamic platforms with
          a small amount of information and no great need for SEO keys.
        </p>
      </div>

      {/* block two */}

      <div className="flex justify-center my-10">
        <p className={numberStyle}>2</p>
      </div>

      <p className={text} style={{ textAlign: "justify" }}>
        <span className="text-2xl font-bold">MPA (Multi Page Application)</span>{" "}
        is a multi-page web application. It allows the user to switch between
        individual pages when making a request. Such resources, as a rule, have
        a more complex interface and a large number of additional links. With
        each new request, for example, when paying for a product, the user will
        open a new page.
      </p>

      <p className="text-2xl font-medium px-10">Positive:</p>

      <ul>
        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">Excellent SEO.</span>
            Unlike SPA, each page of MPA has its own URL, which makes it
            possible to perfectly control user SEO requests - for each of them,
            the developer can add a unique key and meta tags.
          </p>
        </li>

        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">
              Unlimited scalability.
            </span>
            MPA does not limit you in the number of pages you can create and the
            information you need to place on it. Unlike SPA, you can use many
            functions on one page. Therefore, if your goal is to provide more
            opportunities for the client, choose MPA.
          </p>
        </li>
      </ul>

      <p className="text-2xl font-medium px-10">Negative:</p>

      <ul>
        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">Low speed.</span>
            With each interaction with the application, the server reloads and
            updates all resources - HTML, CSS, scripts and all page data.
            Therefore, the response time to a request increases, which can
            negatively affect the performance of the application.
          </p>
        </li>

        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">
              More complex development.
            </span>
            When creating such an application, a full-fledged development of the
            server and front-end parts of the program and the use of frameworks
            for the external and internal interface is required. All this takes
            much more time, compared to creating an SPA.
          </p>
        </li>
      </ul>

      <div className="flex justify-center my-10">
        <p className={numberStyle}>3</p>
      </div>

      <p className={text} style={{ textAlign: "justify" }}>
        <span className="text-2xl font-bold">
          PWA (Progressive Web Application)
        </span>{" "}
        is a progressive web application. It is developed using special
        technologies and can work without an Internet connection. Such
        applications are available on all devices and adapt to any screen width
        of a phone or computer. They can be installed on the main screen of your
        smartphone, send notifications and use it as a full-fledged application.
      </p>

      <p className="text-2xl font-medium px-10">Positive:</p>

      <ul>
        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">Fast development.</span>
            PWA development takes less time than creating native applications,
            so it is more accessible.
          </p>
        </li>

        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">
              Optional installation.
            </span>
            The application can be used directly through the browser, without
            downloading it from the app store. This means that during
            development, you will not need to take into account their rules and
            adjust the program to the standard.
          </p>
        </li>

        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">Many devices.</span>
            PWA is available in the browser on computers, phones and tablets,
            which significantly improves the user experience.
          </p>
        </li>

        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">Offline mode.</span>
            Users do not need to download the entire application every time - it
            can partially work offline.
          </p>
        </li>
      </ul>

      <p className="text-2xl font-medium px-10">Negative:</p>

      <ul>
        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">Low performance.</span>
            PWA is inferior in performance to native applications.
          </p>
        </li>

        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">
              No access to app stores.
            </span>
            Before adding the app icon to your phone screen, the user must first
            visit this website.
          </p>
        </li>

        <li>
          <p className="text-2xl font-medium px-10">When to use:</p>
        </li>
        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            Suitable for large network companies to control the work system,
            increase customer loyalty and work on brand recognition; services
            for the provision of services; businesses to create online courses.
          </p>
        </li>
      </ul>

      <div className="flex justify-center mt-20">
        <h2 className={underTitle}>Web applications for business</h2>
      </div>

      <ul>
        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">CRM systems.</span>
            Used to automate company sales and interaction with clients. With
            such a system, you can increase sales, optimize marketing, improve
            customer service, set up and control business processes, analyze the
            results of your activities.
          </p>
        </li>

        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">E-commerce systems.</span>
            Systems for electronic online transactions. With their help, users
            make purchases, sell goods, transfer funds without the participation
            of third parties. E-commerce includes: online stores, marketplaces,
            courier services, b2b services and platforms.
          </p>
        </li>

        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">ERP systems.</span>
            Used to manage business processes in the company: from the sales
            department to accounting. With its help, you can track the
            performance of each department and set appropriate tasks to improve
            it.
          </p>
        </li>

        <li>
          <p className={text} style={{ textAlign: "justify" }}>
            <span className="text-2xl underline pr-2">Corporate portals.</span>
            Web interfaces that allow company employees to see all corporate
            data of the company. With its help, users can exchange information,
            various documents, add or change information, work together on
            projects.
          </p>
        </li>
      </ul>

      <div className="flex flex-col justify-center items-center mt-10 mb-20">
        <p className="text-5xl font-extrabold text-textContacts" >We hope you found it interesting and useful.</p>
        <p className="text-3xl font-extrabold text-textContacts pt-16" >Tap <Link href="/#contact"><span className="text-5xl font-extrabold text-btmTextColor pt-16">Contacts</span></Link> </p>
      </div>
      
    </div>
  );
};
export default Article;
