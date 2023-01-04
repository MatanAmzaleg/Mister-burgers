import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
    selector: 'app-model-driven',
    templateUrl: './model-driven.component.html',
    styleUrls: ['./model-driven.component.scss']
})
export class ModelDrivenComponent implements OnInit {
    form!: FormGroup
    addresses!: FormArray

    faXmark = faXmark

    constructor(private fb: FormBuilder, private router:Router) {
        this.form = this.fb.group({
            first: ['', [Validators.required], []], // [initialVal, validators, asyncValidators]
            last: '',
            phone: '',
            addresses: this.getAddressArray(),
            note: '',
        })



        // this.form = new FormGroup({
        //     first: new FormControl(''),
        //     last: new FormControl(''),
        //     username: new FormControl(''),
        //     address: new FormGroup({
        //         street: new FormControl()
        //         // ....
        //     }),
        // })
    }

    onAddAddress() {
        this.addresses.push(this.getAddressGroup())
    }


    getAddressArray() {
        this.addresses = this.fb.array([this.getAddressGroup()])
        return this.addresses
    }


    getAddressGroup() {
        return this.fb.group({
            street: '',
            city: '',
            floor:''
        })
    }

    onReturnToOrder(){
        this.router.navigate(['order'])
    }

    ngOnInit(): void {
        // this.form.patchValue
    }

}
