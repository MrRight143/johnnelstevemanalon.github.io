import React from "react";

const Section = ({ id, title, children }) => (
  <section id={id} className="container-narrow py-14">
    <h2 className="section-title">{title}</h2>
    <div className="mt-6">{children}</div>
  </section>
);

const Badge = ({ children }) => <span className="chip">{children}</span>;

export default function App() {
  return (
    <div className="text-gray-800">
      {/* Hero */}
      <header className="bg-gray-900 text-white">
        <div className="container-narrow py-16 md:py-24 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Johnnel Steve Manalon, RCE
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Licensed Civil Engineer — Project Supervision • Structural Design • Cost Estimation
          </p>
          <div className="mt-8 flex items-center gap-3 justify-center md:justify-start">
            <a href="mailto:johnnelstevemanalon@gmail.com" className="btn-primary">Email Me</a>
            <a href="#resume" className="btn-primary">View Resume</a>
            <a href="#projects" className="btn-primary">Projects</a>
          </div>
        </div>
      </header>

      {/* About */}
      <Section id="about" title="About Me">
        <p className="muted">
          Licensed Civil Engineer with over 3 years of experience in both government and private
          sector projects, specializing in site supervision, structural design, cost estimation,
          and project management. Skilled in handling vertical and horizontal works, preparing
          BOQs and estimates, and ensuring compliance with NSCP 2015 and local building codes.
          Experienced from Site Engineer and Engineer I to Project-in-Charge, with a proven
          ability to manage teams, coordinate stakeholders, and deliver projects safely, on time,
          and within budget.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge>Odiongan, Romblon, PH</Badge>
          <Badge>Open to opportunities</Badge>
          <Badge>NSCP 2015</Badge>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Core Competencies & Tools">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="card">
            <h3 className="font-semibold text-gray-900">Core Competencies</h3>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700">
              <li>Site &amp; Project Supervision</li>
              <li>Structural Design &amp; Analysis (NSCP 2015)</li>
              <li>Quantity Surveying &amp; Cost Estimation</li>
              <li>Project Scheduling (MS Project / Primavera – basic)</li>
              <li>BOQ &amp; Program of Works Preparation</li>
              <li>Technical Documentation &amp; As-Built Plans</li>
              <li>Quality Assurance &amp; Safety Compliance</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold text-gray-900">Technical Skills</h3>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700">
              <li>AutoCAD, SketchUp, Lumion (rendering)</li>
              <li>STAAD.Pro (basic), ETABS (basic)</li>
              <li>PlanSwift (basic), Excel BOQ templates</li>
              <li>MS Project, Primavera P6 (basic)</li>
              <li>MS Office Suite</li>
              <li>Computer troubleshooting, documentation, reporting</li>
              <li>Professional Driver’s License</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section id="resume" title="Professional Experience">
        <div className="space-y-5">
          <div className="card">
            <h3 className="font-semibold">Project-in-Charge — L7 Construction, Makati <span className="muted">(2025 – Present)</span></h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
              <li>Directs project execution and daily site operations, manpower, and resources.</li>
              <li>Ensures compliance with plans, specifications, quality standards, and safety protocols.</li>
              <li>Coordinates with clients, subcontractors, and suppliers to meet milestones.</li>
              <li>Prepares and validates BOQs, estimates, and project progress reports.</li>
              <li>Provides on-site engineering solutions and decision-making support.</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold">Engineer I — LGU Odiongan <span className="muted">(2024 – 2025)</span></h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
              <li>Supervised municipal infrastructure projects: cemetery developments, market drainage, roadworks, and water supply.</li>
              <li>Prepared Program of Works (POW), estimates, and BOQs for public projects.</li>
              <li>Conducted site inspections, surveys, and structural planning for government facilities.</li>
              <li>Drafted and processed lease contracts for apartment-type, mausoleum, and garden-type niches.</li>
              <li>Coordinated with municipal engineers, contractors, and stakeholders for compliance.</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold">Site Engineer — Masterman Construction <span className="muted">(2022 – 2024)</span></h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
              <li>Supervised vertical and horizontal projects; monitored site progress and manpower.</li>
              <li>Assisted in cost estimation, quantity take-off, and documentation.</li>
              <li>Ensured compliance with structural plans, specifications, and safety standards.</li>
              <li>Coordinated with foremen, project managers, and subcontractors.</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold">Freelance Civil Engineer &amp; AutoCAD Drafter <span className="muted">(2014 – Present)</span></h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
              <li>Drafting, 3D modeling, and rendering for residential and commercial clients.</li>
              <li>Prepared architectural layouts, structural drawings, and as-built plans.</li>
              <li>Conducted cost estimates and quantity take-offs.</li>
              <li>Rendered interior and exterior perspectives for presentations.</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-semibold">AutoCAD Operator — Romblon State University <span className="muted">(2021 – 2022)</span></h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
              <li>Produced site development drawings, building proposals, and as-built plans.</li>
              <li>Created 3D models and rendered perspectives for university projects.</li>
              <li>Assisted in site surveys and drafting support for engineering works.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Education & Certifications */}
      <Section id="education" title="Education & Certifications">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="card">
            <h3 className="font-semibold">Education</h3>
            <p className="mt-2">
              <strong>Bachelor of Science in Civil Engineering</strong><br />
              Romblon State University – Main Campus
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Certifications & Trainings</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
              <li>Registered Civil Engineer — PRC</li>
              <li>Training in Primavera (Project Scheduling & Management)</li>
              <li>Training in PlanSwift Workshop (Quantity Take-Off & Estimation)</li>
              <li>Professional Driver’s License</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Projects placeholder */}
      <Section id="projects" title="Selected Projects">
        <div className="card">
          <p className="muted">
            Add your project photos, renderings, drawings, or site documentation here.
            You can create a simple grid of images and short descriptions.
          </p>
        </div>
      </Section>

      {/* Contact */}
      <footer className="bg-gray-100">
        <div className="container-narrow py-10 text-center md:text-left">
          <h2 className="text-xl font-semibold text-gray-900">Get in Touch</h2>
          <p className="mt-2 muted">
            Odiongan, Romblon, Philippines •
            <a href="mailto:johnnelstevemanalon@gmail.com" className="underline ml-1">johnnelstevemanalon@gmail.com</a>
          </p>
          <p className="mt-4 text-sm text-gray-500">© 2025 Johnnel Steve Manalon</p>
        </div>
      </footer>
    </div>
  );
}
