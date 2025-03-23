// "use client";
// import { useState, useEffect } from "react";
// import Navbar from "@/components/navbar";
// import Link from "next/link";
// import Image from "next/image";
// import Footer from "@/components/footer";

// // ✅ ExploreCard Component
// const ExploreCard = ({ title, description, image }) => (
//   <div className="bg-[#F4F0F9] p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-lg">
//     <Image src={image} alt={title} width={64} height={64} />
//     <h3 className="text-xl font-semibold mt-4 text-[#5B408C]">{title}</h3>
//     <p className="text-gray-700 mt-2 text-sm">{description}</p>
//   </div>
// );

// // ✅ ServiceCard Component
// const ServiceCard = ({ title, description, icon }) => (
//   <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-lg">
//     <Image src={icon} alt={title} width={64} height={64} />
//     <h3 className="text-xl font-semibold mt-4 text-[#8E3F67]">{title}</h3>
//     <p className="text-gray-700 mt-2 text-sm">{description}</p>
//   </div>
// );

// // ✅ Testimonials Data
// const testimonials = [
//   {
//     quote: "Casting Hub helped me land my first major role in a commercial. The process was seamless, and the opportunities are endless!".replace(/'/g, "&#39;"),
//     name: "Alex Johnson",
//     role: "Actor",
//   },
//   {
//     quote: "I found multiple gigs through this platform. Highly recommend for anyone serious about their career!",
//     name: "Sarah Williams",
//     role: "Model",
//   },
//   {
//     quote: "A fantastic platform that connects talented individuals with great opportunities. I got cast in a major project!",
//     name: "Michael Lee",
//     role: "Voice Actor",
//   },
// ];

// export default function Home() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [fade, setFade] = useState(false);

//   // ✅ Automatic Testimonials Rotation with Animation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(true);
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//         setFade(false);
//       }, 500); // Matches animation duration
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-[#F4F0F9] min-h-screen">
//       <Navbar />

//       {/* ✅ Hero Section */}
//       <section className="flex flex-col items-center text-center pt-28 md:pt-36 px-6" id="home">
//         <h1 className="text-4xl md:text-5xl font-bold text-black leading-snug">
//           Discover Your Next Star: <br />
//           <span className="text-[#5B408C]">Unleash Your Talent</span> with Our Casting Services
//         </h1>
//         <p className="text-gray-700 mt-4 max-w-2xl">Join us to find the perfect talent for your next production project today!</p>

//         {/* Buttons */}
//         <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
//           <Link href="/#explore" className="px-6 py-3 bg-[#5B408C] text-white font-medium rounded-lg hover:bg-[#4A3577] transition-transform transform hover:scale-105">Explore</Link>
//           <Link href="/signup" className="px-6 py-3 bg-white text-[#5B408C] border border-[#5B408C] rounded-lg hover:bg-[#5B408C] hover:text-white transition-transform transform hover:scale-105">Sign Up</Link>
//         </div>
//       </section>

//       {/* ✅ Image Section */}
//       <section className="mt-12 px-6 flex justify-center">
//         <div className="max-w-4xl rounded-lg overflow-hidden shadow-lg">
//           <Image src="/background.jpg" alt="Casting Talent" width={800} height={400} className="rounded-lg" priority />
//         </div>
//       </section>

//       {/* ✅ Explore Section */}
//       <section id="explore" className="py-16 px-6 text-center bg-white mt-16">
//         <h2 className="text-3xl font-bold text-[#5B408C]">Explore Opportunities</h2>
//         <p className="text-gray-700 mt-4 max-w-3xl mx-auto">Browse through different categories and find the perfect opportunity for your talent.</p>

//         <div className="mt-8 grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
//           <ExploreCard title="Acting Roles" description="Find auditions for TV, film, and theater." image="/explore_icons/actor.png" />
//           <ExploreCard title="Modeling Jobs" description="Get discovered by top brands and agencies." image="/explore_icons/model.png" />
//           <ExploreCard title="Voice Acting" description="Showcase your voice talent for commercials & animation." image="/explore_icons/voice.png" />
//           <ExploreCard title="Extras & Crew" description="Join productions as an extra or crew member." image="/explore_icons/crew.png" />
//         </div>
//       </section>
//       {/* ✅ About Us Section */}
//       <section className="py-16 px-6 text-center bg-[#F4F0F9]" id="about-us">
//         <h2 className="text-3xl font-bold text-[#5B408C]">About Us</h2>
//         <p className="text-gray-700 mt-4 max-w-3xl mx-auto leading-relaxed">
//           Casting Hub is a premier platform connecting aspiring and professional talent with top opportunities in the entertainment industry.
//           Whether you're an actor, model, voice artist, or filmmaker, we provide the tools to showcase your skills and get discovered.
//           <br /><br />
//           Our mission is to make casting accessible, transparent, and efficient, ensuring that talent of all backgrounds gets the recognition they deserve.
//           By partnering with industry leaders, we offer exclusive casting calls and opportunities.
//         </p>
//       </section>
//       {/* ✅ Services Section */}
//       <section className="py-16 px-6 text-center bg-white" id="services">
//         <h2 className="text-3xl font-bold text-[#5B408C]">Our Services</h2>
//         <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
//           Explore our professional casting services designed to connect talent with opportunities.
//         </p>

//         <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           <ServiceCard
//             title="Casting Calls"
//             description="Find the latest casting calls and apply with ease."
//             icon="/services_icons/casting-call.png"
//           />
//           <ServiceCard
//             title="Talent Management"
//             description="Manage your profile, showcase your talent, and get noticed."
//             icon="/services_icons/talent-management.png"
//           />
//           <ServiceCard
//             title="Production Support"
//             description="Connect with filmmakers and production houses for collaborations."
//             icon="/services_icons/production.png"
//           />
//         </div>
//       </section>
//       {/* ✅ Testimonials Section (Cool Animation) */}
//       <section className="pt-16 px-6 text-center">
//   <h2 className="text-3xl font-bold text-[#5B408C]">What Our Users Say</h2>
//   <div className="mt-8 max-w-4xl mx-auto h-32 relative overflow-hidden">
//     <div className={`transition-opacity duration-500 transform ${fade ? "opacity-0 -translate-x-4" : "opacity-100 translate-x-0"}`}>
//       <blockquote className="text-lg italic text-black">
//         &quot;{testimonials[currentIndex].quote.replace(/'/g, "&#39;")}&quot;
//       </blockquote>
//       <p className="mt-4 font-bold text-black">
//         - {testimonials[currentIndex].name}, {testimonials[currentIndex].role}
//       </p>
//     </div>
//   </div>
// </section>

//       {/* ✅ Call to Action Section */}
//       <section className="py-16 px-6 text-center bg-gradient-to-r from-[#5B408C] to-[#8E3F67] text-white rounded-lg shadow-lg mx-4 md:mx-16 my-16 mt-0">
//         <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
//         <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
//           Take the next step in your career and join a thriving community of talent.
//         </p>
//         <div className="mt-8">
//           <Link href="/signup" className="inline-block px-8 py-4 bg-white text-[#8E3F67] font-semibold text-lg rounded-lg shadow-md hover:bg-[#F4F0F9] hover:text-[#5B408C] transition-transform transform hover:scale-105">
//             Sign Up Now
//           </Link>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";

// ✅ ExploreCard Component
const ExploreCard = ({ title, description, image }) => (
  <div className="bg-[#F4F0F9] p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-lg">
    <Image src={image} alt={title} width={64} height={64} priority />
    <h3 className="text-xl font-semibold mt-4 text-[#5B408C]">{title}</h3>
    <p className="text-gray-700 mt-2 text-sm">{description}</p>
  </div>
);

// ✅ ServiceCard Component
const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-lg">
    <Image src={icon} alt={title} width={64} height={64} priority />
    <h3 className="text-xl font-semibold mt-4 text-[#8E3F67]">{title}</h3>
    <p className="text-gray-700 mt-2 text-sm">{description}</p>
  </div>
);

// ✅ Testimonials Data
const testimonials = [
  {
    quote: "Casting Hub helped me land my first major role in a commercial. The process was seamless, and the opportunities are endless!",
    name: "Alex Johnson",
    role: "Actor",
  },
  {
    quote: "I found multiple gigs through this platform. Highly recommend for anyone serious about their career!",
    name: "Sarah Williams",
    role: "Model",
  },
  {
    quote: "A fantastic platform that connects talented individuals with great opportunities. I got cast in a major project!",
    name: "Michael Lee",
    role: "Voice Actor",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // ✅ Automatic Testimonials Rotation with Smooth Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setFade(false);
      }, 500); // Matches animation duration
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F4F0F9] min-h-screen">
      <Navbar />

      {/* ✅ Hero Section */}
      <section className="flex flex-col items-center text-center pt-28 md:pt-36 px-6" id="home">
        <h1 className="text-4xl md:text-5xl font-bold text-black leading-snug">
          Discover Your Next Star: <br />
          <span className="text-[#5B408C]">Unleash Your Talent</span> with Our Casting Services
        </h1>
        <p className="text-gray-700 mt-4 max-w-2xl">
          Join us to find the perfect talent for your next production project today!
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <Link href="/#explore" className="px-6 py-3 bg-[#5B408C] text-white font-medium rounded-lg hover:bg-[#4A3577] transition-transform transform hover:scale-105">
            Explore
          </Link>
          <Link href="/signup" className="px-6 py-3 bg-white text-[#5B408C] border border-[#5B408C] rounded-lg hover:bg-[#5B408C] hover:text-white transition-transform transform hover:scale-105">
            Sign Up
          </Link>
        </div>
      </section>

      {/* ✅ Image Section */}
      <section className="mt-12 px-6 flex justify-center">
        <div className="max-w-4xl rounded-lg overflow-hidden shadow-lg">
          <Image src="/background.jpg" alt="Casting Talent" width={800} height={400} className="rounded-lg" priority />
        </div>
      </section>

      {/* ✅ Explore Section */}
      <section id="explore" className="py-16 px-6 text-center bg-white mt-16">
        <h2 className="text-3xl font-bold text-[#5B408C]">Explore Opportunities</h2>
        <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
          Browse through different categories and find the perfect opportunity for your talent.
        </p>

        <div className="mt-8 grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Acting Roles", description: "Find auditions for TV, film, and theater.", image: "/explore_icons/actor.png" },
            { title: "Modeling Jobs", description: "Get discovered by top brands and agencies.", image: "/explore_icons/model.png" },
            { title: "Voice Acting", description: "Showcase your voice talent for commercials & animation.", image: "/explore_icons/voice.png" },
            { title: "Extras & Crew", description: "Join productions as an extra or crew member.", image: "/explore_icons/crew.png" },
          ].map((item, index) => (
            <ExploreCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* ✅ Testimonials Section (Smooth Animation) */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#5B408C]">What Our Users Say</h2>
        <div className="mt-8 max-w-4xl mx-auto h-32 relative overflow-hidden">
          <div className={`transition-opacity duration-500 transform ${fade ? "opacity-0 -translate-x-4" : "opacity-100 translate-x-0"}`}>
            <blockquote className="text-lg italic text-black">
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </blockquote>
            <p className="mt-4 font-bold text-black">
              - {testimonials[currentIndex].name}, {testimonials[currentIndex].role}
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Call to Action Section */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-[#5B408C] to-[#8E3F67] text-white rounded-lg shadow-lg mx-4 md:mx-16 my-16 mt-0">
        <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
          Take the next step in your career and join a thriving community of talent.
        </p>
        <div className="mt-8">
          <Link href="/signup" className="inline-block px-8 py-4 bg-white text-[#8E3F67] font-semibold text-lg rounded-lg shadow-md hover:bg-[#F4F0F9] hover:text-[#5B408C] transition-transform transform hover:scale-105">
            Sign Up Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}