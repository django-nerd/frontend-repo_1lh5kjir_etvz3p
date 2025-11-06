import { Rocket, BookOpen, Cpu, Users, Building2, Globe, GraduationCap, BadgeCheck, Newspaper, LifeBuoy, Mail, Phone } from 'lucide-react';

export default function Sections() {
  return (
    <main className="bg-white text-gray-900">
      {/* About */}
      <section id="about" className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">About & Vision</h2>
              <p className="mt-4 text-gray-600">Hillsiani Research Hub at Markaz Knowledge City blends technology with multicultural education to empower learners. We focus on rigorous research, practical tech skills, and civic leadership to drive impact across communities and industries.</p>
              <ul className="mt-6 grid sm:grid-cols-3 gap-4">
                <li className="rounded-lg border border-gray-200 p-4">
                  <div className="flex items-center gap-2 text-gray-800"><Cpu size={18} /><span className="font-medium">Tech Skills</span></div>
                  <p className="mt-1 text-sm text-gray-600">Hands-on labs, AI, data, automation.</p>
                </li>
                <li className="rounded-lg border border-gray-200 p-4">
                  <div className="flex items-center gap-2 text-gray-800"><Globe size={18} /><span className="font-medium">Multicultural</span></div>
                  <p className="mt-1 text-sm text-gray-600">Global perspectives and inclusive learning.</p>
                </li>
                <li className="rounded-lg border border-gray-200 p-4">
                  <div className="flex items-center gap-2 text-gray-800"><BadgeCheck size={18} /><span className="font-medium">Empowerment</span></div>
                  <p className="mt-1 text-sm text-gray-600">Mentorship, projects, and real outcomes.</p>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="text-lg font-semibold flex items-center gap-2"><Rocket size={18} /> Industry 4.0 Innovations</h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <Feature title="AI + Data" desc="Applied ML, analytics, and decision systems." icon={<Cpu size={16} />} />
                <Feature title="Automation" desc="Robotics, IoT, and smart infrastructure." icon={<Building2 size={16} />} />
                <Feature title="Sustainability" desc="Green tech and circular design." icon={<Globe size={16} />} />
                <Feature title="Civic Tech" desc="Public services, policy, and governance." icon={<BookOpen size={16} />} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Program Tracks</h2>
              <p className="mt-2 text-gray-600">Choose focused tracks with research pathways and industry collaboration.</p>
            </div>
            <a href="#apply" className="hidden sm:inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium">
              Explore Admissions <Arrow />
            </a>
          </div>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProgramCard title="Civil Service" points={["Policy labs","GovTech projects","Ethics & law"]} icon={<Users size={18} />} />
            <ProgramCard title="Engineering / Tech" points={["Software & AI","Systems design","IoT & robotics"]} icon={<Cpu size={18} />} />
            <ProgramCard title="Medical" points={["Health informatics","Public health","Bioengineering"]} icon={<BadgeCheck size={18} />} />
            <ProgramCard title="Business / Law" points={["Entrepreneurship","Corporate tech","RegTech & IP"]} icon={<BookOpen size={18} />} />
            <ProgramCard title="Aviation" points={["Avionics & safety","Air mobility","Operations & data"]} icon={<Rocket size={18} />} />
            <ProgramCard title="Global Collaborations" points={["Exchange & dual degrees","Joint research","International mentors"]} icon={<Globe size={18} />} />
          </div>
        </div>
      </section>

      {/* Teaching */}
      <section id="teaching" className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <TeachingCard title="Smart Spaces" desc="Sensor-rich classrooms, labs, and studios designed for collaboration." />
            <TeachingCard title="Personalized Methods" desc="Adaptive pathways, competency badges, and mentor feedback loops." />
            <TeachingCard title="Open Scholarship" desc="Open-access repositories, reproducible workflows, and shared datasets." />
          </div>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <ResearchCard title="Labs & Centers" desc="AI, HealthTech, Sustainable Systems, and Public Policy clusters." />
            <ResearchCard title="Publications" desc="Working papers, preprints, and peer-reviewed journals." />
            <ResearchCard title="Showcase" desc="Student-led demos, prototypes, and impact stories." />
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section id="dashboard" className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Interactive Dashboard</h2>
              <p className="mt-2 text-gray-600">Track performance, news, badges, applications, and support.</p>
            </div>
          </div>
          <div className="mt-8 grid lg:grid-cols-4 gap-6">
            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between"><span className="text-sm text-gray-500">Performance</span><GraduationCap size={18} className="text-indigo-600"/></div>
              <p className="mt-3 text-3xl font-semibold">86%</p>
              <div className="mt-3 h-2 bg-gray-100 rounded-full">
                <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '86%' }} />
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between"><span className="text-sm text-gray-500">News</span><Newspaper size={18} className="text-indigo-600"/></div>
              <ul className="mt-3 space-y-2 text-sm">
                <li>AI Lab partners with HealthTech Alliance</li>
                <li>Policy Bootcamp applications open</li>
                <li>Robotics demo day this Friday</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between"><span className="text-sm text-gray-500">Badges</span><BadgeCheck size={18} className="text-indigo-600"/></div>
              <div className="mt-3 flex gap-2">
                <span className="px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs">Data Viz</span>
                <span className="px-2 py-1 rounded-full bg-green-50 text-green-700 text-xs">Python</span>
                <span className="px-2 py-1 rounded-full bg-amber-50 text-amber-700 text-xs">Civic Tech</span>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between"><span className="text-sm text-gray-500">Applications</span><Rocket size={18} className="text-indigo-600"/></div>
              <p className="mt-3 text-sm text-gray-600">2 in review • 1 accepted</p>
              <a href="#apply" className="mt-3 inline-flex text-indigo-600 text-sm font-medium">Open Apply Center</a>
            </div>
          </div>
        </div>
      </section>

      {/* Campus */}
      <section id="campus" className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Campus Spotlight</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Spotlight title="Housing" desc="Comfortable residences with study lounges and community kitchens." />
            <Spotlight title="Academics" desc="Libraries, seminar halls, and writing centers for deep work." />
            <Spotlight title="Tech Labs" desc="AI studio, makerspace, robotics arena, and data commons." />
            <Spotlight title="Health & Recreation" desc="Clinics, fitness, and mindfulness spaces." />
            <Spotlight title="Arts & Community" desc="Studios, cultural festivals, and service learning." />
            <Spotlight title="Nature & Trails" desc="Green walkways and outdoor classrooms." />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Partner title="Global" desc="Universities, labs, and NGOs across continents for joint programs." icon={<Globe size={18} />} />
            <Partner title="National" desc="Industry councils, ministries, and civic organizations." icon={<Building2 size={18} />} />
            <Partner title="Community" desc="Startups and local partners building meaningful solutions." icon={<Users size={18} />} />
          </div>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Admissions & Apply</h2>
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            <Step title="1. Choose Track" desc="Select your program and research pathway." />
            <Step title="2. Prepare Materials" desc="Academic records, statement of purpose, and references." />
            <Step title="3. Submit & Interview" desc="Upload application, schedule interview, and receive decision." />
          </div>
          <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-indigo-600 font-medium">Need help? Contact support <Arrow /></a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Contact & Support</h2>
              <p className="mt-2 text-gray-600">Questions about programs, research, or admissions? We’re here to help.</p>
              <div className="mt-6 space-y-3 text-sm text-gray-700">
                <div className="flex items-center gap-2"><Mail size={16} className="text-indigo-600"/><span>admissions@hillsiani.edu</span></div>
                <div className="flex items-center gap-2"><Phone size={16} className="text-indigo-600"/><span>+91 00000 00000</span></div>
                <div className="flex items-center gap-2"><LifeBuoy size={16} className="text-indigo-600"/><span>Support Center: 9am–6pm IST</span></div>
              </div>
            </div>
            <form className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600">First name</label>
                  <input className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Last name</label>
                  <input className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Doe" />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm text-gray-600">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="you@example.com" />
              </div>
              <div className="mt-4">
                <label className="block text-sm text-gray-600">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="How can we help?" />
              </div>
              <button type="button" className="mt-6 inline-flex items-center rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-500">Send message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ title, desc, icon }) {
  return (
    <div className="rounded-lg border border-gray-200 p-4 bg-white">
      <div className="flex items-center gap-2 text-gray-900 font-medium">{icon}{title}</div>
      <p className="mt-1 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function ProgramCard({ title, points, icon }) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 bg-white">
      <div className="flex items-center gap-2 text-gray-900 font-semibold">{icon}{title}</div>
      <ul className="mt-3 space-y-1 text-sm text-gray-700 list-disc list-inside">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

function TeachingCard({ title, desc }) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
      <div className="flex items-center gap-2 text-gray-900 font-semibold"><BookOpen size={16} />{title}</div>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

function ResearchCard({ title, desc }) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 bg-white">
      <div className="flex items-center gap-2 text-gray-900 font-semibold"><GraduationCap size={16} />{title}</div>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

function Spotlight({ title, desc }) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 bg-white">
      <div className="text-gray-900 font-semibold">{title}</div>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

function Partner({ title, desc, icon }) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
      <div className="flex items-center gap-2 text-gray-900 font-semibold">{icon}{title}</div>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

function Step({ title, desc }) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 bg-white">
      <div className="text-gray-900 font-semibold">{title}</div>
      <p className="mt-2 text-gray-600 text-sm">{desc}</p>
      <a href="#apply" className="mt-3 inline-flex text-indigo-600 text-sm font-medium">Get started</a>
    </div>
  );
}

function Arrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}
