import { Component } from '@angular/core';
// import { TableComponent } from '@devtien/ngx-components/table';

@Component({
  selector: 'tien-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  /*private db = [
    {
      id: 132,
      options: {
        component: TableComponent.name,
      }
    }
  ];*/
  constructor() {

  }

  /*getDBHTML() {
    return `
<div data-uhce='1'>

</div>
    `;
  }*/
}
