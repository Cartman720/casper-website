import Image from "next/image";
import Link from "next/link";
import ImageSlider from "./components/ImageSlider";

export default function Home() {
  const slides = [
    {
      imageSrc: "/screenshots/comment-example.png",
      alt: "Casper in action - Comment example",
      caption: "Generate thoughtful responses to TikTok comments"
    },
    {
      imageSrc: "/screenshots/actions-dropdown.png",
      alt: "Actions dropdown menu",
      caption: "Choose from different response tones"
    },
    {
      imageSrc: "/screenshots/custom-prompt-dropdown.png",
      alt: "Custom prompt dropdown",
      caption: "Create custom prompts for personalized responses"
    },
    {
      imageSrc: "/screenshots/actions-listing-screen.png",
      alt: "Actions management screen",
      caption: "Manage your saved actions"
    },
    {
      imageSrc: "/screenshots/action-form.png",
      alt: "Create new action form",
      caption: "Create new custom actions"
    }
  ];

  return (
    <div className="min-h-screen bg-white p-8 pb-20">
      <div className="mx-auto max-w-3xl">
        <header className="mb-10 flex flex-col items-center">
          <div className="mb-4 flex items-center justify-center">
            <Image 
              src="/casper-logo-circled.png" 
              alt="Casper Chat Logo" 
              width={150} 
              height={150} 
              priority
            />
          </div>
          <h1 className="text-center text-4xl font-black text-[#FE2C55]">Casper: AI-Powered TikTok Comment Assistant</h1>
          <p className="mb-6 mt-4 text-lg text-center font-normal">
            A browser extension that helps marketing teams and content creators respond to TikTok comments more easily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://chrome.google.com/webstore" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/>
              </svg>
              Download Extension
            </a>
            <Link 
              href="/privacy" 
              className="btn-secondary flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Privacy Policy
            </Link>
          </div>
        </header>
        
        <main className="space-y-12">
          <section className="mb-12">
            <ImageSlider slides={slides} />
          </section>
          
          <div className="mx-auto max-w-2xl">
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#FE2C55]">What is Casper?</h2>
              <p className="mb-4 text-lg font-normal">
                Casper is a browser extension that adds an AI-powered comment assistant directly into TikTok's interface. 
                It helps marketing teams, social media managers, and content creators save time by generating thoughtful, 
                on-brand responses to comments with just a few clicks.
              </p>
            </section>
            
            <section className="mt-12">
              <h2 className="mb-4 text-2xl font-bold text-[#FE2C55]">Features</h2>
              <ul className="list-disc space-y-3 pl-6 font-normal">
                <li><span className="font-bold">AI-Powered Comment Generation</span>: Generate contextually relevant responses to TikTok comments</li>
                <li><span className="font-bold">Custom Actions</span>: Create and save your favorite response templates for quick access</li>
                <li><span className="font-bold">Custom Prompts</span>: Craft personalized instructions for the AI to match your brand voice</li>
                <li><span className="font-bold">Seamless Integration</span>: Works directly within TikTok's comment interface</li>
                <li><span className="font-bold">User Authentication</span>: Securely save your preferences across devices</li>
              </ul>
            </section>
            
            <section className="mt-12">
              <h2 className="mb-4 text-2xl font-bold text-[#FE2C55]">How It Works</h2>
              <ol className="list-decimal space-y-3 pl-6 font-normal">
                <li><span className="font-bold">Install the extension</span> from the Chrome Web Store</li>
                <li><span className="font-bold">Log in</span> to your Casper account</li>
                <li><span className="font-bold">Browse TikTok</span> and find comments you want to respond to</li>
                <li><span className="font-bold">Click the "Generate Reply" button</span> that appears next to the comment box</li>
                <li><span className="font-bold">Select a tone</span> or enter a custom prompt</li>
                <li><span className="font-bold">Get an AI-generated response</span> that you can use as-is or edit before posting</li>
              </ol>
            </section>
          </div>
        </main>
        
        <footer className="mt-16 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-600 font-normal">
            © {new Date().getFullYear()} Aren Hovsepyan. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
