import { Component, Pipe, PipeTransform } from '@angular/core';
import { GLOVES } from './gloves';
import { ListItemComponent } from './list-item/list-item.component';
import {Glove} from "./glove"

@Pipe({name: 'gloveMaterial'})
export class GloveMaterialPipe implements PipeTransform {
  transform(gloves: any[], gloveMaterials: string[]): any[] {
    if (!gloveMaterials || gloveMaterials.length === 0) return gloves;
    return gloves.filter(glove => gloveMaterials.includes(glove.material));
  }
}

@Pipe({name: 'gloveColour'})
export class GloveColourPipe implements PipeTransform {
  transform(gloves: any[], gloveColours: string[]): any[] {
    if (!gloveColours || gloveColours.length === 0) return gloves;
    return gloves.filter(glove => gloveColours.includes(glove.colour));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string;
  gloveMaterials = [
    {name: 'Polychloroprene', selected: false},
    {name: 'Latex', selected: false},
    {name: 'Nylon', selected: false},
    {name: 'Nitrile', selected: false}
  ];
  
  gloveColours = [
    {name: 'Green', selected: false},
    {name: 'Natural', selected: false},
    {name: 'White', selected: false}
  ];
  
  gloves=GLOVES
  
  get selectedGloveMaterials() {
    var selectedMaterials = this.gloveMaterials.reduce((materials, material) => {
      if (material.selected) {
        materials.push(material.name);
      }
      return materials;
    }, [])
    if(selectedMaterials.length==0){
      selectedMaterials= this.gloveMaterials.map(function(a) {return a.name;});
    }
    return selectedMaterials
    
  }

  get selectedGloveColours() {
    var selectedColours=this.gloveColours.reduce((colours, colour) => {
      if (colour.selected) {
        colours.push(colour.name);
      }
      return colours;
    }, [])
    if(selectedColours.length==0){
      selectedColours= this.gloveColours.map(function(a) {return a.name;});
    }
    return selectedColours
  }

}
