import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PanelModule } from 'primeng/primeng'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { TchatComponent } from './tchat/tchat.component'
import { TchatService } from './tchat/tchat.service'
import { MessageComponent } from './message/message.component'
import { NavBarComponent } from './navbar/navbar.component'
import { HistoryComponent } from './history/history.component'

const appRoutes: Routes = [
  { path: '', redirectTo: 'tchat', pathMatch: 'full' },
  { path: 'tchat', component: TchatComponent },
  { path: 'history', component: HistoryComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TchatComponent,
    MessageComponent,
    NavBarComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PanelModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TchatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
