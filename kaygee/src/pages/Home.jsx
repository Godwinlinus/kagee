import React from 'react';
import Hero from '../components/Hero'
import Project from '../components/Project'
import Experience from '../components/Experience';
export default function Home() {
  return (
    <section>
      <Hero />
      <Project />
      <section id="experience">
        <Experience />
      </section>
      
      
    </section>
  );
}
