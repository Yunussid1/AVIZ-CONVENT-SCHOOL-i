import { useState, useEffect, useRef } from "react";

// Floating CTA Button Component (Option A - Always Visible)
const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-[slideUp_0.3s_ease-out]">
      <div className="relative">
        {/* Pulse animation ring */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full animate-ping opacity-20"></div>

        {/* Main button */}
        <div className="relative bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full p-1 shadow-2xl">
          <button
            onClick={() => window.dispatchEvent(new Event("open-cta-modal"))}
            className="bg-white rounded-full px-6 py-4 flex items-center space-x-3 hover:scale-105 transition-transform"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-500 font-medium">
                Admissions Open 2026-2027
              </div>
              <div className="text-sm font-bold text-gray-900">Call Now</div>
            </div>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Icons as SVG components
const PhoneIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-emerald-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const BookIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

const UsersIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const AcademicCapIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l9-5-9-5-9 5 9 5z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
    />
  </svg>
);

const HeartIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const XIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// CTA Modal Component
const CTAModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-[fadeIn_0.3s_ease-out]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <XIcon />
        </button>

        <div className="text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <img src="/logo.png" alt="School Logo" />
          </div>

          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
            Admissions Open 2026-2027
          </h3>
          <p className="font-body text-lg text-gray-600 mb-6">
            Give Your Child the{" "}
            <span className="text-emerald-600 font-semibold">
              Feathers to Fly
            </span>
          </p>

          <div className="space-y-3">
            <a
              href="#admissions"
              onClick={onClose}
              className="block w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300"
            >
              Apply Now
            </a>
            <a
              href="tel:08172948400"
              className="block w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300"
            >
              Call Now: 08172948400
            </a>
            <a
              href="#contact"
              onClick={onClose}
              className="block w-full py-4 px-6 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden ${isScrolled ? "bg-white" : "bg-white/20 backdrop-blur-sm"}`}
            >
              <img src="/logo.png" alt="School Logo" />
            </div>
            <div>
              <h1
                className={`font-heading font-bold text-lg ${isScrolled ? "text-gray-900" : "text-white"}`}
              >
                Aviz Convent School
              </h1>
              <p
                className={`text-xs ${isScrolled ? "text-gray-500" : "text-white/80"}`}
              >
                Comprehensive English Education
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Facilities", "Admissions", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-body font-medium transition-colors ${isScrolled ? "text-gray-600 hover:text-blue-600" : "text-white/90 hover:text-white"}`}
                >
                  {item}
                </a>
              ),
            )}
          </nav>

          <a
            href="tel:08172948400"
            className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            <PhoneIcon />
            <span>8172948400</span>
          </a>
        </div>
      </div>
    </header>
  );
};

// Hero Section
const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
    </div>

    {/* Floating elements */}
    <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute bottom-40 right-20 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <div className="text-center">
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
          <span className="text-white font-body text-sm">
            Admissions Open for 2026-2027
          </span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Kindness at the Core
          <br />
          <span className="text-emerald-300">Feathers to Fly</span>
        </h1>

        <p className="font-body text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Established in 1999, Aviz Convent School provides comprehensive
          English education where every child is known, valued, and supported as
          an individual.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#admissions"
            className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Start Your Journey
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
          >
            Learn More
          </a>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "25+", label: "Years of Excellence" },
            { number: "Playgroup - 8", label: "Classes Offered" },
            { number: "UP Board", label: "Affiliation" },
            { number: "English", label: "Medium of Instruction" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4"
            >
              <div className="font-heading text-3xl font-bold text-white">
                {stat.number}
              </div>
              <div className="font-body text-sm text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
        <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse"></div>
      </div>
    </div>
  </section>
);

// Vision Section
const VisionSection = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="inline-block font-body text-blue-600 font-semibold mb-3">
          Our Vision & Philosophy
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Every Child is Known, Valued & Supported
        </h2>
        <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto">
          We believe in nurturing the whole child – their mind, heart, and
          character – preparing them for real life, not just exams.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <HeartIcon />,
            title: "Kindness & Values",
            desc: "Empathy, compassion, and strong moral values form the foundation of our education.",
          },
          {
            icon: <AcademicCapIcon />,
            title: "Innovative Learning",
            desc: "Inclusive, inspiring education that sparks curiosity and encourages independent thinking.",
          },
          {
            icon: <UsersIcon />,
            title: "21st Century Skills",
            desc: "Communication, collaboration, creativity, and critical thinking for a global world.",
          },
          {
            icon: <ShieldIcon />,
            title: "Real Life Ready",
            desc: "Building confidence, independence, and optimism to face life's challenges.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="font-body text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// School Profile Section
const SchoolProfileSection = () => (
  <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block font-body text-blue-600 font-semibold mb-3">
            About Our School
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            A Safe, Nurturing Environment for Your Child
          </h2>
          <p className="font-body text-lg text-gray-600 mb-6">
            Aviz Convent School is a well-established, trusted institution in
            Lucknow. As a medium-sized school, we offer the perfect balance of
            personal attention and comprehensive education.
          </p>

          <div className="space-y-4">
            {[
              "Safe, disciplined, and nurturing campus environment",
              "Balanced focus on academics, character, and wellbeing",
              "Personal attention to every student's needs",
              "Strong pastoral care and dedicated teacher guidance",
              "Activity-based learning with active student participation",
              "Regular assessments and academic progress tracking",
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckIcon />
                </div>
                <span className="font-body text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                <div className="font-heading text-4xl font-bold mb-1">1999</div>
                <div className="font-body text-sm text-blue-100">
                  Established
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white">
                <div className="font-heading text-4xl font-bold mb-1">25+</div>
                <div className="font-body text-sm text-emerald-100">
                  Years Experience
                </div>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-6 text-white">
                <div className="font-heading text-4xl font-bold mb-1">
                  1000+
                </div>
                <div className="font-body text-sm text-amber-100">
                  Students Taught
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
                <div className="font-heading text-4xl font-bold mb-1">50+</div>
                <div className="font-body text-sm text-purple-100">
                  Expert Teachers
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full blur-2xl opacity-60"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-200 rounded-full blur-2xl opacity-60"></div>
        </div>
      </div>
    </div>
  </section>
);

// Facilities Section
const FacilitiesSection = () => (
  <section id="facilities" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="inline-block font-body text-blue-600 font-semibold mb-3">
          Faculty & Facilities
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Everything Your Child Needs to Thrive
        </h2>
        <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto">
          We provide a conducive learning environment with modern facilities and
          dedicated educators.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: <BookIcon />,
            title: "Experienced Teachers",
            desc: "Caring and dedicated educators who understand each child's unique learning needs.",
          },
          {
            icon: <AcademicCapIcon />,
            title: "Smart Classrooms",
            desc: "Digital learning tools and interactive whiteboards for engaging lessons.",
          },
          {
            icon: <ShieldIcon />,
            title: "Safe Campus",
            desc: "Well-maintained, secure campus with focus on student safety and discipline.",
          },
          {
            icon: <UsersIcon />,
            title: "Personal Attention",
            desc: "Small class sizes ensuring every student receives individual guidance.",
          },
          {
            icon: <HeartIcon />,
            title: "Activity-Based Learning",
            desc: "Hands-on activities and projects that make learning enjoyable and memorable.",
          },
          {
            icon: <StarIcon />,
            title: "Regular Assessments",
            desc: "Continuous evaluation and academic tracking to monitor progress.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center text-blue-600 mb-5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="font-body text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Testimonials Section
const TestimonialsSection = () => (
  <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="inline-block font-body text-emerald-400 font-semibold mb-3">
          Parent Testimonials
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          What Our Parents Say
        </h2>
        <p className="font-body text-lg text-gray-300 max-w-3xl mx-auto">
          Don't just take our word for it – hear from parents who trust us with
          their children's education.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Mrs. Sunita Sharma",
            role: "Parent of Class 5 Student",
            text: "Aviz Convent School has been a blessing for our family. The teachers are so caring and my daughter has grown into a confident, kind individual. The personal attention each child receives is remarkable.",
          },
          {
            name: "Mr. Rajesh Kumar",
            role: "Parent of Class 3 Student",
            text: "We enrolled our son here 3 years ago and couldn't be happier. The school focuses on overall development, not just academics. The discipline and values taught here are exactly what we wanted.",
          },
          {
            name: "Mrs. Poonam Singh",
            role: "Parent of Class 6 Student",
            text: "The school has a wonderful atmosphere where children feel safe and loved. My son looks forward to going to school every day. The teachers genuinely care about each student's progress.",
          },
        ].map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-all"
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="font-body text-gray-200 mb-6 italic">
              "{testimonial.text}"
            </p>
            <div>
              <div className="font-heading font-semibold text-white">
                {testimonial.name}
              </div>
              <div className="font-body text-sm text-gray-400">
                {testimonial.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Achievements Section
const AchievementsSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="inline-block font-body text-blue-600 font-semibold mb-3">
          Our Achievements
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Two Decades of Trust & Excellence
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-heading text-2xl font-bold">
              25+
            </span>
          </div>
          <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
            Years of Excellence
          </h3>
          <p className="font-body text-gray-600">
            Established in 1999, serving the Lucknow community for over two
            decades
          </p>
        </div>

        <div className="text-center p-8">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-heading text-2xl font-bold">
              100%
            </span>
          </div>
          <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
            Pass Rate
          </h3>
          <p className="font-body text-gray-600">
            Consistent academic results with excellent pass percentages year
            after year
          </p>
        </div>

        <div className="text-center p-8">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-heading text-2xl font-bold">
              ★
            </span>
          </div>
          <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
            Community Trust
          </h3>
          <p className="font-body text-gray-600">
            Strong reputation and recognition in the local community of Lucknow
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Admissions Section
const AdmissionsSection = () => (
  <section
    id="admissions"
    className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block font-body text-emerald-300 font-semibold mb-3">
            Admissions Open
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Give Your Child the Feathers to Fly
          </h2>
          <p className="font-body text-lg text-white/90 mb-8">
            Join our school family and give your child the foundation they
            deserve. Simple walk-in admission process – no complicated forms or
            lengthy procedures.
          </p>

          <div className="space-y-4 mb-8">
            {[
              "Visit the school and take a campus tour",
              "Meet our faculty and learn about our approach",
              "Complete simple enrollment formalities",
              "Welcome your child to their new school!",
            ].map((step, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-heading font-bold">
                  {index + 1}
                </div>
                <span className="font-body text-white">{step}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:08172948400"
              className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-xl"
            >
              <PhoneIcon />
              <span>Call Now: 08172948400</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              <LocationIcon />
              <span>Visit School</span>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
            Classes Offered
          </h3>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              "Playgroup",
              "Nursery",
              "KG",
              "Class 1",
              "Class 2",
              "Class 3",
              "Class 4",
              "Class 5",
              "Class 6",
              "Class 7",
              "Class 8",
            ].map((cls, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl p-4 text-center"
              >
                <span className="font-body font-medium text-gray-700">
                  {cls}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h4 className="font-heading font-semibold text-gray-900 mb-4">
              Quick Information
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-body text-gray-600">Board</span>
                <span className="font-body font-medium text-gray-900">
                  UP Board
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-gray-600">Medium</span>
                <span className="font-body font-medium text-gray-900">
                  English
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-gray-600">Established</span>
                <span className="font-body font-medium text-gray-900">
                  1999
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Contact Section
const ContactSection = () => (
  <section id="contact" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="inline-block font-body text-blue-600 font-semibold mb-3">
          Contact Us
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Visit Our School
        </h2>
        <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto">
          We'd love to meet you and show you around our campus. Come experience
          the Aviz Convent difference.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h3>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                <LocationIcon />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-gray-900 mb-1">
                  Address
                </h4>
                <p className="font-body text-gray-600">
                  Mozum Nagar, near Vivek Plywood, near Vikas Dairy
                  <br />
                  Lucknow, Uttar Pradesh – 226003
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                <PhoneIcon />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-gray-900 mb-1">
                  Phone
                </h4>
                <a
                  href="tel:08172948400"
                  className="font-body text-blue-600 hover:text-blue-700"
                >
                  08172948400
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                <MailIcon />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-gray-900 mb-1">
                  Email
                </h4>
                <a
                  href="mailto:avizimam@gmail.com"
                  className="font-body text-blue-600 hover:text-blue-700"
                >
                  avizimam@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100">
            <h4 className="font-heading font-semibold text-gray-900 mb-4">
              School Hours
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-body text-gray-600">Monday</span>
                <span className="font-body font-medium text-gray-900">
                  7:30 am – 1:10 pm
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-gray-600">Tuesday</span>
                <span className="font-body font-medium text-gray-900">
                  7:30 am – 1:10 pm
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-gray-600">Wednesday</span>
                <span className="font-body font-medium text-gray-900">
                  7:30 am – 1:10 pm
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-gray-600">Thursday</span>
                <span className="font-body font-medium text-gray-900">
                  7:30 am – 1:10 pm
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-gray-600">Friday</span>
                <span className="font-body font-medium text-gray-900">
                  7:30 am – 1:10 pm
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-gray-600">Saturday</span>
                <span className="font-body font-medium text-gray-900">
                  7:30 am – 1:10 pm
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-gray-600">Sunday</span>
                <span className="font-body font-medium text-gray-900">
                  Closed
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
          <div className="h-80 bg-gray-200 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d80.5937!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU0JzAwLjAiTiAxMjLCsDI0JzAwLjAiRQ!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location"
              className="absolute inset-0"
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600 to-emerald-600">
              <div className="text-center text-white p-8">
                <LocationIcon />
                <p className="font-heading text-xl font-bold mt-4">
                  Aviz Convent School
                </p>
                <p className="font-body text-white/80 mt-2">
                  Mozum Nagar, Lucknow
                </p>
                <a
                  href="https://maps.google.com/?q=Mozum+Nagar+near+Vivek+Plywood+near+Vikas+Dairy+Lucknow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center overflow-hidden">
                 <img src="/logo.png" alt="School Logo" />
            </div>
            <div>
              <h3 className="font-heading font-bold">Aviz Convent School</h3>
              <p className="text-sm text-gray-400">
                Comprehensive English Education
              </p>
            </div>
          </div>
          <p className="font-body text-gray-400 text-sm">
            Established in 1999, nurturing young minds with kindness, values,
            and quality education.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["Home", "About", "Facilities", "Admissions", "Contact"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block font-body text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ),
            )}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Contact Info</h4>
          <div className="space-y-2 font-body text-gray-400 text-sm">
            <p>Mozum Nagar, near Vivek Plywood</p>
            <p>near Vikas Dairy, Lucknow - 226003</p>
            <p>Phone: 08172948400</p>
            <p>Email: avizimam@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center">
        <p className="font-body text-gray-400 text-sm">
          © {new Date().getFullYear()} Aviz Convent School. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

// Main App Component
export function App() {
  const [showModal, setShowModal] = useState(false);
  const [showModalOnScroll, setShowModalOnScroll] = useState(false);
  const admissionsSectionRef = useRef<HTMLDivElement>(null);

  // Show modal on page load after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Show modal on scroll to admissions section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !showModalOnScroll) {
            setShowModalOnScroll(true);
            setTimeout(() => setShowModal(true), 500);
          }
        });
      },
      { threshold: 0.5 },
    );

    if (admissionsSectionRef.current) {
      observer.observe(admissionsSectionRef.current);
    }

    return () => observer.disconnect();
  }, [showModalOnScroll]);

  // Listen for custom event from floating CTA
  useEffect(() => {
    const handleOpenModal = () => setShowModal(true);
    window.addEventListener("open-cta-modal", handleOpenModal);
    return () => window.removeEventListener("open-cta-modal", handleOpenModal);
  }, []);

  return (
    <div className="font-body antialiased">
      <Header />
      <main>
        <HeroSection />
        <VisionSection />
        <SchoolProfileSection />
        <FacilitiesSection />
        <TestimonialsSection />
        <AchievementsSection />
        <div ref={admissionsSectionRef}>
          <AdmissionsSection />
        </div>
        <ContactSection />
      </main>
      <Footer />

      <CTAModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <FloatingCTA />
    </div>
  );
}

export default App;
