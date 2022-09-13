import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './project/project.component';
import { ClientComponent } from './client/client.component';
import { UsersComponent } from './users/users.component';
import { VendorsComponent } from './vendors/vendors.component';
import { VendorscreatenewComponent } from './vendors/vendorscreatenew/vendorscreatenew.component';
import { UserscreatenewComponent } from './users/userscreatenew/userscreatenew.component';
import { ProjectcreatenewComponent } from './project/projectcreatenew/projectcreatenew.component';
import { ClientcreatenewComponent } from './client/clientcreatenew/clientcreatenew.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';

import { CKEditorModule } from 'ckeditor4-angular';
import { LoginComponent } from './login/login.component';
import { NavabrComponent } from './navbar/navabr.component';
import { LandingpageComponent } from './admin/landingpage/landingpage.component';
import { MemberIdsComponent } from './admin/member-ids/member-ids.component';
import { LandingpagenewComponent } from './admin/landingpage/landingpagenew/landingpagenew.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { ProfileQuestionsComponent } from './admin/profile/profile-questions/profile-questions.component';
import { ProfileeditquestionComponent } from './admin/profile/profileQuestions/profileeditquestion/profileeditquestion.component';
import { ExternalPartnersComponent } from './admin/external-partners/external-partners.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { UsereditComponent } from './users/useredit/useredit.component';
import { SubmitinvoiceComponent } from './project/submitinvoice/submitinvoice.component';
import { ImportuidComponent } from './project/importuid/importuid.component';
import { AddquestionComponent } from './project/projectcreatenew/addquestion/addquestion.component';
import { MergeprojectsComponent } from './project/mergeprojects/mergeprojects.component';
import { TestprojectComponent } from './project/projectcreatenew/testproject/testproject.component';
import { StatuscompleteComponent } from './project/statuscomplete/statuscomplete.component';
import { StatusTerminateComponent } from './project/status-terminate/status-terminate.component';
import { StatusQualityTerminateComponent } from './project/status-quality-terminate/status-quality-terminate.component';
import { StatusOverQuotaComponent } from './project/status-over-quota/status-over-quota.component';



@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ClientComponent,
    UsersComponent,
    VendorsComponent,
    VendorscreatenewComponent,
    UserscreatenewComponent,
    ProjectcreatenewComponent,
    ClientcreatenewComponent,
    PagenotfoundComponent,
    LoginComponent,
    NavabrComponent,
    LandingpageComponent,
    MemberIdsComponent,
    LandingpagenewComponent,
    ProfileComponent,
    ProfileQuestionsComponent,
    ProfileeditquestionComponent,
    ExternalPartnersComponent,
    ReportsComponent,
    UsereditComponent,
    SubmitinvoiceComponent,
    ImportuidComponent,
    AddquestionComponent,
    MergeprojectsComponent,
    TestprojectComponent,
    StatuscompleteComponent,
    StatusTerminateComponent,
    StatusQualityTerminateComponent,
    StatusOverQuotaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DataTablesModule,
    FormsModule,
HttpClientModule,
CKEditorModule,
ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
