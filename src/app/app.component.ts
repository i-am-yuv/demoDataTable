import { Component } from '@angular/core';
import { Model } from './model';
import { Action } from './action';
import { ModelValue } from './model-value';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataTableproject';

   colObj : Model = new Model() ;

   actionObj : Action = new Action() ;

    listOfCol : Model[] = [
    { "colName":"firstName" },
    {"colName": "lastName" },
    {"colName": "Email" }
];

listOfColValue : ModelValue[] = [
  { "colValue":"Ramesh" },
  {"colValue": "Kumar" },
  {"colValue": "ramesh@123" }
];



listOfAction : Action[] = [
  { "actionName": "Add" , "actionPath":"demoActionpath" },
  {"actionName": "Edit"  , "actionPath":"demoActionpath"},
  {"actionName": "Delete", "actionPath":"demoActionpath" }
];

  constructor()
  {}
  ngOnInit()
  {}


}
