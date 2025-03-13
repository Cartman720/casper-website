import Image from "next/image";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white p-8 pb-20">
      <div className="mx-auto max-w-2xl prose prose-lg">
        <header className="mb-10 flex flex-col items-center not-prose">
          <div className="mb-4 flex items-center justify-center">
            <Link href="/">
              <Image 
                src="/casper-logo-circled.png" 
                alt="Casper Chat Logo" 
                width={100} 
                height={100} 
                priority
              />
            </Link>
          </div>
          <h1 className="text-center text-4xl font-black text-[#FE2C55]">PRIVACY NOTICE</h1>
        </header>
        
        <main className="space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#FE2C55]">Introduction and Who We Are</h2>
            <p className="mb-4 text-lg font-normal">
              Casper Chat ("Casper", "we", "our" or "us") are strongly committed to being responsible custodians of the information you provide us and the information we collect in the course of operating our business.
            </p>
            <p className="mb-4 text-lg font-normal">
              This Privacy Notice explains how Casper Chat, as a data controller, may collect, use, share and protect information that we obtain about you directly or indirectly in accordance with applicable data privacy laws.
            </p>
            <p className="mb-4 text-lg font-normal">
              Where you use our services, or your personal data is processed in connection with such services, and we control the purpose for which such personal data is processed, Casper Chat will be the data controller of such information.
            </p>
            <p className="mb-4 text-lg font-normal">
              We are very aware of the sensitivity of some of the information that we process by virtue of the services we provide and take the security of personal data very seriously.
            </p>
            <p className="mb-4 text-lg font-normal">
              This Privacy Notice does not apply to, and Casper Chat is not responsible for, any third party websites which may be accessible through links from this website.
            </p>
          </section>
          
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#FE2C55]">Scope of Privacy Notice</h2>
            <p className="mb-4 text-lg font-normal">
              This Privacy Notice explains and describes:
            </p>
            <ul className="list-disc space-y-3 pl-6 font-normal">
              <li>When this Privacy Notice applies.</li>
              <li>How we collect your personal data.</li>
              <li>Legal basis for usage of your personal data.</li>
              <li>How we use the personal data we collect.</li>
              <li>What happens if your personal data is transferred overseas.</li>
              <li>How long we hold your personal data.</li>
              <li>How we protect your personal data and keep it secure.</li>
              <li>What cookies are and how we use them.</li>
              <li>What happens when you access third-party services and content.</li>
              <li>Your legal choices and rights.</li>
              <li>The status of this Privacy Notice and any changes that are made to it.</li>
              <li>How to request further information.</li>
              <li>Our contact details.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#FE2C55]">When This Privacy Notice Applies</h2>
            <p className="mb-4 text-lg font-normal">
              This Privacy Notice applies:
            </p>
            <ul className="list-disc space-y-3 pl-6 font-normal">
              <li>to your use of any of our services where we are performing a data controller function;</li>
              <li>to any personal information collected from third parties where we are the controller of such information.</li>
            </ul>
            <p className="mt-4 mb-4 text-lg font-normal">
              This Privacy Notice additionally applies to our website and online services, including our Chrome Extension and any other website, mobile app or other online service created or hosted by us from time to time on which this Privacy Notice appears through which we may collect certain details if, for example, you want to subscribe to any publications or newsletters that we may periodically issue.
            </p>
            <p className="mb-4 text-lg font-normal">
              Please note that our online services make use of cookies and similar technologies, as described in more detail in the Cookies Policy section below.
            </p>
          </section>
          
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#FE2C55]">How We Collect Your Personal Data</h2>
            <p className="mb-4 text-lg font-normal">
              "Personal data" is any information that can be used to identify you or that we can link to you.
            </p>
            <p className="mb-4 text-lg font-normal">
              Where you use our services, we will collect personal data directly from you.
            </p>
            <p className="mb-4 text-lg font-normal">
              We collect information that you voluntarily provide to us, including when you communicate with us via email or other channels; when you sign up for or request that we send you newsletters, alerts, or other materials; and when you respond to our communications or requests for information.
            </p>
            <p className="mb-4 text-lg font-normal">
              When you use our online services, we may collect the following:
            </p>
            <ul className="list-disc space-y-3 pl-6 font-normal">
              <li>Information you provide by completing forms (this includes information you give us, submitting material, requesting services, or subscribing to our newsletters or other services).</li>
              <li>Information you provide to us if you contact us, for example to report a problem with our online services or raise a query or comment.</li>
              <li>Details of visits made to our online services including, but not limited to, the volume of traffic received, logs (including, where available, the IP address and location of the device connecting to the online services and other technical information and identifiers about the device and the nature of the visit) and the resources accessed.</li>
              <li>Where our online services require that you enter a password or other information in order to access certain features, we will collect such credentials when you enter them.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#FE2C55]">Legal Basis for Usage of Personal Data</h2>
            <p className="mb-4 text-lg font-normal">
              Where we intend to use your personal data, we rely on the following legal grounds:
            </p>
            <p className="mb-2 text-lg font-bold">Performance of a contract:</p>
            <p className="mb-4 text-lg font-normal">
              We may need to collect and use your personal data to enter into a contract with you or to perform a contract that you have with us.
            </p>
            <p className="mb-2 text-lg font-bold">Legitimate interests:</p>
            <p className="mb-4 text-lg font-normal">
              Where we consider use of your information as being (a) non-detrimental to you, (b) within your reasonable expectations, and (c) necessary for our own, or a third party's legitimate purpose, we may use your personal data, which may include:
            </p>
            <ul className="list-disc space-y-3 pl-6 font-normal">
              <li>for our own direct marketing or continued communication;</li>
              <li>the prevention of fraud;</li>
              <li>our own internal administrative purposes;</li>
              <li>personalization of the service(s) we provide to you;</li>
              <li>ensuring network and information security, including preventing unauthorized access to electronic communications networks and stopping damage to computer and electronic communication systems;</li>
              <li>reporting possible criminal acts or threats to public security to a competent authority.</li>
            </ul>
            <p className="mt-4 mb-2 text-lg font-bold">Compliance with a legal obligation:</p>
            <p className="mb-4 text-lg font-normal">
              We may be required to process your information due to legal requirements, including applicable laws and regulations.
            </p>
            <p className="mb-2 text-lg font-bold">Consent:</p>
            <p className="mb-4 text-lg font-normal">
              You may be asked to provide your consent in connection with certain services that we offer. Where we are reliant upon your consent, you may withdraw this at any time by contacting us in accordance with the "Contact" section below, however please note that we will no longer be able to provide you with the products or services that rely on having your consent.
            </p>
          </section>
          
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#FE2C55]">How We Use Your Personal Data</h2>
            <p className="mb-4 text-lg font-normal">
              Depending upon the circumstances in which we gather your personal data, we may use your information to:
            </p>
            <ul className="list-disc space-y-3 pl-6 font-normal">
              <li>Provide you with Casper Chat's services that you request.</li>
              <li>Respond to your enquiries.</li>
              <li>Carry out our obligations arising from any contracts entered into between you and us.</li>
              <li>Facilitate our internal business operations, including to fulfill our legal or regulatory requirements.</li>
              <li>Improve and customize our services.</li>
              <li>Provide you with information or services that you request from us or which we feel may interest you (where you have consented to be contacted for such purposes).</li>
              <li>Notify you about changes to our services.</li>
              <li>Ensure the security of our services.</li>
              <li>Develop new products and services.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#FE2C55]">Security</h2>
            <p className="mb-4 text-lg font-normal">
              We take steps to hold information securely in electronic or physical form.
            </p>
            <p className="mb-4 text-lg font-normal">
              Our information security policy is supported by a variety of processes and procedures, and we store information in access-controlled electronic databases requiring logins and passwords. All employees, officers or contractors of Casper Chat and third-party providers with access to confidential information are subject to access controls and confidentiality obligations.
            </p>
            <p className="mb-4 text-lg font-normal">
              Whilst we continually strive to ensure that our systems and controls are updated to reflect technological changes, the transmission of information via the internet is not completely secure, and as such we cannot guarantee the security of your data transmitted to our online services which is at your own risk.
            </p>
            <p className="mb-4 text-lg font-normal">
              Once we have received your information, we will take reasonable steps to use procedures and security features to try to prevent unauthorized access, modification or disclosure.
            </p>
            <p className="mb-4 text-lg font-normal">
              You can help us to keep your information secure by ensuring that any username or password in relation to our online services is kept strictly personal to you and not made available to any other person. You should stop using your username and password and notify us immediately if you suspect that someone else may be using your user details or password.
            </p>
          </section>
          
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#FE2C55]">Cookies Policy</h2>
            <p className="mb-4 text-lg font-normal">
              Our website and services delivered online use cookies and other similar technologies, for example, to distinguish you from other users when you browse our website(s) or use our online services and to allow us to improve our online services.
            </p>
            <p className="mb-4 text-lg font-normal">
              Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently to improve the user experience, as well as to provide certain information to the owners of the site.
            </p>
            <p className="mb-4 text-lg font-normal">
              We may, for example, collect information about the type of device you use to access our online services, the operating system and version, your IP address, your general geographic location as indicated by your IP address, your browser type, the content you view and features you access on our online services, the web pages you view immediately before and after you access our online services, whether and how you interact with content available on our online services, and the search terms you enter on our online services.
            </p>
            <p className="mb-4 text-lg font-normal">
              Control of cookies:
            </p>
            <p className="mb-4 text-lg font-normal">
              Web browsers allow you to exercise some control of cookies through the browser settings. Most browsers enable you to block cookies or to block cookies from particular sites. Browsers can also help you to delete cookies when you close your browser. You should note however, that this may mean that any opt-outs or preferences you set on our website will be lost. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.allaboutcookies.org which includes information on how to manage your settings for the major browser providers.
            </p>
          </section>
          
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#FE2C55]">Your Rights</h2>
            <p className="mb-4 text-lg font-normal">
              Under applicable data protection legislation, we have a duty of care to ensure that your personal data is accurate and up to date. Therefore, please contact us to update or correct your information if this changes or if you believe that any information that we have collected about you is inaccurate.
            </p>
            <p className="mb-4 text-lg font-normal">
              Where you have consented to our processing of certain personal data, you can at any time withdraw such consent and/or tell us not to contact you with updates and information regarding our products and services (or part of them) either at the point such information is collected (by leaving the relevant box unticked) or, where you do not wish us to continue to use your information in this way, by following the unsubscribe instructions on any communications sent to you. You can also exercise this right at any time by contacting us using the contact details at the end of this Privacy Notice.
            </p>
            <p className="mb-4 text-lg font-normal">
              You can request:
            </p>
            <ul className="list-disc space-y-3 pl-6 font-normal">
              <li>access to the personal data we hold about you</li>
              <li>corrections or updates to your details;</li>
              <li>the erasure of your personal data;</li>
              <li>the portability of personal data that you have provided to us in a structured, commonly used and machine-readable format.</li>
            </ul>
            <p className="mt-4 mb-4 text-lg font-normal">
              You also have the right to object to, or request the restriction of, our use of your personal data.
            </p>
            <p className="mb-4 text-lg font-normal">
              If you would like to exercise any of the rights set out in this section, please contact us using the details set out in the "Contact" section below.
            </p>
          </section>
          
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#FE2C55]">Status of This Statement</h2>
            <p className="mb-4 text-lg font-normal">
              Your provision of personal data to us or use of our online services constitutes your acceptance of the terms of this Privacy Notice.
            </p>
            <p className="mb-4 text-lg font-normal">
              As technologies and information governance practices develop, and data privacy laws (and surrounding guidance) evolve, we may need to revise this Privacy Notice. You should therefore review this page regularly to ensure that you are aware of any changes to its terms.
            </p>
            <p className="mb-4 text-lg font-normal">
              We will post any Privacy Notice changes on this page and, if the changes are significant or may materially impact upon your rights, we will provide a more prominent notice or contact you by other means (including, for certain services, email notification of Privacy Notice changes).
            </p>
          </section>
          
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#FE2C55]">Contact</h2>
            <p className="mb-4 text-lg font-normal">
              If you have any questions, concerns or comments about this Privacy Notice, or want to submit a written complaint about how we handle your personal data, please contact us via the following email:
            </p>
            <p className="mt-2 mb-4 text-lg font-bold text-[#FE2C55]">ar.hovsepyan@gmail.com</p>
            <p className="mb-4 text-lg font-normal">
              Date of last update: 2025/03/12
            </p>
          </section>
          
          <section className="mt-10 flex justify-center not-prose">
            <Link 
              href="/" 
              className="btn-primary flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Home
            </Link>
          </section>
        </main>
        
        <footer className="mt-10 border-t border-gray-200 pt-6 text-center not-prose">
          <p className="text-sm text-gray-600 font-normal">
            © {new Date().getFullYear()} Aren Hovsepyan. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
