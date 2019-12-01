const studentContainer = document.querySelector('.students');

const peterParker = new Student("Peter Parker", 2018, 17, false, "pp@aol.com")
const enderWiggin = new Student("Ender Wiggin", 2015, 45,true,"pwiggin@hotmail.com")
const homerSimpson = new Student("Homer Simpson",2014,122,true,"chunkylover53@aol.com")

let myStudents = [peterParker,enderWiggin,homerSimpson];

function createButton() {
  const button = document.createElement('button');
  button.className = "button";
  button.innerText = "Add Student";
  button.addEventListener('click', () => {
    createForm();
  })
  studentContainer.appendChild(button);
}

function createForm() {

  // creates form
  const form = document.createElement('form');
  form.className = "form";
  studentContainer.appendChild(form);

  // creates form elements

  // name label
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for","name");
  nameLabel.innerText = "Name:"
  form.appendChild(nameLabel);

  // name input
  const name = document.createElement('input');
  name.className = 'form-element';
  name.id = "name";
  name.type = "text"
  form.appendChild(name);

  // admit year label
  const admitYearLabel = document.createElement("label");
  admitYearLabel.setAttribute("for","admitYear");
  admitYearLabel.innerText = "Admit Year:"
  form.appendChild(admitYearLabel);

  // admit year input
  const admitYear = document.createElement('input');
  admitYear.className = 'form-element';
  admitYear.id = "admitYear";
  admitYear.type = "text"
  form.appendChild(admitYear);

  // credits earned label
  const creditsEarnedLabel = document.createElement("label");
  creditsEarnedLabel.setAttribute("for","creditsEarned");
  creditsEarnedLabel.innerText = "Credits Earned:"
  form.appendChild(creditsEarnedLabel);

  // credits earned input
  const creditsEarned = document.createElement('input');
  creditsEarned.className = 'form-element';
  creditsEarned.id = "creditsEarned";
  creditsEarned.type = "text"
  form.appendChild(creditsEarned);

  // concentration declared label
  const concentrationDeclaredLabel = document.createElement("label");
  concentrationDeclaredLabel.setAttribute("for","concentrationDeclared");
  concentrationDeclaredLabel.innerText = "Concentration Declared:"
  form.appendChild(concentrationDeclaredLabel);

  // concentration declared input
  const concentrationDeclared = document.createElement('input');
  concentrationDeclared.className = 'form-element';
  concentrationDeclared.id = "concentrationDeclared";
  concentrationDeclared.type = "text"
  form.appendChild(concentrationDeclared);

  // email label
  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for","email");
  emailLabel.innerText = "Email:"
  form.appendChild(emailLabel);

  // email input
  const email = document.createElement('input');
  email.className = 'form-element';
  email.id = "email";
  email.type = "text"
  form.appendChild(email);

  // submit button
  const submit = document.createElement('input');
  submit.type = "submit";
  submit.value = "Submit";
  form.appendChild(submit);
}

function Student(name,admitYear,creditsEarned,concDeclared,email) {
  this.name = name
  this.admitYear = admitYear
  this.creditsEarned = creditsEarned
  this.concDeclared = function() {
    return (concDeclared ? "Already declared" : "Not yet declared" );
  }
  this.email = email
  this.info = function() {
    return `Name: ${name}, Admit Year: ${admitYear}, Credits Earned: ${creditsEarned}, Concentration: ${this.concDeclared()}.`
  }
}

function addStudent() {
  // do stuff here
}

function render(myStudents) {

  studentContainer.innerHTML = '';
  createButton();
  
  myStudents.forEach( function (element) {
    
    // creates card
    const card = document.createElement('div');
    card.className = "card";
    studentContainer.appendChild(card);

    // appends each student to created card
    const student = document.createElement('div');
    student.className = "student";
    card.appendChild(student);

    // appends student info to each card

    const studentName = document.createElement('p');
    studentName.className = "student-info";
    studentName.innerText = `Name: ${element.name}`;
    student.appendChild(studentName);

    const admitYear = document.createElement('p')
    admitYear.className = "student-info";
    admitYear.innerText = `Admit Year: ${element.admitYear}`;
    student.appendChild(admitYear);

    const creditsEarned = document.createElement('p');
    creditsEarned.className = "student-info";
    creditsEarned.innerText = `Credits Earned: ${element.creditsEarned}`;
    student.appendChild(creditsEarned);

    const concDeclared = document.createElement('p');
    concDeclared.className = "student-info";
    concDeclared.innerText = `Concentration Declared? ${element.concDeclared()}`;
    student.appendChild(concDeclared);

    const email = document.createElement('a');
    email.className = "student-info";
    email.href = `mailto:${element.email}`
    email.innerText = element.email;
    student.appendChild(email);
  });
};

render(myStudents);