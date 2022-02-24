class userpassword {
    constructor() {
        this.usernameInput = createInput("").attribute("placeholder", "Enter your own Username");
        this.PasswordInput = createInput("").attribute("placeholder", "Enter your own Password");
        this.NextButton = createButton("Next");
        this.uptitle = createElement("h2");
        this.u = createElement("h2");
        this.p = createElement("h2");
        this.eyeOpen = createImg("eye open.png");
        this.eyeClose = createImg("eye close.png");
    }

    setElementPosition() {
        this.NextButton.position(width / 2 - 70, height / 1 - 100);
        this.usernameInput.position(width / 2 - 160, height / 2.14 - 100);
        this.PasswordInput.position(width / 2 - 160, height / 2.14 - -10);
        this.uptitle.position(width / 2 - 230, height / 2 - 330);
        this.u.position(width / 2 - 160, height / 2 - 200);
        this.p.position(width / 2 - 160, height / 2 - 80);
        this.eyeClose.position(width / 2 - -150, height / 2.14 - -25);
        this.eyeOpen.position(width / 2 - -150, height / 2.14 - -25);
    }

    hide() {
        this.PasswordInput.hide();
        this.NextButton.hide();
    }

    setElementsStyle() {
        this.NextButton.class("customButton");
        this.usernameInput.class("customInput1");
        this.PasswordInput.class("customInput2");
        this.uptitle.class("greeting4");
        this.u.class("greeting");
        this.p.class("greeting");
        this.eyeOpen.class("size");
        this.eyeClose.class("size");
    }

    handleMousePressed() {
        this.eyeClose.hide();
        var titleup = `Create Your own <br>
    USERNAME and PASSWORD`;
        this.uptitle.html(titleup)
        var usernameText = `your own username`;
        this.u.html(usernameText);
        var passwordText = `your own password`;
        this.p.html(passwordText);

        this.eyeOpen.mousePressed(() => {
            this.eyeOpen.hide();
            this.eyeClose.show();
            this.PasswordInput.class("customInput1");
            this.eyeClose.mousePressed(() => {
                this.eyeClose.hide();
                this.eyeOpen.show();
                this.PasswordInput.class("customInput2");
            })
        })

        this.NextButton.mousePressed(() => {
            this.validationUP();
        })
    }

    validationUP() {
        this.uName = this.usernameInput.value();
        this.pName = this.PasswordInput.value();
        if (this.uName == "" || this.pName == "") {
            Swal.fire({
                title: 'fill all the details',
                icon: 'error'
            });
        }
        else {
            this.eyeClose.hide();
            this.eyeOpen.hide();
            this.usernameInput.hide();
            this.PasswordInput.hide();
            this.NextButton.hide();
            this.uptitle.hide();
            this.u.hide();
            this.p.hide();
            Swal.fire({
                title: 'Steps to get the vaccine',
                icon: 'info',
                timer: 10000,
                input: 'checkbox',
                inputPlaceholder:
                    'I have read the Steps to Register',
                text: 'So , First you should give the details clearly or else you wont get vaccine ',
                timerProgressBar: true,
                inputValidator: (result) => {
                    return !result && 'if you already read click the checkbox and click continue'
                },
            })
            gameState = 2;
            form = new Form();
            form.display();
            school = new School();
            schoolCount = school.getCount();
            school.username = this.uName;
            school.password = this.pName;
            console.log(school.password)
            console.log(school.username)
        }
    }

    display() {
        this.handleMousePressed();
        this.setElementPosition();
        this.setElementsStyle();
    }
}