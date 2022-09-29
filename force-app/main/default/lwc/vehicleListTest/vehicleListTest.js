import {LightningElement, wire, track, api } from 'lwc';

import getAccountList from '@salesforce/apex/VehicleListController.getAccount';
import getShowroom from '@salesforce/apex/VehicleListController.getShowroom';
import getVehicle from '@salesforce/apex/VehicleListController.getVehicle';

import { NavigationMixin } from 'lightning/navigation';

const columns = [{
    label: 'Vehicle Name',
   fieldName: 'Name',
}];

export default class AccountList extends LightningElement {

    @track accountId = '';
    @track vehicleId;
    @track showrooms;
    @track vehicles
    @track columns = columns;
    @track selectedVehicles;
    vehicles;

    @wire(getAccountList) accounts;
    @wire(getShowroom, {
        accountId: '$accountId'
    }) showrooms;
    @wire(getVehicle, {
        vehicleId: '$vehicleId'
    }) vehicles;
    vehicleidfrmparent;
    onValueSelection(event) {
        console.log(this.showrooms)
        const selectedAccount = event.target.value;
        this.accountId = event.target.value;

    }

    onValueSelection2(event) {
        const selectedShowroom = event.target.value;
        this.vehicleId = event.target.value;
    }
    handleClick(event){
        console.log(this.vehicleId)
        const selectedVehicle = event.target.value;
        this.vehicleId = event.target.value;
       this.event.preventDefault();
        this.vehicleidfrmparent=event.target.dataset.vehicleId;

    }

}