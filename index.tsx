import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const SPECIALITIES = [
  {
    tag: '01',
    name: 'General Medicine',
    copy: 'Everyday illness, chronic conditions, fevers, diabetes and blood-pressure management, handled with careful diagnosis and honest follow-up.',
  },
  {
    tag: '02',
    name: 'Obstetrics & Gynaecology',
    copy: 'Pregnancy care from the first scan to delivery, along with women\'s health consultations, in a calm and private setting.',
  },
  {
    tag: '03',
    name: 'Paediatrics',
    copy: 'Growth checks, vaccinations and treatment for children, delivered patiently and in language parents can trust.',
  },
]

const HOURS = [
  ['Monday – Saturday', '9:00 AM – 8:30 PM'],
  ['Sunday', '9:00 AM – 1:00 PM'],
  ['Emergencies', 'Attended around the clock'],
]

function HomePage() {
  const [navSolid, setNavSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{ background: 'var(--paper)' }}>
      {/* Nav */}
      <header
        className="fixed top-0 inset-x-0 z-40 transition-colors duration-300"
        style={{
          background: navSolid ? 'rgba(246,241,231,0.92)' : 'transparent',
          backdropFilter: navSolid ? 'blur(10px)' : 'none',
          borderBottom: navSolid ? '1px solid var(--line)' : '1px solid transparent',
        }}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <span
              className="inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-semibold"
              style={{ background: 'var(--teal)', color: 'var(--paper)' }}
            >
              K
            </span>
            <span className="display text-lg" style={{ color: 'var(--teal-deep)' }}>
  Kartikeya Multispeciality Hospitals
</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: 'var(--ink)' }}>
            <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
            <a href="#care" className="hover:opacity-60 transition-opacity">Specialities</a>
            <a href="#director" className="hover:opacity-60 transition-opacity">Our Director</a>
            <a href="#visit" className="hover:opacity-60 transition-opacity">Visit</a>
          </div>
          <a
            href="tel:8331848844"
            className="text-sm font-semibold px-4 py-2 rounded-full transition-transform hover:scale-105"
            style={{ background: 'var(--terracotta)', color: '#fff' }}
          >
            Call 83318 48844
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div
          className="absolute -top-24 -right-40 w-[560px] h-[560px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, var(--terracotta-soft), transparent 70%)' }}
        />
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center relative">
          <div className="reveal">
            <p
              className="text-xs tracking-[0.2em] uppercase font-semibold mb-5"
              style={{ color: 'var(--terracotta)' }}
            >
              Divili · Pithapuram · Kakinada
            </p>
            <h1
              className="display text-[2.6rem] leading-[1.05] md:text-6xl mb-6"
              style={{ color: 'var(--teal-deep)' }}
            >
              Careful medicine,
              <br />
              close to home.
            </h1>
            <p className="text-lg max-w-md mb-9 leading-relaxed" style={{ color: '#3d4a44' }}>
              Kartikeya Multispeciality Hospital brings general medicine, women's
              health and child care under one roof on the Divili main bazar road,
              led by Dr. Pasupuleti Santhosh Kumar and a team that knows this
              community by name.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:8331848844"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-transform hover:scale-105"
                style={{ background: 'var(--teal)', color: 'var(--paper)' }}
              >
                Call for an appointment
              </a>
              <a
                href="#visit"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold border transition-colors hover:bg-[var(--paper-2)]"
                style={{ borderColor: 'var(--teal)', color: 'var(--teal-deep)' }}
              >
                Get directions
              </a>
            </div>
          </div>

          <div className="relative reveal" style={{ animationDelay: '0.15s' }}>
            <div
              className="rounded-[2rem] overflow-hidden shadow-2xl"
              style={{ aspectRatio: '4/5', border: '6px solid var(--paper)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80"
                alt="Hospital corridor with warm natural light"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -left-8 rounded-2xl px-6 py-5 shadow-xl hidden sm:block"
              style={{ background: 'var(--teal-deep)', color: 'var(--paper)' }}
            >
              <p className="display text-3xl leading-none">3</p>
              <p className="text-xs uppercase tracking-wide opacity-80 mt-1">
                core specialities
                <br />
                under one roof
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24" style={{ background: 'var(--paper-2)' }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
          <h2 className="display text-3xl md:text-4xl" style={{ color: 'var(--teal-deep)' }}>
            A hospital built around the people of Divili.
          </h2>
          <div className="space-y-5 text-[1.05rem] leading-relaxed" style={{ color: '#3d4a44' }}>
            <p>
              Kartikeya Multispeciality Hospital sits on the main bazar road at
              7/34, Divili, in Pithapuram mandal of the Kakinada district. For
              families here, that means proper medical attention no longer
              means a long trip out of town.
            </p>
            <p>
              The hospital is organised around three departments that cover
              the most common needs of a growing town: general medicine for
              day-to-day health, obstetrics and gynaecology for expecting
              mothers and women's health, and paediatrics for infants and
              growing children. Every case is seen personally rather than
              rushed through a queue.
            </p>
          </div>
        </div>
      </section>

      {/* Specialities */}
      <section id="care" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase font-semibold mb-3" style={{ color: 'var(--terracotta)' }}>
            What we treat
          </p>
          <h2 className="display text-3xl md:text-4xl mb-14 max-w-xl" style={{ color: 'var(--teal-deep)' }}>
            Three specialities, one dependable team.
          </h2>

          <div className="space-y-0">
            {SPECIALITIES.map((s, i) => (
              <div
                key={s.tag}
                className={`grid md:grid-cols-[100px_1fr] gap-6 py-9 items-start ${
                  i !== 0 ? 'border-t' : ''
                }`}
                style={{ borderColor: 'var(--line)' }}
              >
                <span className="display text-4xl" style={{ color: 'var(--terracotta-soft)' }}>
                  {s.tag}
                </span>
                <div className="grid md:grid-cols-[1fr_1.4fr] gap-6">
                  <h3 className="display text-2xl" style={{ color: 'var(--teal-deep)' }}>
                    {s.name}
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#3d4a44' }}>
                    {s.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director */}
      <section id="director" className="py-24" style={{ background: 'var(--teal-deep)' }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
          <div className="relative">
            <div
              className="rounded-[1.75rem] overflow-hidden"
              style={{ aspectRatio: '4/5', border: '5px solid rgba(246,241,231,0.15)' }}
            >
              <img
                src="https://images1-fabric.practo.com/doctor/618453/dr-devaraj-r-5e2032a8e9921.jpeg"
                alt="Portrait of a senior physician in a consultation room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div style={{ color: 'var(--paper)' }}>
            <p className="text-xs tracking-[0.2em] uppercase font-semibold mb-3" style={{ color: 'var(--terracotta-soft)' }}>
              Managing Director
            </p>
            <h2 className="display text-3xl md:text-4xl mb-5">
              Dr. Pasupuleti Santhosh Kumar
            </h2>
            <p className="leading-relaxed opacity-90 max-w-lg mb-6">
              Dr. Santhosh Kumar founded Kartikeya Multispeciality Hospital
              with a simple aim — that Divili should not need to send its
              patients elsewhere for reliable care. He continues to see
              patients directly alongside leading the hospital's day-to-day
              work, and is known locally for taking the time to explain a
              diagnosis rather than rushing to the next patient.
            </p>
            <a
              href="tel:8331848844"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-transform hover:scale-105"
              style={{ background: 'var(--terracotta)', color: '#fff' }}
            >
              Speak with the hospital · 83318 48844
            </a>
          </div>
        </div>
      </section>

      {/* Visit / contact */}
      <section id="visit" className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div
            className="rounded-[1.75rem] p-9"
            style={{ background: 'var(--paper-2)', border: '1px solid var(--line)' }}
          >
            <h3 className="display text-2xl mb-6" style={{ color: 'var(--teal-deep)' }}>
              Find us
            </h3>
            <dl className="space-y-5 text-[1.02rem]" style={{ color: '#3d4a44' }}>
              <div>
                <dt className="text-xs uppercase tracking-wide font-semibold mb-1" style={{ color: 'var(--terracotta)' }}>
                  Address
                </dt>
                <dd>
                  7/34, Main Bazar, Divili, Pithapuram,
                  <br />
                  Kakinada District, Andhra Pradesh
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide font-semibold mb-1" style={{ color: 'var(--terracotta)' }}>
                  Phone
                </dt>
                <dd>
                  <a href="tel:8331848844" className="hover:underline">
                    8331 848 844
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide font-semibold mb-1" style={{ color: 'var(--terracotta)' }}>
                  Managing Director
                </dt>
                <dd>Dr. Pasupuleti Santhosh Kumar</dd>
              </div>
            </dl>
          </div>

          <div
            className="rounded-[1.75rem] p-9"
            style={{ background: 'var(--teal)', color: 'var(--paper)' }}
          >
            <h3 className="display text-2xl mb-6">Hospital hours</h3>
            <div className="space-y-4">
              {HOURS.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between pb-4 border-b"
                  style={{ borderColor: 'rgba(246,241,231,0.25)' }}
                >
                  <span className="opacity-85">{label}</span>
                  <span className="font-semibold text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10" style={{ background: 'var(--teal-deep)', color: 'rgba(246,241,231,0.7)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} Kartikeya Multispeciality Hospital, Divili.</p>
          <p>7/34, Main Bazar, Divili · Pithapuram · Kakinada</p>
        </div>
      </footer>
    </div>
  )
}
