import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import { PageComponentsRoutingModule } from './page-components-routing.module';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FormsModule } from '@angular/forms';
import { DialogePopupComponent } from './dialoge-popup/dialoge-popup.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    DialogePopupComponent
  ],
  imports: [
    CommonModule,
    PageComponentsRoutingModule,
    NgbNavModule,
    FormsModule,
    MatDialogModule
  ],
  exports:[
    HeaderComponent,
    SideNavComponent
  ]
})
export class PageComponentsModule { }
