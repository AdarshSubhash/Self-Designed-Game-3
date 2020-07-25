class Button{

    constructor() {
        this.Fbutton = createButton('Add Fuel');
        this.Hbutton = createButton('Add Health');
      }
      hide(){
        this.Fbutton.hide();
        this.Hbutton.hide();
      }
      display(){
        
        this.Fbutton.position(displayWidth/10, displayHeight/10);
        this.Hbutton.position(displayWidth/12, displayHeight/10);
        this.Fbutton.mousePressed(()=>{
        this.Fbutton.hide();
        
        });
        
        this.Hbutton.mousePressed(()=>{
          this.Hbutton.hide();
          
          });
        };
    
        
      }
    
    
