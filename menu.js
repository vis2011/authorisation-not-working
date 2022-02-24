class menuImage{
    constructor(){
        this.menuButton = createImg("menu.png","app title")
    }

  setElementPosition(){
    this.menuButton.position(10,20,3,3);
  }

  setElementStyle(){
    this.menuButton.class("appTitle")
  }

  display(){
      this.setElementPosition();
  }
}