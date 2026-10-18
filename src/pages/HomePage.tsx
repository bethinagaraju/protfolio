import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects limit={2} />
      <Services />
      <Process />
      <Testimonials />
    </>
  );
}
