export default function Resume() {
  return (
    <main className="page-content">
      <h1>Resume</h1>

      <section>
        <h2>Contact</h2>
        <p>
          Your Name<br />
          Email: <a href="mailto:youremail@example.com">youremail@example.com</a><br />
          Phone: (123) 456-7890<br />
          Location: City, State, Country<br />
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{' '}
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </section>

      <section>
        <h2>Summary</h2>
        <p>
          Detail-oriented software engineer with experience in building scalable web applications, passionate about clean design and performant user experiences. Skilled in JavaScript, React, Next.js, and backend technologies.
        </p>
      </section>

      <section>
        <h2>Experience</h2>
        <div>
          <h3>Software Engineer Intern</h3>
          <p><em>Tech Company Name — Summer 2024</em></p>
          <ul>
            <li>Developed new features using React and Next.js improving user engagement by 15%</li>
            <li>Collaborated with cross-functional teams to deliver seamless product updates</li>
            <li>Implemented unit and integration tests to improve code quality and reliability</li>
          </ul>
        </div>

        <div>
          <h3>Junior Developer</h3>
          <p><em>Another Company — Jan 2023 to Dec 2023</em></p>
          <ul>
            <li>Maintained and enhanced legacy web applications built on JavaScript and Node.js</li>
            <li>Optimized database queries, reducing load times by 20%</li>
            <li>Participated in code reviews and agile sprint planning</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <p><strong>University Name</strong> — B.S. Computer Science</p>
        <p>Graduation: June 2025</p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>JavaScript, TypeScript, React, Next.js</li>
          <li>Node.js, Express, REST APIs</li>
          <li>HTML5, CSS3, Tailwind CSS</li>
          <li>Git, Agile/Scrum</li>
          <li>SQL, MongoDB</li>
        </ul>
      </section>
    </main>
  )
}
