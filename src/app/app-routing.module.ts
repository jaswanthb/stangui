import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ClientcreatenewComponent } from './client/clientcreatenew/clientcreatenew.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProjectComponent } from './project/project.component';
import { ProjectcreatenewComponent } from './project/projectcreatenew/projectcreatenew.component';
import { UsersComponent } from './users/users.component';
import { UserscreatenewComponent } from './users/userscreatenew/userscreatenew.component';
import { VendorsComponent } from './vendors/vendors.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { LandingpageComponent } from './admin/landingpage/landingpage.component';
import { LandingpagenewComponent } from './admin/landingpage/landingpagenew/landingpagenew.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { ProfileQuestionsComponent } from './admin/profile/profile-questions/profile-questions.component';
import { ProfileeditquestionComponent } from './admin/profile/profileQuestions/profileeditquestion/profileeditquestion.component';
import { ExternalPartnersComponent } from './admin/external-partners/external-partners.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { MemberIdsComponent } from './admin/member-ids/member-ids.component';
import { UsereditComponent } from './users/useredit/useredit.component';
import { SubmitinvoiceComponent } from './project/submitinvoice/submitinvoice.component';
import { ImportuidComponent } from './project/importuid/importuid.component';
import { VendorscreatenewComponent } from './vendors/vendorscreatenew/vendorscreatenew.component';
import { AddquestionComponent } from './project/projectcreatenew/addquestion/addquestion.component';
import { MergeprojectsComponent } from './project/mergeprojects/mergeprojects.component';
import { TestprojectComponent } from './project/projectcreatenew/testproject/testproject.component';
import { StatuscompleteComponent } from './project/statuscomplete/statuscomplete.component';
import { StatusTerminateComponent } from './project/status-terminate/status-terminate.component';
import { StatusQualityTerminateComponent } from './project/status-quality-terminate/status-quality-terminate.component';
import { StatusOverQuotaComponent } from './project/status-over-quota/status-over-quota.component';

const routes: Routes = [

  // { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: '', component: ProjectComponent,  canActivate: [AuthGuard] },

{path : 'project',  component: ProjectComponent},


{path : 'Client', component: ClientComponent},


{path : 'Vendors', component: VendorsComponent},


{path : 'User', component: UsersComponent},


{path : 'project/projectcreatenew', component: ProjectcreatenewComponent},

{path : 'project/mergeprojects', component: MergeprojectsComponent},


{path : 'project/projectcreatenew/addquestion', component: AddquestionComponent},

{path : 'project/projectcreatenew/testproject', component: TestprojectComponent},


{path : 'project/submitinvoice', component: SubmitinvoiceComponent},

{path : 'project/importuid', component: ImportuidComponent},

{path : 'client/clientcreatenew', component: ClientcreatenewComponent},


{path : 'user/usercreatenew', component: UserscreatenewComponent},


{path : 'user/useredit', component: UsereditComponent},


{path : 'vendors/vendorscreatenew', component: VendorscreatenewComponent},


{path : 'landingpage', component: LandingpageComponent},


{path : 'landingpagenew', component: LandingpagenewComponent},


{path : 'login', component: LoginComponent},

{path : 'memberids', component: MemberIdsComponent},


{path : 'profile', component: ProfileComponent},

{path : 'profile/profilequestions', component: ProfileQuestionsComponent},

{path : 'profile/profilequestions/profileeditquestion', component: ProfileeditquestionComponent},

{path : 'externalpartners', component: ExternalPartnersComponent},

{path : 'reports', component: ReportsComponent},

{path : 'statuscomplete', component: StatuscompleteComponent},

{path : 'statusterminate', component: StatusTerminateComponent},

{path : 'statusqualityterminate', component: StatusQualityTerminateComponent},

{path : 'statusoverquota', component: StatusOverQuotaComponent},


   //Wild Card Route for 404 request
   { path: '**', pathMatch: 'full', 
   component: PagenotfoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
