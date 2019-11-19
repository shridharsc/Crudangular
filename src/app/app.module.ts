import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms' 
import {FormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UpdatecrudeComponent } from './updatecrude/updatecrude.component';
import {RouterModule} from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { AdddetailComponent } from './adddetail/adddetail.component'

const myapp=[
  {path:'',component:DetailComponent},
  {path:'update',component:UpdatecrudeComponent},
  {path:'add',component:AdddetailComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    UpdatecrudeComponent,
    DetailComponent,
    AdddetailComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(myapp),ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
