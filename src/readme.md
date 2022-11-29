TODO: 

** NOT ABLE TO get the browser to display anything

// Add to Assets folder
    // add custom fonts
    // add images project screenshots
        Projects
        1. Dream Job Finder
        2. Employee Tracker
        3. Note Taker
        4. Readme Generator
        5. Work Scheduler
        6. Ecommerce Back-end


// portfolio color scheme
    // black, gray, gold
    // space theme: black, purple

// Header component
    // appears on multiple pages

// Navigation component
    // in the header
    // about me section
    // portfolio section
    // contact section
    // resume section

// Project component
    // image or gif
    // title
    // deployed link
    // github repo link

// Footer component
    // appears on multiple pages

// App.css
    // use color scheme
        // dark mode
        // light mode
    // react-bootstrap framework

// App.js



 <Router>
        <Header >
          <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage}>
          </NavBar>
        </Header>
        <main>
          <Routes>
            <Route path="/" element={<About />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
          </Routes>
          {/* <div> {renderPage(currentPage)} </div> */}
        </main>
        <Footer />
      </Router>