import { LightningElement , api, wire} from 'lwc';

import getVehicleRows from '@salesforce/apex/VehicleListControllerT.getVehicleRows';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
const columns =[
    {label: "Vehicle Name",
fieldName: "Name"},
{label: "Brand",
fieldName: "Brand__c"},
{label: "Condition",
fieldName: "Condition__c"},
{label: "Price",
fieldName: "Price__c"}
];

export default class VehicleRecordList extends LightningElement {
  columns=columns;

 //  @api veh;
    @api vehiclesId;
    @wire(getVehicleRows,{vehiclesId: '$vehiclesId'}) vehicles;}