import { NgModule } from '@angular/core';

import { ModalComponent, ModalDirectivesDirective } from './modal/modal.component';
import { CommonModule } from '@angular/common';
// import { AsideToggleDirective } from './layout/aside.directive';
// import { BreadcrumbsComponent } from './layout/breadcrumb.component';
// import { NavDropdownDirective, NavDropdownToggleDirective } from './layout/nav-dropdown.directive';
// import { SidebarToggleDirective, MobileSidebarToggleDirective, SidebarOffCanvasCloseDirective } from './layout/sidebar.directive';
import { RouterModule } from '@angular/router';
// import { SubNavigationComponent } from './sub-navigation/sub-navigation.component';
// import { NotesComponent } from './notes/notes.component';
// import { ButtonComponent } from './button/button.component';
// import { InputComponent } from './input/input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { CardComponent } from './card/card.component';
// import { LoaderComponent } from './loader/loader.component';

@NgModule({
    declarations: [
        ModalComponent,
        ModalDirectivesDirective
        // AsideToggleDirective,
        // BreadcrumbsComponent,
        // NavDropdownDirective,
        // NavDropdownToggleDirective,
        // SidebarToggleDirective,
        // MobileSidebarToggleDirective,
        // SidebarOffCanvasCloseDirective
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ModalComponent,
        ModalDirectivesDirective
        // AsideToggleDirective,
        // BreadcrumbsComponent,
        // NavDropdownDirective,
        // NavDropdownToggleDirective,
        // SidebarToggleDirective,
        // MobileSidebarToggleDirective,
        // SidebarOffCanvasCloseDirective
    ]
})
export class SharedModule { }
