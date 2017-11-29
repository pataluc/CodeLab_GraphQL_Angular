import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PanelModule } from 'primeng/primeng'
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'
import { ApolloModule, Apollo } from 'apollo-angular'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http'

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
    HttpClientModule,
    HttpLinkModule,
    ApolloModule,
    BrowserModule,
    BrowserAnimationsModule,
    PanelModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TchatService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({uri: 'api/graphql'}),
      cache: new InMemoryCache()
    })
  }
}
