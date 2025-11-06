export default function Footer() {
  return (
    <footer className="bg-[#0b0e14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold">Hillsinai University</h3>
            <p className="mt-2 text-sm text-white/70">Markaz Knowledge City • Empowering learners with practical skills and global perspectives.</p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="font-medium text-white/90">Quick Links</div>
              <ul className="mt-2 space-y-1">
                <li><a href="#programs" className="text-white/70 hover:text-white">Programs</a></li>
                <li><a href="#research" className="text-white/70 hover:text-white">Research</a></li>
                <li><a href="#apply" className="text-white/70 hover:text-white">Apply</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium text-white/90">Legal</div>
              <ul className="mt-2 space-y-1">
                <li><a href="#" className="text-white/70 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Accessibility</a></li>
              </ul>
            </div>
          </div>
          <div className="text-sm text-white/70">
            <p>Designed for clarity, performance, and future expansion.</p>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/60">© {new Date().getFullYear()} Hillsinai University. All rights reserved.</div>
      </div>
    </footer>
  );
}
