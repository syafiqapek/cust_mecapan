import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, App, Nav, Events, LoadingController, Loading, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServiceApiProvider } from '../../providers/service-api/service-api';
import { StartPage } from '../start/start';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { GooglePlus } from "@ionic-native/google-plus";
import { Facebook } from "@ionic-native/facebook";
import { MyApp } from "../../app/app.component";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit {
  hair: any[];
  loading: Loading;
  update: any;
  userId: any;
  profile: FormGroup;
  userProfile: any = {}
  skin: any[];
  form: {};
  user: any = {};

  constructor(private alertCtrl: AlertController,public loadingCtrl: LoadingController, public navCtrl: NavController, public events: Events, private appCtrl: App, private facebook: Facebook, private googlePlus: GooglePlus, public fb: FormBuilder, private app: App, private serviceApi: ServiceApiProvider, private storage: Storage) {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.createFormGroup()
    this.loading.present()
  }

  createFormGroup() {
    this.profile = this.fb.group({
      userID: ["", Validators.required],
      fullName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      phoneNo: ['', Validators.required],
      weight: ['', Validators.required],
      skinTypeID: ["", Validators.required],
      hairLengthID: ["", Validators.required]
    });
  }

  changeProfilePicture() {
  }

  ngOnInit() {
    this.storage.get("user").then(data => {
      this.user = data
      this.getSkinType()
      this.getHairType()
      this.getUserProfile()
    })
  }

  getUserProfile() {
    this.serviceApi.getProfile().subscribe(data => {
      console.log("getProfile", data)
      this.userProfile = data
      this.profile.controls.userID.setValue(this.userProfile.detail.userID)
      this.profile.controls.fullName.setValue(this.userProfile.detail.fullName)
      this.profile.controls.dateOfBirth.setValue(this.userProfile.detail.dateOfBirth)
      this.profile.controls.email.setValue(this.userProfile.detail.email)
      this.profile.controls.gender.setValue(this.userProfile.detail.gender)
      this.profile.controls.phoneNo.setValue(this.userProfile.detail.phoneNo)
      this.profile.controls.weight.setValue(this.userProfile.detail.weight)// form ni x de lagi
      this.profile.controls.skinTypeID.setValue(this.userProfile.detail.skinTypeID)
      this.profile.controls.hairLengthID.setValue(this.userProfile.detail.hairLengthID)
      this.loading.dismiss()
    })
  }

  chooseGender(gender) {
    console.log(gender)
  }

  getSkinType() {
    this.form = {
      moduleName: "UserAccount",
      masterName: "List Of Skin Type"
    }
    this.serviceApi.getSkinType(this.form).subscribe(data => {
      this.skin = data
    })
  }

  getHairType() {
    this.form = {
      moduleName: "UserAccount",
      masterName: "List Of Hair Length"
    }
    this.serviceApi.getHairType(this.form).subscribe(data => {
      this.hair = data
    })
  }

  // setSkinType(ParameterName) {
  //   this.skin = this.storage.retrieve("skinType")
  //   console.log("skin", this.skin)
  //   console.log("p",ParameterName)
  // }

  updateUserDetail(form) {
    console.log("updateUserDetail", form)

    let confirm = this.alertCtrl.create({
      message: 'Are you sure you want to update your profile?',
      buttons: [
      {
      text: 'No',
      handler: () => {
      console.log('Disagree clicked');
      }
      },
      {
      text: 'Yes',
      handler: () => {
        this.serviceApi.postUpdateUserProfile(form).subscribe(data => {
          console.log("postUpdateUserProfile", data)
          },
          err => {
            console.log(err);
        })
      console.log('Agree clicked');
      }
      }]
      });
      confirm.present();
    // if (form.valid == false) {    //check dulu data valid x
    //   alert("Please Complete The Profile")
    // } else {
    //   this.serviceApi.postUpdateUserProfile(form).subscribe(data => {
    //     console.log("postUpdateUserProfile", data)
    //   })
      this.update = this.profile.value
      console.log("update", this.update)
      this.userId = this.userProfile.detail.userID
    // }
  }

  logout() {
    if (this.user.loginType == "Google") {
      this.googlePlus.disconnect()
      this.handleLogOut()
    }
    else if (this.user.loginType == "Facebook") {
      this.facebook.logout()
      this.handleLogOut()
    }
    else {//meccapan
      this.handleLogOut()
    }

  }

  handleLogOut() {
    this.storage.clear();
    this.events.publish("LogOut")
  }




}


