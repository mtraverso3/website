'use client';

import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {

    return (
        <>
            <ThemeToggle/>

            <div className="container">
                <div className="terminal-prompt">
                    <span className="prompt-user">user@terminal</span>:<span className="prompt-path">~</span>$ man
                    mtraverso<span className="cursor"></span>
                </div>

                <div className="man-header">
                    <span>MTRAVERSO(1)</span>
                    <span className="man-title">Personal Page</span>
                    <span>MTRAVERSO(1)</span>
                </div>

                <section className="section">
                    <h2 className="section-header">NAME</h2>
                    <div className="section-content">
                        <span className="command">Marcos Traverso</span> - Graduate student in Computer Science, Software
                        Engineer
                    </div>
                </section>

                <section className="section">
                    <h2 className="section-header">SYNOPSIS</h2>
                    <div className="section-content synopsis">
                        mtraverso [<span className="option-flag">--education</span>] [<span
                        className="option-flag">--experience</span>] [<span className="option-flag">--contact</span>]
                    </div>
                </section>

                <section className="section">
                    <h2 className="section-header">DESCRIPTION</h2>
                    <div className="section-content">
                        <p>
                            I&apos;m a graduate student at Stevens Institute of Technology pursuing a Master&apos;s in
                            Computer Science with a focus on Machine Learning. I graduated with a Bachelor&apos;s in
                            Computer Science with a minor in Pure and Applied Mathematics.
                        </p>
                        <p style={{marginTop: '8px'}}>
                            My work spans full-stack development, DevOps, natural language processing, and systems programming.
                            I&apos;m interested in building practical tools and exploring the intersection of software engineering
                            and machine learning.
                        </p>
                        <p style={{marginTop: '8px'}}>
                            Currently teaching Computer Architecture and Systems Programming as a Course Assistant at Stevens.
                        </p>
                    </div>
                </section>


                <section className="section">
                    <h2 className="section-header">EXPERIENCE</h2>
                    <div className="section-content">
                        <div className="project-item">
                            <span className="project-name">Stevens Institute of Technology</span> - Course Assistant, 2023-Present
                        </div>

                        <div className="project-item">
                            <span className="project-name">Kyros AI</span> - DevOps Engineer Intern, Summer 2024
                        </div>

                        <div className="project-item">
                            <span className="project-name">Starburst Data</span> - Software Engineer Intern, 2022-2023
                        </div>
                    </div>
                </section>

                <section className="section">
                    <h2 className="section-header">EDUCATION</h2>
                    <div className="section-content">
                        <div className="project-name" style={{marginBottom: '8px'}}>Stevens Institute of Technology</div>
                        <div className="project-item" style={{marginLeft: '20px'}}>
                            M.S. in Computer Science, Graduate Certificate in Machine Learning | Expected 2026
                        </div>
                        <div className="project-item" style={{marginLeft: '20px'}}>
                            B.S. in Computer Science, Minor in Pure and Applied Mathematics | 2021-2025
                        </div>
                    </div>
                </section>

                <section className="section">
                    <h2 className="section-header">SEE ALSO</h2>
                    <div className="section-content">
                        <span className="command">github</span>(1): <a href="https://github.com/mtraverso3"
                                                                       target="_blank"
                                                                       rel="noopener noreferrer">https://github.com/mtraverso3</a><br/>
                        <span className="command">linkedin</span>(1): <a href="https://linkedin.com/in/marcos-traverso"
                                                                         target="_blank"
                                                                         rel="noopener noreferrer">https://linkedin.com/in/marcos-traverso</a><br/>
                        <span className="command">email</span>(1): <a
                        href="mailto:marcos@mtraverso.net">marcos@mtraverso.net</a>
                    </div>
                </section>


                <section className="section">
                    <h2 className="section-header">AUTHOR</h2>
                    <div className="section-content">
                        Written by <span className="command">Marcos Traverso</span>.<br/>
                        For bug reports, collaboration inquiries, and questions, visit:<br/>
                        <a href="https://github.com/mtraverso3" target="_blank"
                           rel="noopener noreferrer">https://github.com/mtraverso3</a>
                    </div>
                </section>

                <div className="man-footer">
                    <span>MTRAVERSO 1.0</span>
                    <span>Last Change: November 3, 2025</span>
                    <span>MTRAVERSO(1)</span>
                </div>
            </div>
        </>
    );
}
