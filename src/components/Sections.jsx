import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, BookOpen, Cpu, Users, Building2, Globe, GraduationCap, BadgeCheck, Newspaper, LifeBuoy, Mail, Phone, Search, X, Sparkles } from 'lucide-react';

export default function Sections() {
  // Interactive course catalog state
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [selected, setSelected] = useState(null);

  const tracks = useMemo(() => [
    { id: 'civil', title: 'Civil Service', icon: Users, color: 'indigo', tags: ['Governance','Policy','Law'], blurb: 'Policy labs, GovTech projects, ethics & law for future administrators.', details: [
      'Capstone: Digital Public Infrastructure',
      'Studio: Evidence-based Policymaking',
      'Clinic: Administrative Law & Ethics'
    ] },
    { id: 'eng', title: 'Engineering / Tech', icon: Cpu, color: 'blue', tags: ['AI','Software','IoT'], blurb: 'Software, data, systems design, IoT & robotics with industry partners.', details: [
      'Lab: ML Ops & Model Monitoring',
      'Project: Edge IoT for Smart Campus',
      'Workshop: Human-centered Systems'
    ] },
    { id: 'med', title: 'Medical', icon: BadgeCheck, color: 'emerald', tags: ['Health','Data','Bio'], blurb: 'Health informatics, public health, and bioengineering for impact.', details: [
      'Seminar: Population Health Analytics',
      'Lab: Clinical Data Pipelines',
      'Project: Assistive Bio Devices'
    ] },
    { id: 'biz', title: 'Business / Law', icon: BookOpen, color: 'amber', tags: ['Biz','Law','RegTech'], blurb: 'Entrepreneurship, corporate tech, regulation and intellectual property.', details: [
      'Studio: Venture Design & GTM',
      'Clinic: Data Protection & IP',
      'Playbook: FinOps for Startups'
    ] },
    { id: 'avi', title: 'Aviation', icon: Rocket, color: 'rose', tags: ['Avionics','Safety','Ops'], blurb: 'Avionics, urban air mobility, and operations & data for aviation.', details: [
      'Lab: Flight Safety Systems',
      'Project: eVTOL Operations Sim',
      'Workshop: Aviation Data Graphs'
    ] },
    { id: 'global', title: 'Global Collaborations', icon: Globe, color: 'violet', tags: ['Global','Exchange','Research'], blurb: 'Exchange, joint research, and international mentorship opportunities.', details: [
      'Residency: Partner University Term',
      'Co-authorship: Cross-border Labs',
      'Showcase: Global Demo Day'
    ] },
  ], []);

  const colorMap = {
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-600' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-600' },
    rose: { bg: 'bg-rose-50', text: 'text-rose-600' },
    violet: { bg: 'bg-violet-50', text: 'text-violet-600' },
  };

  const allTags = useMemo(() => ['All', ...Array.from(new Set(tracks.flatMap(t => t.tags)))], [tracks]);

  const filtered = useMemo(() =>
    tracks.filter(t =>
      (activeTag === 'All' || t.tags.includes(activeTag)) &&
      (query.trim() === '' || t.title.toLowerCase().includes(query.toLowerCase()) || t.blurb.toLowerCase().includes(query.toLowerCase()))
    ), [tracks, activeTag, query]
  );

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

      {/* Programs - Interactive Catalog */}
      <section id="programs" className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight flex items-center gap-2">Program Tracks <Sparkles className="text-indigo-600" size={22}/></h2>
              <p className="mt-2 text-gray-600">Search, filter, and peek into modules. Click a card to expand details.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <div className="relative flex-1 min-w-[240px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder="Search programs, modules, or tags"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search programs"
                />
              </div>
            </div>
          </div>

          {/* Filter Chips */}
          <div className="mt-4 flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${activeTag === tag ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'}`}
                aria-pressed={activeTag === tag}
              >
                {tag}
              </button>
            ))}
            {(query || activeTag !== 'All') && (
              <button onClick={() => { setQuery(''); setActiveTag('All'); }} className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200">
                Clear filters
              </button>
            )}
          </div>

          {/* Animated Grid */}
          <motion.div layout className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map(t => (
                <ProgramCard key={t.id} track={t} onOpen={() => setSelected(t)} colorMap={colorMap} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Expanded Drawer / Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0 bg-black/50" onClick={() => setSelected(null)} />
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={`${selected.title} details`}
                initial={{ y: 40, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 40, opacity: 0, scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="relative z-10 w-full sm:max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl border border-gray-200 shadow-xl overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-gray-500">Track</div>
                      <h3 className="text-2xl font-semibold text-gray-900">{selected.title}</h3>
                      <p className="mt-2 text-gray-600">{selected.blurb}</p>
                    </div>
                    <button aria-label="Close" onClick={() => setSelected(null)} className="p-2 rounded-md hover:bg-gray-100">
                      <X size={18} />
                    </button>
                  </div>
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    {selected.details.map((d) => (
                      <div key={d} className="rounded-lg border border-gray-200 p-4 bg-gray-50 text-sm text-gray-700">{d}</div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {selected.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a href="#apply" className="inline-flex items-center rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-500">Apply to this track</a>
                    <a href="#contact" className="inline-flex items-center rounded-md bg-gray-100 text-gray-900 px-4 py-2 text-sm font-medium hover:bg-gray-200">Talk to an advisor</a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
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

function ProgramCard({ track, onOpen, colorMap }) {
  const Icon = track.icon;
  const c = colorMap[track.color] || { bg: 'bg-gray-50', text: 'text-gray-600' };
  return (
    <motion.button
      layout
      onClick={onOpen}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 400, damping: 24 }}
      className="text-left rounded-xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      <div className="flex items-center gap-2 text-gray-900 font-semibold">
        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-md ${c.bg}`}>
          <Icon size={16} className={c.text} />
        </span>
        {track.title}
      </div>
      <p className="mt-3 text-sm text-gray-700">{track.blurb}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {track.tags.map(tag => (
          <span key={tag} className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">{tag}</span>
        ))}
      </div>
      <div className="mt-4 inline-flex items-center text-indigo-600 text-sm font-medium">View modules <Arrow className="ml-1" /></div>
    </motion.button>
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

function Arrow(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-4 h-4 ${props.className ?? ''}`}>
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}
