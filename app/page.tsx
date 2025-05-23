import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#051736] text-white">
      {/* Header */}
      <header className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/test/placeholder.svg?height=30&width=30"
            alt="Glair Logo"
            width={30}
            height={30}
            className="text-white"
          />
          <span className="font-semibold text-white">glair.ai</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#"
            className="text-sm font-medium text-white/80 hover:text-white"
          >
            Product
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-white/80 hover:text-white flex items-center"
          >
            Consulting <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-white/80 hover:text-white"
          >
            Our Company
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-white/80 hover:text-white"
          >
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="bg-[#00A8FF] hover:bg-[#0090DD] text-white rounded-md">
            Contact Us
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-[#00A8FF] font-medium mb-2">GLAIR eKYC</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Improve customer experience using eKYC
            </h1>
            <p className="text-white/80 mb-8">
              Secure and reliable identity verification solution that helps you
              verify customers using face biometric and identity documents.
            </p>
            <Button className="bg-[#00A8FF] hover:bg-[#0090DD] text-white rounded-md">
              Learn More
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[500px]">
              <div className="absolute top-0 left-0 w-full h-full bg-[#0A2550] rounded-3xl border-4 border-[#0D3166] overflow-hidden">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-8">
                    <div className="w-12 h-12 rounded-full bg-[#051736] overflow-hidden">
                      <Image
                        src="/test/placeholder.svg?height=48&width=48"
                        alt="User"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#051736] overflow-hidden">
                      <Image
                        src="/test/placeholder.svg?height=48&width=48"
                        alt="User"
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>
                  <div className="bg-[#051736] rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <span className="text-sm">Live Detection</span>
                    </div>
                    <div className="w-full h-32 bg-[#0A2550] rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-8">
          Trusted by the most prestigious companies
        </h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          <Image
            src="/test/placeholder.svg?height=40&width=80"
            alt="APP"
            width={80}
            height={40}
            className="opacity-80"
          />
          <Image
            src="/test/placeholder.svg?height=40&width=80"
            alt="M"
            width={80}
            height={40}
            className="opacity-80"
          />
          <Image
            src="/test/placeholder.svg?height=40&width=80"
            alt="BCA"
            width={80}
            height={40}
            className="opacity-80"
          />
          <Image
            src="/test/placeholder.svg?height=40&width=80"
            alt="BCA Digital"
            width={80}
            height={40}
            className="opacity-80"
          />
          <Image
            src="/test/placeholder.svg?height=40&width=80"
            alt="BCA Finance"
            width={80}
            height={40}
            className="opacity-80"
          />
        </div>
      </section>

      {/* Digital Transformation */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Accelerate digital transformation with ABCD-X,
          <br />
          we build services with{" "}
          <span className="text-[#00A8FF]">Artificial Intelligence</span>
          <br />
          technology in a secure environment
        </h2>
        <div className="mt-8 relative aspect-video max-w-4xl mx-auto">
          <Image
            src="/test/placeholder.svg?height=600&width=1000"
            alt="AI Technology"
            width={1000}
            height={600}
            className="rounded-lg object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#00A8FF]/30 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#00A8FF] flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-[#00A8FF] font-medium">OUR SERVICE</div>
      </section>

      {/* GLAIR Product */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              GLAIR Product
            </h2>
            <p className="text-white/80 mb-6">
              GLAIR builds AI products that can solve business problems. Our
              products are ready-to-use and can be implemented right away.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00A8FF]"></div>
                <span>eKYC</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00A8FF]"></div>
                <span>Document OCR</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00A8FF]"></div>
                <span>Analytics</span>
              </li>
            </ul>
            <Button className="bg-[#00A8FF] hover:bg-[#0090DD] text-white rounded-md">
              Explore Products
            </Button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/test/placeholder.svg?height=300&width=400"
              alt="GLAIR Product"
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* GLAIR Consulting */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <Image
              src="/test/placeholder.svg?height=300&width=400"
              alt="GLAIR Consulting"
              width={400}
              height={300}
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              GLAIR Consulting
            </h2>
            <p className="text-white/80 mb-6">
              GLAIR provides ready-to-implement enterprise-class AI solutions to
              solve your business problems. Our team consists of experts in:
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00A8FF]"></div>
                    <span>Computer Vision</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00A8FF]"></div>
                    <span>Natural Language</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00A8FF]"></div>
                    <span>Data Analytics</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00A8FF]"></div>
                    <span>Blockchain</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00A8FF]"></div>
                    <span>Recommendation System</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00A8FF]"></div>
                    <span>Security</span>
                  </li>
                </ul>
              </div>
            </div>
            <Button className="bg-[#00A8FF] hover:bg-[#0090DD] text-white rounded-md">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* ABCD-X Technology */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          This is how ABCD-X technology make your business{" "}
          <span className="text-[#00A8FF]">faster</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Artificial Intelligence",
              icon: "🧠",
              description:
                "Leverage AI to automate processes and workflows, enabling your business to operate more efficiently and effectively.",
            },
            {
              title: "Blockchain",
              icon: "🔗",
              description:
                "Power your business with distributed ledger technology for enhanced transparency, traceability, and security.",
            },
            {
              title: "Cloud",
              icon: "☁️",
              description:
                "Leverage flexible, scalable, and cost-effective cloud solutions that eliminate the need for physical infrastructure.",
            },
            {
              title: "Data",
              icon: "📊",
              description:
                "Turn your data into valuable insights through advanced analytics, helping you make better decisions for your business.",
            },
            {
              title: "Security",
              icon: "🔒",
              description:
                "Implement the best and most advanced security solutions to protect your ecosystem from cyberattacks.",
            },
            {
              title: "Web and Mobile",
              icon: "📱",
              description:
                "Bring all technology together to create beautiful and functional apps to reach and affect your users.",
            },
          ].map((tech, index) => (
            <div key={index} className="bg-[#0A2550] rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-[#00A8FF]/20 flex items-center justify-center mb-4">
                <span className="text-2xl">{tech.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
              <p className="text-white/70 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          What our clients say about us
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white text-[#051736] rounded-xl p-6">
            <div className="text-[#00A8FF] text-4xl mb-4">"</div>
            <p className="mb-4">
              Working with GLAIR is a great experience. They delivered a
              good-looking, functional product that meets our requirements.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/test/placeholder.svg?height=40&width=40"
                  alt="Client"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <div className="font-medium">Sutanto Hendrawan</div>
                <div className="text-xs text-[#051736]/70">BCA Digital</div>
              </div>
            </div>
          </div>
          <div className="bg-white text-[#051736] rounded-xl p-6">
            <div className="text-[#00A8FF] text-4xl mb-4">"</div>
            <p className="mb-4">
              GLAIR team is organized and professional. They understand our
              needs and deliver the best solution.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/test/placeholder.svg?height=40&width=40"
                  alt="Client"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <div className="font-medium">Client Name</div>
                <div className="text-xs text-[#051736]/70">BCA</div>
              </div>
            </div>
          </div>
          <div className="bg-white text-[#051736] rounded-xl p-6">
            <div className="text-[#00A8FF] text-4xl mb-4">"</div>
            <p className="mb-4">
              GLAIR provides us with a quick solution that we can implement
              right away. Their team is very helpful in every step of the
              project.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/test/placeholder.svg?height=40&width=40"
                  alt="Client"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <div className="font-medium">Bayu Dwiputra</div>
                <div className="text-xs text-[#051736]/70">Company</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Our Partner
        </h2>
        <div className="flex flex-wrap justify-center gap-8 items-center mb-8">
          <Image
            src="/test/placeholder.svg?height=60&width=120"
            alt="AWS"
            width={120}
            height={60}
            className="opacity-80"
          />
          <Image
            src="/test/placeholder.svg?height=60&width=120"
            alt="Intel"
            width={120}
            height={60}
            className="opacity-80"
          />
          <Image
            src="/test/placeholder.svg?height=60&width=120"
            alt="Consensys"
            width={120}
            height={60}
            className="opacity-80"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          <Image
            src="/test/placeholder.svg?height=40&width=80"
            alt="Partner"
            width={80}
            height={40}
            className="opacity-80"
          />
          <Image
            src="/test/placeholder.svg?height=40&width=80"
            alt="Partner"
            width={80}
            height={40}
            className="opacity-80"
          />
          <Image
            src="/test/placeholder.svg?height=40&width=80"
            alt="Partner"
            width={80}
            height={40}
            className="opacity-80"
          />
          <Image
            src="/test/placeholder.svg?height=40&width=80"
            alt="Partner"
            width={80}
            height={40}
            className="opacity-80"
          />
          <Image
            src="/test/placeholder.svg?height=40&width=80"
            alt="Partner"
            width={80}
            height={40}
            className="opacity-80"
          />
          <Image
            src="/test/placeholder.svg?height=40&width=80"
            alt="Partner"
            width={80}
            height={40}
            className="opacity-80"
          />
          <Image
            src="/test/placeholder.svg?height=40&width=80"
            alt="Partner"
            width={80}
            height={40}
            className="opacity-80"
          />
          <Image
            src="/test/placeholder.svg?height=40&width=80"
            alt="Partner"
            width={80}
            height={40}
            className="opacity-80"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-center mb-12">
          <div className="w-12 h-12 rounded-full bg-[#0A2550] flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-[#00A8FF]" />
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Ready to accelerate your digital transformation?
        </h2>
        <p className="text-center text-white/80 mb-6">
          Send us an email, and we will answer your questions regarding our
          products and services.
        </p>
        <div className="flex justify-center">
          <Button className="bg-[#00A8FF] hover:bg-[#0090DD] text-white rounded-md">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto pt-12 pb-6 border-t border-[#0A2550]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="/test/placeholder.svg?height=30&width=30"
                alt="Glair Logo"
                width={30}
                height={30}
                className="text-white"
              />
              <span className="font-semibold text-white">glair.ai</span>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-white/80 hover:text-white">
                Follow Us
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-[#0A2550] flex items-center justify-center"
              >
                <Image
                  src="/test/placeholder.svg?height=16&width=16"
                  alt="Facebook"
                  width={16}
                  height={16}
                />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-[#0A2550] flex items-center justify-center"
              >
                <Image
                  src="/test/placeholder.svg?height=16&width=16"
                  alt="Instagram"
                  width={16}
                  height={16}
                />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-[#0A2550] flex items-center justify-center"
              >
                <Image
                  src="/test/placeholder.svg?height=16&width=16"
                  alt="LinkedIn"
                  width={16}
                  height={16}
                />
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="text-sm text-white/80">
                Sampoerna Strategic Square, 27th Fl.
                <br />
                Jl. Jenderal Sudirman Kav. 45-46
                <br />
                Jakarta 12930
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">MENU</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <Link href="#" className="hover:text-white">
                    Product
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Consulting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Our Company
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">LEGAL</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">CONTACT</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <Link
                    href="mailto:hello@glair.ai"
                    className="hover:text-white flex items-center gap-2"
                  >
                    <Image
                      src="/test/placeholder.svg?height=16&width=16"
                      alt="Email"
                      width={16}
                      height={16}
                    />
                    hello@glair.ai
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Apply
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-white/60">
            © 2023 GLAIR. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
