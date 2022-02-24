class homePage {
  constructor() {
    this.loginButton = createButton("login")
    this.signUpButton = createButton("register")
    this.title = createElement("h2")
    this.welcomeText = createElement("h2")
    this.loginText = createElement("h2")
    this.signUpText = createElement("h2")
  }

  setPosition() {
    this.title.position(width / 2 - 420, height / 2 - 350);
    this.welcomeText.position(width / 2 - 460, height / 2 - 280, 50);
    this.loginText.position(width / 2 - 125, height / 2 - 150)
    this.signUpText.position(width / 2 - 130, height / 2)
    this.loginButton.position(width / 2 - 30, height / 2 - 50);
    this.signUpButton.position(width / 2 - 30, height / 2 + 100);
  }
  setElementsStyle() {
    this.title.class("greeting3");
    this.welcomeText.class("greeting4")
    this.loginText.class("greeting5")
    this.signUpText.class("greeting5")
    this.loginButton.class("customButton");
    this.signUpButton.class("customButton");
  }

  hide() {
    this.title.hide();
    this.welcomeText.hide();
    this.loginText.hide();
    this.signUpText.hide();
    this.loginButton.hide();
    this.signUpButton.hide();
  }

  stepsToLogin() {
    Swal.fire({
      title: 'Steps to login',
      icon: 'info',
      timer: 1000000,
      input: 'checkbox',
      inputValue: 0,
      text: 'Step 1 : Give username and password click next If it is invalid it shows it is invalid username or password so give the username that you gave in registration form... ',
      timerProgressBar: true,
      inputPlaceholder:
        'I have read the Steps to Login',
      confirmButtonText:
        'Continue <i class="fa fa-arrow-right"></i>',
      inputValidator: (result) => {
        return !result && 'if you already read click the checkbox and click continue'
      },
    }).then((result) => {
      if (result.isConfirmed) {
        upil = new userpasswordil();
        upil.display();
      }
    })
  }



  validationup() {

    this.uptitle = createElement("h2");
    this.u = createElement("h2");
    this.p = createElement("h2");
    this.NextButton = createButton("Next")
    this.usernameInput = createInput("").attribute("placeholder", "Enter your own Username");
    this.PasswordInput = createInput("").attribute("placeholder", "Enter your own Password");

    this.NextButton.position(width / 2 - 70, height / 1 - 100);
    this.usernameInput.position(width / 2 - 160, height / 2.14 - 100);
    this.PasswordInput.position(width / 2 - 160, height / 2.14 - -10)
    this.uptitle.position(width / 2 - 230, height / 2 - 330);
    this.u.position(width / 2 - 160, height / 2 - 200);
    this.p.position(width / 2 - 160, height / 2 - 80);

    this.usernameInput.class("customInput1");
    this.PasswordInput.class("customInput1");
    this.NextButton.class("customButton");
    this.uptitle.class("greeting4");
    this.u.class("greeting");
    this.p.class("greeting");



    var titleup = `Create Your own <br>
    USERNAME and PASSWORD`;
    this.uptitle.html(titleup)
    var usernameText = `your own username`;
    this.u.html(usernameText);
    var passwordText = `your own password`;
    this.p.html(passwordText)

    this.title.hide();
    this.welcomeText.hide();
    this.loginText.hide();
    this.signUpText.hide();
    this.loginButton.hide();
    this.signUpButton.hide();

    this.NextButton.mousePressed(() => {
      this.validationUP();
    })
  }

  display() {
    var titleText = `School vaccination information center`
    this.title.html(titleText);

    var welcomePart = ` WELCOME! <br>
      Everyone   to   the   school   vaccination   information   center  `
    this.welcomeText.html(welcomePart)

    var loginPart = `if you already registered ,<br>
    click here`
    this.loginText.html(loginPart)

    var signUpPart = `if you did not registered ,<br>
     click here`
    this.signUpText.html(signUpPart)



    this.signUpButton.mousePressed(() => {
      this.title.hide();
      this.welcomeText.hide();
      this.loginText.hide();
      this.signUpText.hide();
      this.loginButton.hide();
      this.signUpButton.hide();
      up = new userpassword();
      up.display();
    })

    this.loginButton.mousePressed(() => {
      this.title.hide();
      this.welcomeText.hide();
      this.loginText.hide();
      this.signUpText.hide();
      this.loginButton.hide();
      this.signUpButton.hide();
      this.stepsToLogin();
    })

    this.setPosition();
    this.setElementsStyle();
  }
}