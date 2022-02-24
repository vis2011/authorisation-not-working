class userpasswordil {
    constructor() {
        this.usernameInput = createInput("").attribute("placeholder", "Enter your Username");
        this.PasswordInput = createInput("").attribute("placeholder", "Enter your Password");
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
        var titleup = `Enter Your <br>
    USERNAME and PASSWORD`;
        this.uptitle.html(titleup)
        var usernameText = `Enter your username`;
        this.u.html(usernameText);
        var passwordText = `Enter your password`;
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
            var userInfoRef = database.ref('schools');
            userInfoRef.on("value", (data) => {
                allUsers = data.val();

                users = Object.values(allUsers);
                login = new userpasswordil();


                for (var i = 0; i < users.length; i++) {
                    if (this.usernameInput == users[i].username && this.PasswordInput == users[i].password) {
                        this.Text1 = createElement("h2");
                        this.Text2 = createElement("h2");
                        this.Text1.position(width / 2 - 350, height / 2 - 350);
                        this.Text2.position(width / 2 + 250, height / 2 - 350);
                        this.Text1.class("greeting");
                        this.Text2.class("greeting");
                        var mess1 = `schoolname`;
                        this.Text1.html(mess1)
                        this.Text2.html(users[i].name)

                        this.Text3.position(width / 2 - 350, height / 2 - 250);
                        this.Text4.position(width / 2 + 250, height / 2 - 250);
                        this.Text3.class("greeting");
                        this.Text4.class("greeting");
                        var mess2 = `Registration number`;
                        this.Text3.html(mess2)
                        this.Text4.html(users[i].registrationNo)


                    }

                    if (this.username !== users[i].username && this.password !== users[i].password) {
                        this.Text.position(width / 2 - 150, height / 2 - 350);
                        this.Text.class("greeting");
                        var mess = `Please Register`;
                        this.Text.html(mess);
                    }
                }
            })
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