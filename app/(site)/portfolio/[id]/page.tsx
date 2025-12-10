import { getPortfolioItems, PortfolioItem } from '@/lib/portfolio';
import PortfolioCard from '@/components/PortfolioCard';

export const metadata = {
  title: 'Portfolio - WebSathi',
  description: 'Explore high-quality websites, designs, and digital solutions.',
};

export default async function PortfolioPage() {
  let items: PortfolioItem[] = [];
  let hasError = false;

  try {
    items = await getPortfolioItems();
  } catch (err) {
    hasError = true;
  }

  const featuredItems = items.filter(i => i.featured);
  const regularItems = items.filter(i => !i.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-black pt-24 pb-24 text-white relative">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent drop-shadow-lg">
          Our Work
        </h1>
        <p className="text-gray-300 max-w-lg mx-auto mt-4">
          Discover the digital experiences we've designed and developed.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* Featured Section */}
        {featuredItems.length > 0 && (
          <section>
            <h2 className="text-3xl font-semibold mb-10 text-secondary">🚀 Featured Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {featuredItems.map((item, index) => (
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  key={item.id}
                >
                  <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-white/10 shadow-xl hover:scale-[1.02] transition">
                    <PortfolioCard item={item} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All Projects */}
        <section>
          <h2 className="text-3xl font-semibold mb-10 text-secondary">📁 All Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {regularItems.map((item, index) => (
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                key={item.id}
              >
                <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/10 shadow-xl hover:scale-[1.02] transition">
                  <PortfolioCard item={item} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-12">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">
            Let’s Build Something Amazing
          </h3>
          <p className="text-gray-300 max-w-md mx-auto mt-3">
            From concept to launch — we deliver high-quality digital solutions.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <a className="px-8 py-3 rounded-xl bg-secondary hover:bg-blue-900 transition shadow-lg" href="/contact">
              Start a Project
            </a>
            <a className="px-8 py-3 rounded-xl border border-gray-500 hover:bg-white/10 transition" href="/about">
              About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
