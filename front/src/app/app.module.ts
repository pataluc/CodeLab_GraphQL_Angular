import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PanelModule } from 'primeng/primeng'
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { TchatComponent } from './tchat/tchat.component'
import { TchatService } from './tchat/tchat.service'
import { MessageComponent } from './message/message.component'
import { NavBarComponent } from './navbar/navbar.component'
import { HistoryComponent } from './history/history.component'

import { ApolloModule } from 'apollo-angular'
import { ApolloClient, createNetworkInterface } from 'apollo-client'

const appRoutes: Routes = [
  { path: '', redirectTo: 'tchat', pathMatch: 'full' },
  { path: 'tchat', component: TchatComponent },
  { path: 'history', component: HistoryComponent }
]

const apolloClient = new ApolloClient({
   networkInterface: createNetworkInterface({
       uri: 'api/graphql'
   })
})

export function provideApolloClient(): ApolloClient {
  return apolloClient;
}


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
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ApolloModule.forRoot(provideApolloClient)
  ],
  providers: [
    TchatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
