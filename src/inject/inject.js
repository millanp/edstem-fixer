window.onload = async () => {
    
 while (!document.querySelector('.table-listing-row')) {
     await new Promise(r => setTimeout(r, 500));
 }
 
 function due(assignment) {
    const timeElem = assignment.querySelector("time");
    if (timeElem) {
        return new Date(timeElem.dateTime);
    } else {
        return 0;
    }
  }
  
  document.querySelectorAll('.lesi-list-container > div').forEach(e => e.style.display = "none");
  
  document.querySelector('.lesi-list-container').insertAdjacentHTML('beforeend', `
    <div id="fixer-homeworks">
      <div class="lesson-module-header">
        <span class="lesson-module-header-name">Homework</span>
      </div>
    </div>
  `);

  document.querySelector('.lesi-list-container').insertAdjacentHTML('beforeend', `
    <div id="fixer-readings">
      <div class="lesson-module-header">
        <span class="lesson-module-header-name">Readings</span>
      </div>
    </div>
  `);
  
  document.querySelector('.lesi-list-container').insertAdjacentHTML('beforeend', `
    <div id="fixer-lectures">
      <div class="lesson-module-header">
        <span class="lesson-module-header-name">Lectures</span>
      </div>
    </div>
  `);
  
  document.querySelector('.lesi-list-container').insertAdjacentHTML('beforeend', `
    <div id="fixer-labs">
      <div class="lesson-module-header">
        <span class="lesson-module-header-name">Labs</span>
      </div>
    </div>
  `);
  
  document.querySelector('.lesi-list-container').insertAdjacentHTML('beforeend', `
    <div id="fixer-exams">
      <div class="lesson-module-header">
        <span class="lesson-module-header-name">Exams</span>
      </div>
    </div>
  `);
  
  document.querySelector('.lesi-list-container').insertAdjacentHTML('beforeend', `
    <div id="fixer-sections">
      <div class="lesson-module-header">
        <span class="lesson-module-header-name">Sections</span>
      </div>
    </div>
  `);
  
  function category(assignment) {
    if (assignment.querySelector(".lesson-icon-octave")) {
      return document.getElementById('fixer-lectures'); // Lecture
    }
    if (assignment.querySelector(".lesson-icon-unix")) {
      return document.getElementById('fixer-labs'); // Lab
    }
    if (assignment.querySelector(".lesson-icon-general")) {
      return document.getElementById('fixer-readings');  // Reading
    }
    if (assignment.querySelector(".lesson-icon-karel")) {
      return document.getElementById('fixer-homeworks'); // Homework
    }
    if (assignment.querySelector(".lesson-icon-ruby")) {
      return document.getElementById('fixer-exams'); // Exam
    }
    if (assignment.querySelector(".lesson-icon-c")) {
      return document.getElementById('fixer-sections'); // Section
    }
  }
  
  const assignments = [...document.querySelectorAll('.table-listing-row')];
  
  assignments.sort((a1,a2) => {
    return due(a2) - due(a1);
  }).forEach(a => {
    category(a).appendChild(a);
  });
  
  
}