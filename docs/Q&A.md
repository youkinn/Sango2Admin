- error1:

Angular2 exception: Can't bind to 'ngFor' since it isn't a known native property

    原因：
    
    angular内置的指令未被识别
    
    解决：
    
    app.module里边需要导入：
    
    import { BreadcrumbsComponent } from './shared/breadcrumb.component';
    
    其他的模块里边导入：
    
    import { CommonModule } from '@angular/common';

