import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    trigger('navigation', [
      state('before', style({ transform: 'translateY(0)' })),
      state('after', style({ transform: 'translateY(-5px) rotate(-315deg)' })),
      transition('before <=> after', animate(400)),
      state('nextBefore', style({ transform: 'translateY(0)' })),
      state('nextAfter', style({ transform: 'translateY(-10px) rotate(315deg)' })),
      transition('nextBefore <=> nextAfter', animate(400)),
      transition('lastBefore <=> lastAfter', [
        animate(200, style({ transform: 'translateY(-5px) rotate(-10deg)' })),
        animate(200, style({ transform: 'translateY(-5px) rotate(10deg)' })),
        animate(200)
      ]),
      state('beforeNav', style({ left: '-500px' })),
      state('afterNav', style({ left: '0' })),
      transition('afterNav <=> beforeNav', animate(450)),
    ]),

    trigger('readMore1', [
      state('open', style({ height: '90px', overflow: 'hidden'})),
      state('closed', style({ height: '*'})),
      transition('open <=> closed', animate('.4s'))
    ]),

    trigger('readMore2', [
      state('open', style({ height: '160px', overflow: 'hidden'})),
      state('closed', style({ height: '*'})),
      transition('open <=> closed', animate('.5s'))
    ]),

    trigger('readMore3', [
      state('open', style({ height: '190px', overflow: 'hidden'})),
      state('closed', style({ height: '*'})),
      transition('open <=> closed', animate('.4s'))
    ]),
  ]
})
export class MainPageComponent implements OnInit {
  line1 = false
  readFst = true
  readSec = true
  readThd = true
  requestForm!: any
  buttonFst = true
  buttonSec = false
  buttonThd = false
  buttonFth = false

  constructor() {}
  
  ngOnInit() {
    this.requestForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      message: new FormControl('')
    })
  }

  navAnime() {
    this.line1 = !this.line1
  }
  
  readMoreButton1() {
    this.readFst = !this.readFst
  }
  readMoreButton2() {
    this.readSec = !this.readSec
  }
  readMoreButton3() {
    this.readThd = !this.readThd
  }

  butFst() {
    this.buttonFst = true
    this.buttonSec = false
    this.buttonThd = false
    this.buttonFth = false
  }
  butSec() {
    this.buttonFst = false
    this.buttonSec = true
    this.buttonThd = false
    this.buttonFth = false
  }
  butThd() {
    this.buttonFst = false
    this.buttonSec = false
    this.buttonThd = true
    this.buttonFth = false
  }
  butFth() {
    this.buttonFst = false
    this.buttonSec = false
    this.buttonThd = false
    this.buttonFth = true
  }

  sendRequest() {
    const requestFormData = {...this.requestForm.value}
    console.log(requestFormData);
    alert( `name: ${requestFormData.name} \n email: ${requestFormData.email} \n phone: ${requestFormData.phone} \n message: ${requestFormData.message}  ` )
  }

  logOut() {
    localStorage.clear()
    location.reload()
  }

}
