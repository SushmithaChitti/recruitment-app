import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusComponent } from './status.component';
// import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '', component: StatusComponent},
        // { path: 'home', component: HomeComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StatusRoutingModule {
}

