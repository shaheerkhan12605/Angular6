import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { EducationComponent } from './user/education/education.component';
import { SettingsComponent } from './user/settings/settings.component';
import { FormsModule } from '@angular/forms';
import {AuthenticationService } from './authentication.service';
import {PostService } from './post.service';
import { PostsComponent } from './user/posts/posts.component';
import { CommentComponent } from './user/posts/comment/comment.component';

const routes:Routes=[
  {
    path:'user',
    component:UserComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProfileComponent,
    EducationComponent,
    SettingsComponent,
    PostsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
  PostService,
  AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
