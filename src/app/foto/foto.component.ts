import { Component, Input } from "@angular/core";

@Component({
selector:'foto',
//template:`<img src="./assets/img/img1.jpg" class="responsive-img" alt="some image " />`// static
template:`<img src="{{url}}" class="responsive-img" alt="{{titulo}}" />`
})
export class FotoComponent{
    @Input ()url=""
    @Input()titulo=""
}

//data binding
//{{}} = angular expression