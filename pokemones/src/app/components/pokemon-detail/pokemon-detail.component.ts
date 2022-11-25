import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/interfaces/pokemon.interface';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PokemonDetailComponent implements OnInit {
  @Input() dataSource: Array<any> = [];
  columnsToDisplay: Array<string> = ['Código', 'Nombre', 'Experiencia base', 'Peso', 'Altura'];
  optionsCheckBox: Array<string> = [];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: IPokemon | null;
  constructor() { }

  ngOnInit() {
    this.optionsCheckBox = ['Código', 'Nombre', 'Experiencia base', 'Peso', 'Altura'];
  }

  /**
   * Funcion para devolver el estado de la columna
   * @param column 
   * @returns 
   */
  showColumn(column: string): boolean {
    return this.columnsToDisplay.includes(column) ? false : true;
  }

  /**
   * Funcion para agregar o columna que se desea mostrar
   * @param op 
   */
  changeColumns(op: string) {
    let index = this.columnsToDisplay.indexOf(op);
    this.columnsToDisplay.includes(op) ? this.columnsToDisplay.splice(index, 1) 
    : this.columnsToDisplay.splice(index, 0, op);
  }

}
